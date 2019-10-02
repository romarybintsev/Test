import React from 'react';
import { Button, View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { white, grey } from 'ansi-colors';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });

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
    this.state = {
      data: data_array,
      question_id: data_array[this.qno].id,
      question: data_array[this.qno].question,
      options: data_array[this.qno].options,
      correctoption: data_array[this.qno].correct.split(","),
      explanation: data_array[this.qno].explanation,
      answered: false,
      option_color: 'gray',
      pressed_option: '',
      next_hidden: true,
      expl_button_hidden: true,
      expl_hidden: true,
      questionbank: questionbank,
      select_options: [],
    }
    if (!this.state.questionbank) {
      category_id = this.props.send_cat_id;
      test_id = this.props.send_test_id;
    }
    console.log(this.state.correctoption);

    that = this;
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
            'INSERT INTO Test_results ("category_id", "test_id", "result") VALUES (?,?,?)',
            [category_id, test_id, that.score * 100 / that.state.data.length],
            (txn, results) => {
              console.log('Added to Test_results');
            });
        }, null, null);
      }
      console.log(this.questions, this.user_answers, this.correct_asnwers);
      this.props.quizFinish(this.score * 100 / this.state.data.length, this.questions, this.user_answers, this.correct_asnwers);

    }
    this.setState({ answered: false })
    this.setState({ next_hidden: true })
    this.setState({ expl_button_hidden: true })
    this.setState({ expl_hidden: true })
    this.setState({ select_option: []})

  }

  select_option(k) {
    if (this.state.select_options.includes(k)) { // Deselects if option already selected
      selected_options = this.state.select_options
      selected_options = selected_options.filter(e => e !== k);
      this.setState({ select_options: selected_options})
    }
    else if (this.state.select_options.length < (this.state.correctoption.length - 1) && !this.state.select_options.includes(k)) {
      selected_options = this.state.select_options //Selects if option not selected 
      selected_options.push(k)
      this.setState({ select_options: selected_options})
    }
    else if (this.state.select_options.length < this.state.correctoption.length && !this.state.select_options.includes(k)){
      selected_options = this.state.select_options // Selects option and checks the answer 
      selected_options.push(k)
      this.setState({ select_options: selected_options})
      this.check_answer(that.state.select_options);
    }
  }
change_color(k) {
    if (this.state.correctoption.length == 1 && this.state.answered == false) {
      btn_color = 'gray'
    }
    else if (this.state.correctoption.length > 1 && this.state.answered == false){
      if(this.state.select_options.includes(k)){
        btn_color = 'orange'
      }
      else {
        btn_color = 'gray'
      }
    }
    else {
      if (this.state.correctoption.length == 1){
        if (k == this.state.correctoption) {
          btn_color = 'green'
        }
        else if (k != this.state.correctoption && k == this.state.pressed_option) {
          btn_color = 'red'
        }
        else {
          btn_color = 'gray'
        }
      }
      else {
        if(this.state.correctoption.includes(k)){
          btn_color = 'green'
        }
        else if (!this.state.correctoption.includes(k) && this.state.select_options.includes(k)){
          btn_color = 'red'
        }
        else {
          btn_color = 'gray'
        }
      }
    }
    return btn_color
  }

  multiple_choice_check() {
    sorted_answer = this.state.correctoption.sort()
    sorted_options = this.state.select_options.sort()
    for (i=0; i < sorted_answer.length; i++) {
      if (sorted_answer[i] !== sorted_options[i]){
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
        if(this.multiple_choice_check()){
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
        expl_button_hidden: false,
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
  render() {

    let _this = this
    const currentOptions = this.state.options
  

    const options = Object.keys(currentOptions).map(function (k) {
      return (<View key={k} style={styles.option}>
        <Button color={_this.change_color(k)} onPress={() => _this.check_answer(k)} title={currentOptions[k]} />
      </View>)
    });

    const multiple_options = Object.keys(currentOptions).map(function (k) {
      return (<View key={k} style={styles.option}>

        <Button color={_this.change_color(k)} onPress={() => _this.select_option(k)} title={currentOptions[k]} />

      </View>)
    });

    return (
      <View style={{ flex: 1 }}>

        <View>
          <Text style={styles.question}>
            {this.state.question}
          </Text>
        </View>
        <View>
          {this.state.correctoption.length == 1 ? options : multiple_options}
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-end' }}>
          {this.state.expl_button_hidden ? (<View style={styles.explanation_button}>
            <Text>Explanation</Text>
          </View>
          ) : (
              <View style={{ flex: 1, backgroundColor: "red" }}>
                <Button onPress={() => this.explanation()} title='Explanation'></Button>
              </View>
            )}
          {this.state.next_hidden ? (<View style={styles.next_button}>
            <Text>Next</Text>
          </View>
          ) : (
              <View style={{ flex: 1, backgroundColor: "green" }}>
                <Button onPress={() => this.next()} title='Next'></Button>
              </View>
            )}

        </View>
        {this.state.expl_hidden ? (<View></View>
        ) : (<Text>{this.state.explanation}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  explanation_button: {
    flex: 1,
    backgroundColor: 'red',
    color: 'grey',
    padding: 20,
    alignItems: 'center'

  },
  next_button: {
    flex: 1,
    backgroundColor: 'green',
    color: 'grey',
    padding: 20,
    alignItems: 'center'
  },
  question: {
    color: 'grey',
    textAlign: 'center',
    margin: 20,
  },
  option: {
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    color: 'white',
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'left',
  }
});
