// Imports

import React from 'react';
import { StatusBar, Dimensions, TouchableWithoutFeedback, Text, View, Animated, FlatList, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { VictoryContainer, VictoryPie, VictoryLabel } from "victory-native";
import { Defs, Stop } from "react-native-svg";
import { LinearGradient as LinGrad } from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header } from 'react-navigation-stack';
// Variables

var { height, width } = Dimensions.get('window');


// Review Page

export default class ReviewTest extends React.Component {
  page_type = this.props.challenge_bank
    ? "challenge_bank"
    : "mock_test";
  text_meta = {
    challenge_bank: {
      title: "You have completed the Challenge Bank",
      description:
        "All incorrectly answered questions will remain in the Challenge Bank."
    },
    mock_test: {
      title:
        this.page_type == "mock_test"
          ? this.props.score > this.props.pass_mark
            ? "You have passed this test"
            : "You have failed this test"
          : null,
      description:
        "All incorrectly answered questions have been added to your Challenge Bank."
    }
  };
  constructor(props) {
    super(props);

    score = this.props.score
    pass_mark = this.props.pass_mark
    data = this.props.data
    ans = this.props.ans
    incorrect_data = []

    this.state = {
      scrollY: new Animated.Value(0),
      score: score,
      data: this.getData(0, 1),
      len: data.length,
      all_questions: true,
      first_load: true,
    }
    // var len = data.length
    // for (let i = 0; i < len; i++) {
    //   data[i]['question_num'] = i + 1
    //   if (ans[i].length > 1) {
    //     data[i]['user_ans'] = ans[i].sort()
    //     data[i]['correct'] = data[i].correct.split(",").sort()
    //     for (l = 0; l < data[i]['user_ans'].length; l++) {
    //       if (data[i]['user_ans'][l] !== data[i]['correct'][l]) {
    //         incorrect_data.push(data[i])
    //         break
    //       }
    //     }
    //   } else {
    //     data[i]['user_ans'] = [ans[i]]
    //     data[i]['correct'] = [data[i].correct]
    //     for (l = 0; l < data[i]['user_ans'].length; l++) {
    //       if (data[i]['user_ans'][l] !== data[i]['correct'][l]) {
    //         incorrect_data.push(data[i])
    //       }
    //     }
    //   }
    // }

  // choice_check(answer, correct) {
  //   for (i = 0; i < correct.length; i++) {
  //     if (answer[i] !== correct[i]) {
  //       return false
  //     }
  //   }
  //   return true
  // }


  }
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

