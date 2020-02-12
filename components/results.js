// Imports

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Accordion from "react-native-collapsible/Accordion";
import EStyleSheet from "react-native-extended-stylesheet";
import AllQuestionsCorrect from '../assets/img/thumbs-up.svg'
// Review Page

export default class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("SCORE IS: ", this.props.score);
    score = this.props.score;
    data = this.props.data;
    ans = this.props.ans;
    incorrect_data = [];

    this.state = {
      score: score,
      data: this.getData(0, 1),
      len: data.length,
      all_questions: true,
      activeSections: [],
      multipleSelect: false
    };

    var len = data.length;
    for (let i = 0; i < len; i++) {
      data[i]["question_num"] = i + 1;
      if (ans[i].length > 1) {
        data[i]["user_ans"] = ans[i].sort();
        data[i]["correct"] = data[i].correct.split(",").sort();
        for (l = 0; l < data[i]["user_ans"].length; l++) {
          if (data[i]["user_ans"][l] !== data[i]["correct"][l]) {
            incorrect_data.push(data[i]);
            break;
          }
        }
      } else {
        data[i]["user_ans"] = [ans[i]];
        data[i]["correct"] = [data[i].correct];
        for (l = 0; l < data[i]["user_ans"].length; l++) {
          if (data[i]["user_ans"][l] !== data[i]["correct"][l]) {
            incorrect_data.push(data[i]);
          }
        }
      }
    }

    that = this;
  }
  choice_check = (answer, correct) => {
    for (let i = 0; i < correct.length; i++) {
      if (answer[i] !== correct[i]) {
        return false;
      }
    }
    return true;
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: EStyleSheet.value("22rem"),
            backgroundColor: isActive
              ? colors.question_tab_active
              : colors.question_tab
          }
        ]}
      >
        <View
          style={{
            flex: 10,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Text
            style={[
              styles.basic_text,
              {
                color: colors.list_text,
                fontFamily: fonts.regular
              }
            ]}
            numberOfLines={isActive ? undefined : 1}
            ellipsizeMode={"tail"}
          >
            {section.question}
          </Text>
          {section.question_image && isActive ? (
            <Image
              resizeMode="contain"
              style={[styles.image_canvas, { alignSelf: "center" }]}
              source={my_images.questions[section.question_image]}
            />
          ) : null}
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesomeIcon
            style={{
              overflow: "hidden",
              flex: 1,
              backgroundColor: colors.circle_inside,
              borderRadius: EStyleSheet.value("10rem"),
              borderWidth: 1,
              borderColor: this.choice_check(section.user_ans, section.correct)
                ? colors.green_circle
                : colors.red_circle
            }}
            icon={
              this.choice_check(section.user_ans, section.correct)
                ? ["fas", "check-circle"]
                : ["fas", "times-circle"]
            }
            size={EStyleSheet.value("20rem")}
            color={
              this.choice_check(section.user_ans, section.correct)
                ? colors.green_circle
                : colors.red_circle
            }
          />
        </View>
      </Animatable.View>
    );
  };

  renderContent = (section, _, isActive) => {
    console.log(
      "renderino",
      this.choice_check(section.user_ans, section.correct)
    );
    return (
      <Animatable.View style={{}}>
        {this.choice_check(section.user_ans, section.correct) ? null : (
          <View
            style={[
              styles.box,
              {
                backgroundColor: isActive
                  ? colors.red_background
                  : colors.your_answer
              }
            ]}
          >
            <Text
              style={[
                styles.list_title,
                {
                  color: colors.list_heading,
                  fontFamily: fonts.bold
                }
              ]}
            >
              Your Answer
            </Text>
            {this.user_answer(section)}
          </View>
        )}
        <View
          style={[
            styles.box,
            { backgroundColor: colors.green_background }
          ]}
        >
          <Text
            style={[
              styles.list_title,
              {
                color: colors.list_heading,
                fontFamily: fonts.bold
              }
            ]}
          >
            {this.choice_check(section.user_ans, section.correct)
              ? "Your Answer"
              : "Correct Answer"}
          </Text>
          {this.correct_answer(section)}
        </View>
        {section.explanation ? (
          <View
            style={[
              styles.box,
              {
                backgroundColor:
                  colors.explanation_background
              }
            ]}
          >
            <Text
              style={[
                styles.list_title,
                {
                  color: colors.list_heading,
                  fontFamily: fonts.bold
                }
              ]}
            >
              Explanation
            </Text>
            <Text
              style={[
                styles.basic_text,
                {
                  color: colors.list_text,
                  fontFamily: fonts.regular
                }
              ]}
            >
              {section.explanation}
            </Text>
          </View>
        ) : null}
      </Animatable.View>
    );
  };

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.setState({
        data: this.getData(this.state.score, this.state.len)
      });
    }, 500);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  user_answer = item =>
    item.user_ans.map(function(k) {
      if (item.options_image) {
        return (
          <Image
            resizeMode="contain"
            style={styles.image_canvas}
            source={my_images.questions[item.options[k]]}
          />
        );
      } else {
        return (
          <Text
            style={[
              styles.basic_text,
              {
                fontFamily: fonts.regular,
                color: colors.list_text
              }
            ]}
          >
            {item.options[k]}
          </Text>
        );
      }
    });
  correct_answer = item =>
    item.correct.map(function(k) {
      if (item.options_image) {
        return (
          <Image
            resizeMode="contain"
            style={styles.image_canvas}
            source={my_images.questions[item.options[k]]}
          />
        );
      } else {
        return (
          <Text
            style={[
              styles.basic_text,
              {
                fontFamily: fonts.regular,
                color: colors.list_text
              }
            ]}
          >
            {item.options[k]}
          </Text>
        );
      }
    });

  getData(score, total) {
    return [
      { x: 1, y: score },
      { x: 2, y: total - score }
    ];
  }

  render() {
    return (
      <View
        style={{ backgroundColor: 'white', flex: 1 }}
      >
        <StatusBar barStyle="light-content" />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomWidth: EStyleSheet.value("2rem"),
            borderTopWidth: EStyleSheet.value("2rem"),
            borderColor: colors.button_background,
            overflow: "hidden",
            zIndex: 11
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ all_questions: true, activeSections: [] });
            }}
          >
            <View
              style={[
                styles.view_tab_both,
                {
                  backgroundColor: this.state.all_questions
                    ? colors.button_background
                    : colors.inactive_button
                }
              ]}
            >
              <Text
                style={[
                  {
                    color: this.state.all_questions
                      ? colors.active_button_text
                      : colors.inactive_button_text,
                    fontFamily: fonts.bold
                  },
                  styles.view_tab_text
                ]}
              >
                ALL QUESTIONS
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              this.setState({ all_questions: false, activeSections: [] });
            }}
          >
            <View
              style={[
                styles.view_tab_both,
                {
                  backgroundColor: !this.state.all_questions
                    ? colors.button_background
                    : colors.inactive_button
                }
              ]}
            >
              <Text
                style={[
                  {
                    color: !this.state.all_questions
                      ? colors.active_button_text
                      : colors.inactive_button_text,
                    fontFamily: fonts.bold
                  },
                  styles.view_tab_text
                ]}
              >
                INCORRECT
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {this.state.all_questions || incorrect_data.length ? 
        <ScrollView>
          <Accordion
            activeSections={this.state.activeSections}
            sections={this.state.all_questions ? data : incorrect_data}
            touchableComponent={TouchableOpacity}
            expandMultiple={this.state.multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
        :
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={{flex:0.3}} />
            <View style={{flex: 0.6}}>
              <AllQuestionsCorrect width='100%' height='100%' />
            </View>
            <View style={{flex:0.2}} />
            <View style={{flex:0.8}}>
            <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontFamily: fonts.bold,
              fontSize: EStyleSheet.value("25rem"),
              color: colors.list_text
            }}
          >
            Well Done!
          </Text>
          <Text
            style={{
              marginTop: EStyleSheet.value("10rem"),
              textAlign: "center",
              alignSelf: "center",
              fontFamily: fonts.regular,
              fontSize: EStyleSheet.value("18rem"),
              color: colors.list_text
            }}
          >
          You answered all questions correctly!
          </Text>
              </View>
          </View>}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  list_title_view: {
    justifyContent: "space-between",
    flexGrow: 1,
    flexDirection: "row",
    marginTop: "10rem",
    marginLeft: "10rem",
    marginRight: "10rem",
    borderRadius: "10rem"
  },
  box: {
    flex: 1,
    paddingTop: "10rem",
    paddingBottom: "10rem",
    paddingLeft: "22rem",
    paddingRight: "22rem"
  },
  list_title: {
    fontSize: "14rem",
    paddingBottom: "12rem"
  },
  view_tab_both: {
    paddingLeft: "15rem",
    paddingRight: "22rem",
    paddingTop: "12rem",
    paddingBottom: "12rem",
    flex: 1,
    zIndex: 999
  },
  view_tab_text: {
    textAlign: "center",
    fontSize: "14rem"
  },
  circle: {
    width: "15rem",
    height: "15rem",
    borderRadius: "7.5rem",
    marginTop: "-7.5rem"
  },
  basic_text: {
    fontSize: "16rem",

    lineHeight: "18rem"
  },
  image_canvas: {
    height: "100rem",
    width: "100rem",
    flexShrink: 1,
    marginBottom: "10rem"
  }
});

const fonts = {
  regular: 'Nunito-Regular',
  bold: 'Nunito-Bold',
}

const colors ={
  header_background: '#396afc',
  button_background: '#396afc',
  inactive_button: 'white',
  active_button_text: 'white',
  inactive_button_text: '#396afc',
  header_text: 'white',
  header_sub_text: 'white',
  circle_background: 'white',
  circle_inside: 'white',
  green_circle: '#6FCF97',
  red_circle: '#EB5757',
  list_heading: '#2A3350',
  list_text: '#2A3350',
  red_background: '#F9CDCD',
  green_background: '#B8EDD8',
  explanation_background: '#D3D0FF',
  question_tab: '#F2F2F2',
}