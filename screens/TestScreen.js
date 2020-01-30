// Imports

import React from 'react';
import { ScrollView, StatusBar, Dimensions, View, Text, TouchableWithoutFeedback } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var emitter = require('tiny-emitter/instance');
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
var { height, width } = Dimensions.get('window');
if (height > 667) {
  QUESTION_MAX_HEIGHT = height / 3
}
else {
  QUESTION_MAX_HEIGHT = height / 3
}

// Test Screen (props data + question_bank)

export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.qno = 0
    this.score = 0
    this.questions = []
    this.user_answers = []
    this.correct_asnwers = []

    data_array = this.props.send_data
    questionbank = this.props.questionbank

    if (!questionbank) {
      test_id = this.props.send_test_id;
    }

    this.state = {
      data: data_array,
      test_length: data_array.length,
      question_id: data_array[this.qno].id,
      question: data_array[this.qno].question,
      options: data_array[this.qno].options,
      correctoption: data_array[this.qno].correct.split(","),
      explanation: data_array[this.qno].explanation,
      answered: false,
      pressed_option: '',
      next_hidden: true,
      expl_hidden: true,
      questionbank: questionbank,
      select_options: [],
      header_height: QUESTION_MAX_HEIGHT,
    }
    that = this;
  }
  shuffle_options(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  explanation() {
    this.setState({ expl_hidden: false })
  }
  next() {
    if (this.qno < this.state.data.length - 1) {
      this.qno++

      this.setState({ question_id: data_array[this.qno].id, question: this.state.data[this.qno].question, options: this.state.data[this.qno].options, correctoption: this.state.data[this.qno].correct.split(","), explanation: this.state.data[this.qno].explanation })
    } else {
      if (!this.state.questionbank) {

        db.transaction(function (txn) {
          txn.executeSql(
            'INSERT INTO Test_results ("test_id", "result") VALUES (?,?)',
            [test_id, that.score],
            (txn, results) => {
              console.log('Added to Test_results');
            });
        }, null, null);
      }
      this.props.quizFinish(this.score, this.questions, this.user_answers, this.correct_asnwers);

    }
    this.setState({
      answered: false,
      next_hidden: true,
      expl_hidden: true,
      select_options: [],
    })
  }

  select_option(k) {
    if (this.state.answered == false) {
      if (this.state.select_options.includes(k)) { // Deselects if option already selected
        selected_options = this.state.select_options
        selected_options = selected_options.filter(e => e !== k);
        this.setState({ select_options: selected_options })
      }
      else if (this.state.select_options.length < (this.state.correctoption.length - 1) && !this.state.select_options.includes(k)) {
        selected_options = this.state.select_options //Selects if option not selected 
        selected_options.push(k)
        this.setState({ select_options: selected_options })
      }
      else if (this.state.select_options.length < this.state.correctoption.length && !this.state.select_options.includes(k)) {
        selected_options = this.state.select_options // Selects option and checks the answer 
        selected_options.push(k)
        this.setState({ select_options: selected_options })
        this.check_answer(that.state.select_options);
      }
    }
  }
  change_color(k) {
    if (this.state.correctoption.length == 1 && this.state.answered == false) {
      btn_color = 'white'
      icon_name = 'circle'
      fill_color = 'white'
    }
    else if (this.state.correctoption.length > 1 && this.state.answered == false) {
      if (this.state.select_options.includes(k)) {
        btn_color = '#FCCB39'
        icon_name = 'dot-circle'
        fill_color = 'white'
      }
      else {
        btn_color = 'white'
        icon_name = 'circle'
        fill_color = 'white'
      }
    }
    else {
      if (this.state.correctoption.length == 1) {
        if (k == this.state.correctoption) {
          btn_color = '#4AB027'
          icon_name = 'check-circle'
          fill_color = 'white'
        }
        else if (k != this.state.correctoption && k == this.state.pressed_option) {
          btn_color = '#EA2557'
          icon_name = 'times-circle'
          fill_color = 'white'
        }
        else {
          btn_color = 'white'
          icon_name = 'circle'
          fill_color = 'white'
        }
      }
      else {
        if (this.state.correctoption.includes(k)) {
          btn_color = '#4AB027'
          icon_name = 'check-circle'
          fill_color = 'white'
        }
        else if (!this.state.correctoption.includes(k) && this.state.select_options.includes(k)) {
          btn_color = '#EA2557'
          icon_name = 'times-circle'
          fill_color = 'white'
        }
        else {
          btn_color = 'white'
          icon_name = 'circle'
          fill_color = 'white'
        }
      }
    }
    return {
      btn_color: btn_color,
      icon_name: icon_name,
      fill_color: fill_color,
    }
  }

  multiple_choice_check() {
    sorted_answer = this.state.correctoption.sort()
    sorted_options = this.state.select_options.sort()
    for (i = 0; i < sorted_answer.length; i++) {
      if (sorted_answer[i] !== sorted_options[i]) {
        return false
      }
    }
    return true
  }
  
  check_answer(ans) {
    if (this.state.answered == false) {
      if (this.state.correctoption.length == 1) {
        this.setState({ pressed_option: ans })

        if (ans == this.state.correctoption) {
          correct = 1;
          this.score += 1
        }
        else {
          correct = 0;
        }
      }
      else {
        if (this.multiple_choice_check()) {
          this.score += 1
          correct = 1
        }
        else {
          correct = 0
        }
      }
      this.setState({
        answered: true,
        next_hidden: false,
      })

      this.questions.push(this.state.question);
      this.user_answers.push(ans);
      this.correct_asnwers.push(this.state.correctoption);

      db.transaction(function (txn) {
        txn.executeSql(
          'INSERT INTO user_answers ("question_id", "correct") VALUES (?,?)',
          [that.state.question_id, correct],
          (txn, results) => {
            console.log('Added to User_answers');
          });
      }, null, null);
    }
    else {
      // Do nothing
    }


  }
  onLayout(event){
    const {x, y, height, width} = event.nativeEvent.layout;
    this.setState({
      header_height: height,
    })
  }
  render() {
    let _this = this
    const currentOptions = this.state.options

    const options = Object.keys(currentOptions).map(function (k) {
      if (currentOptions[k] != null) {
        return (<View key={k}>
          <TouchableWithoutFeedback onPress={() => _this.check_answer(k)}>
            <View style={styles.option}>
              <View style={{ flex: 1 }}>
                <Text style={styles.list_title}>{currentOptions[k]}</Text>
              </View>
              <View style={{ flex: 0, marginLeft: 8,alignSelf: 'center', backgroundColor:'white',}}>
                <FontAwesomeIcon style= { Platform.OS === 'android' ? {borderWidth: EStyleSheet.value('0.5rem'), borderColor: '#C0C0C0', borderRadius: EStyleSheet.value('14rem')}:{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                }} size={EStyleSheet.value('28rem')} color={_this.change_color(k).btn_color} icon={_this.change_color(k).icon_name} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>)
      }
    });

    const multiple_options = Object.keys(currentOptions).map(function (k) {
      if (currentOptions[k] != null) {
        return (<View key={k}>
          <TouchableWithoutFeedback onPress={() => _this.select_option(k)}>
            <View style={styles.option}>
              <View style={{ flex: 1 }}>
                <Text style={styles.list_title}>{currentOptions[k]}</Text>
              </View>
              <View style={{ flex: 0, marginLeft: 8,alignSelf: 'center', backgroundColor:'white'}}>
                <FontAwesomeIcon style= { Platform.OS === 'android' ? {borderWidth: EStyleSheet.value('0.5rem'), borderColor: '#C0C0C0', borderRadius: EStyleSheet.value('14rem')}:{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                }} size={EStyleSheet.value('28rem')} color={_this.change_color(k).btn_color} icon={_this.change_color(k).icon_name} />
              </View>
            </View>
          </TouchableWithoutFeedback>

        </View>)
      }
    });

    const correct_options = this.state.correctoption.map(function (k) {
      return (
        <View key={k} style={styles.option}>
          <View style={{ flex: 1 }}>
            <Text style={styles.list_title}>{currentOptions[k]} </Text>
          </View>
          <View style={{ flex: 0, marginLeft: 8,alignSelf: 'center', backgroundColor:'white'}}>
            <FontAwesomeIcon style= { Platform.OS === 'android' ? {borderWidth: EStyleSheet.value('0.5rem'), borderColor: '#C0C0C0', borderRadius: EStyleSheet.value('14rem')}:{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
            }} size={EStyleSheet.value('28rem')} color={'#4AB027'} icon={'check-circle'} />
          </View>
        </View>
      )
    })

    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(248,248,248)', padding: EStyleSheet.value('16rem'), }}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header} onLayout={(event) => this.onLayout(event)} >
          <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, padding: EStyleSheet.value('16rem')}}>
            <View style={styles.question_view}>
              <Text style={styles.question_number}>Question {this.qno + 1} of {this.state.test_length}</Text>
              <Text style={[styles.question, { fontSize: this.state.question.length > 120 ? EStyleSheet.value('16rem') : EStyleSheet.value('20rem') }]}>
                {this.state.question}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled = {true}>
          {this.state.expl_hidden ?
            <View style={{ paddingBottom: EStyleSheet.value('20rem'), marginTop: this.state.header_height }}>
              {this.state.correctoption.length == 1 ? options : multiple_options}
            </View> :
            <View style={{ marginTop: this.state.header_height }}>
              {correct_options}
              <View style={styles.explanation_view}>
                <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), color: 'gray', marginBottom: 5 }}>Explanation</Text>
                <ScrollView style={{ maxHeight: height / 5,}} nestedScrollEnabled = {true}>
                <TouchableWithoutFeedback>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem') }}>{this.state.explanation}</Text>
                  </TouchableWithoutFeedback>
                </ScrollView>
              </View>
            </View>}
          <View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-end', justifyContent: 'center' }}>
            {this.state.next_hidden ? (null
            ) : (
                <View style={{ flex: 1 }}>
                  {this.state.expl_hidden && this.state.explanation != null ?
                    <TouchableWithoutFeedback onPress={() => this.explanation()}>
                      <Text style={styles.explanation_button}>View Explanation</Text>
                    </TouchableWithoutFeedback> : null}
                  <TouchableWithoutFeedback onPress={() => this.next()}>
                    <Text style={styles.next_button}>{this.qno < this.state.data.length - 1 ? 'Next' : 'Finish'}</Text>
                  </TouchableWithoutFeedback>
                </View>
              )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: QUESTION_MAX_HEIGHT,
    zIndex: 101,
  },
  question_view: {
    marginTop: QUESTION_MAX_HEIGHT / 4,
    marginLeft: '15rem',
    flex: 1,
    position: 'relative'
  },
  question_number: {
    fontFamily: 'Nunito-Light',
    color: 'white',
  },
  question: {
    fontFamily: 'Nunito-Bold',
    color: 'white',
    marginTop: '15rem',
  },
  option: {
    justifyContent: 'space-between',
    // flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: '5rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    borderRadius: '10rem',
    paddingLeft: '15rem',
    paddingRight: '22rem',
    paddingTop: '16rem',
    paddingBottom: '16rem',
  },
  explanation_view: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 5,
    marginLeft: '10rem',
    marginRight: '10rem',
    borderRadius: '10rem',
    paddingLeft: '15rem',
    paddingRight: '22rem',
    paddingTop: '22rem',
    paddingBottom: '22rem',
  },
  list_title: {
    fontSize: '18rem',
    color: 'rgb(64,64,64)',
    fontFamily: 'Nunito-Regular',
  },
  explanation_button: {
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: '8rem',
    paddingRight: '8rem',
    paddingTop: '11rem',
    paddingBottom: '11rem',
    color: '#396AFC',
    fontSize: '20rem',
    fontFamily: 'Nunito-Regular',
    backgroundColor: 'transparent',
    borderColor: '#396AFC',
    borderWidth: 1,
    marginLeft: '10rem',
    marginRight: '10rem',
  },
  next_button: {
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: '8rem',
    paddingRight: '8rem',
    paddingTop: '11rem',
    paddingBottom: '11rem',
    color: 'white',
    fontSize: '20rem',
    fontFamily: 'Nunito-Regular',
    backgroundColor: '#396AFC',
    margin: '10rem',
  },
});