  getData(score, total) {
    return [{ x: 1, y: score }, { x: 2, y: total - score }];
  }
  render() {
    console.log(this.state.cat_test_data);
    var len = this.props.data.length;
    if (this.props.challenge_bank) {
      var text = this.props.score.toString() + "/" + len.toString();
      var circle_color = '#4AB027';
      var icon = "check-circle";
    } else {
      var text =
        this.props.score.toString() +
        "/" +
        len.toString() +
        "\n" +
        (this.props.score >= this.props.pass_mark ? "WELL DONE" : "TRY AGAIN");
      var circle_color =
        this.props.score >= this.props.pass_mark
          ? '#4AB027'
          : '#EA2557'
      var icon =
        this.props.score >= this.props.pass_mark
          ? "check-circle"
          : "times-circle";
    }
    const everything_dimension =
      Platform.OS === "ios"
        ? EStyleSheet.value("240rem")
        : height > 700 && width < 700
        ? EStyleSheet.value("320rem")
        : EStyleSheet.value("240rem");
    const defaultData = [{ x: 1, y: 1 }];
    const sharedProps = {
      standalone: false,
      width: everything_dimension,
      height: everything_dimension,
      labels: () => null
    };
    return (
      <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, padding: EStyleSheet.value("20rem") }}>
        <View
          style={{
            flex: 1,
            marginTop:
              Platform.OS === "ios"
                ? width < 768
                  ? "5%"
                  : "10%"
                : height > 500
                ? "5%"
                : 0,
            marginBottom: EStyleSheet.value("-35rem"),
            justifyContent: "flex-start"
          }}
        >
          <FontAwesomeIcon
            size={EStyleSheet.value("60rem")}
            style={{
              overflow: "hidden",
              position: "absolute",
              alignSelf: "center",
              top: EStyleSheet.value("-15rem"),
              zIndex: 10,
              backgroundColor: "white",
              borderRadius: EStyleSheet.value("30rem"),
              borderWidth: EStyleSheet.value("2rem"),
              borderColor: circle_color
            }}
            color={circle_color}
            icon={icon}
          />
          <VictoryContainer
            width={everything_dimension}
            height={everything_dimension}
            style={{ position: "absolute", alignSelf: "center" }}
          >
            <VictoryPie
              {...sharedProps}
              data={defaultData}
              innerRadius={
                Platform.OS === "ios"
                  ? EStyleSheet.value("100rem")
                  : height > 700 && width < 700
                  ? EStyleSheet.value("135rem")
                  : EStyleSheet.value("100rem")
              }
              padding={{ top: 0 }}
              style={{
                data: {
                  fill: 'lightgray',
                  opacity: d => 1
                }
              }}
            />
            <VictoryPie
              {...sharedProps}
              animate={{ duration: 1000 }}
              data={this.state.data}
              padding={{ top: 0 }}
              innerRadius={
                Platform.OS === "ios"
                  ? EStyleSheet.value("100rem")
                  : height > 700 && width < 700
                  ? EStyleSheet.value("135rem")
                  : EStyleSheet.value("100rem")
              }
              cornerRadius={({ datum }) => {
                if (datum.x == 1) {
                  return 25;
                } else {
                  return 0;
                }
              }}
              style={{
                data: {
                  fill: ({ datum }) => {
                    return datum.x === 1 ? circle_color : "transparent";
                  }
                }
              }}
            />
            <VictoryContainer>
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={everything_dimension / 2}
                y={everything_dimension / 2}
                text={text}
                style={[
                  {
                    fontSize: EStyleSheet.value("46rem"),
                    fill: 'white',
                    fontFamily: 'Nunito-Bold',
                    fontWeight: "600"
                  },
                  {
                    fill: "white",
                    fontFamily: 'Nunito-Regular',
                    fontWeight: "300",
                    fontSize: EStyleSheet.value("24rem")
                  }
                ]}
              />
            </VictoryContainer>
          </VictoryContainer>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop:
              Platform.OS === "ios"
                ? width < 768
                  ? "5%"
                  : "20%"
                : width < 500
                ? "15%"
                : "15%",
            paddingBottom: Platform.OS === "ios" ? (width < 768 ? "5%" : 0) : 0
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                color: 'white',
                textAlign: "center",
                fontSize: EStyleSheet.value("18rem"),
                marginBottom: EStyleSheet.value("10rem"),
                marginTop: EStyleSheet.value("20rem")
              }}
            >
              {this.text_meta[this.page_type]["title"]}
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-Regular',
                color: 'white',
                textAlign: "center",
                fontSize: EStyleSheet.value("16rem"),
                marginBottom: EStyleSheet.value("40rem")
              }}
            >
              {this.text_meta[this.page_type]["description"]}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableWithoutFeedback
              onPress={
                  () => this.props.detailed_review()
              }
            >
              <Text
                style={[
                  styles.restart_button,
                  {
                    color: 'white',
                    margin: EStyleSheet.value("10rem"),
                    backgroundColor: "transparent",
                    fontFamily: 'Nunito-Bold',
                    borderColor:
                      'white'
                  }
                ]}
              >
                Detailed Review
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.props.go_back}>
              <Text
                style={[
                  styles.close_button,
                  {
                    color: '#2948ff',
                    fontFamily: 'Nunito-Bold',
                    backgroundColor:
                      'white'
                  }
                ]}
              >
                Close
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = EStyleSheet.create({
  close_button: {
    textAlign: "center",
    borderRadius: "10rem",
    paddingLeft: "8rem",
    paddingRight: "8rem",
    paddingTop: "14rem",
    paddingBottom: "14rem",
    fontSize: "18rem",
    marginLeft: "10rem",
    marginRight: "10rem",
    overflow: "hidden"
  },
  restart_button: {
    textAlign: "center",
    borderRadius: "10rem",
    paddingLeft: "8rem",
    paddingRight: "8rem",
    paddingTop: "14rem",
    paddingBottom: "14rem",
    fontSize: "18rem",
    borderWidth: "1rem",
    overflow: "hidden"
  }
});
