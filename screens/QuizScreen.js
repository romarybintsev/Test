// Imports

import React, { Component } from 'react';
import TestScreen from './TestScreen';
import { ReviewTest } from '../components/review_test';
import { View, Text, } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });

// Quiz Screen

export default class QuizScreen extends Component {

  constructor(props) {
    super(props)
    const test_id = this.props.navigation.getParam('test_id', 'NO-ID');
    this.state = {
      quizFinish: false,
      score: 0,
      test_id: test_id,
      questions: [],
      users_ans: [],
      correct_ans: [],
      data: [],
      loaded: false,
      questionbank: false,
      pass_mark: 0,
    }
    that = this;

    function shuffle(array) {
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



    function fetchDATA() {
      db.transaction(function (txn) { // set the correct Pass Mark for the test
        txn.executeSql('Select pass_mark from tests where "id"=?',
          [test_id],
          (txn, results) => {
            that.setState({
              pass_mark: results.rows.item(0).pass_mark,
            })
          });
      })
      return new Promise((resolve, reject) => { // select correct questions for the test
        db.transaction(function (txn) {
          txn.executeSql(
            'SELECT * FROM Questions WHERE "test_id"=?',
            [test_id],
            (txn, results) => {
              var len = results.rows.length;
              let data_array = [];
              for (let i = 0; i < len; i++) {
                options_list = shuffle(['A', 'B', 'C', 'D'])
                var row = results.rows.item(i);
                data_array.push(row);
                data_array[i]['options'] = {}
                for (key of options_list) {
                  data_array[i]['options'][key] = row[key];
                  delete data_array[i][key];
                }
              }
              resolve(data_array)
            });
        }, null, null);
      })
    }

    fetchDATA().then((data_array) => {
      that.setState({
        data: data_array,
        loaded: true,
      })
    })

  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const test_name = navigation.getParam('test_name', 'Test');
    return {
      headerTitle: <Text style={styles.header_text}>{test_name}</Text>,
      headerTintColor: 'white',
      headerTransparent: true,
      headerLeft: null,
      headerRight: <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <FontAwesomeIcon style={{ marginRight: 15, }} size={24} color={'white'} icon={'times-circle'} />
      </TouchableWithoutFeedback>,
    };
  };

  _quizFinish(score, questions, users_ans, correct_ans) {
    this.setState({ quizFinish: true, score: score, questions: questions, users_ans: users_ans, correct_ans: correct_ans });
  }

  render() {
    if (this.state.loaded) {
      return (
        <View style={{ flex: 1 }}>
          {this.state.quizFinish ?
            <ReviewTest score={this.state.score} pass_mark={this.state.pass_mark} ans={this.state.users_ans} data={this.state.data} />
            : <TestScreen send_test_id={this.state.test_id} questionbank={this.state.questionbank} send_data={this.state.data} quizFinish={(score, questions, users_ans, correct_ans) => this._quizFinish(score, questions, users_ans, correct_ans)} />}
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = EStyleSheet.create({
  header_text: {
    color: 'white',
    fontSize: '20rem',
    fontFamily: 'Nunito-Regular',
  }
});