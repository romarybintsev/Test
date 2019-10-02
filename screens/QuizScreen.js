import React, { Component } from 'react';
import TestScreen from './TestScreen';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });


export default class QuizScreen extends Component {
  constructor(props) {
    super(props)
    that = this;
    const { navigation } = this.props;
    const test_id = this.props.navigation.getParam('test_id', 'NO-ID');
    const category_id = this.props.navigation.getParam('category_id', 'NO-ID');
    this.state = {
      quizFinish: false,
      score: 0,
      test_id: test_id,
      category_id: category_id,
      questions: [],
      users_ans: [],
      correct_ans: [],
      data: [],
      loaded: false,
      questionbank: false,
    }
    function fetchDATA() {
      return new Promise((resolve, reject) => {
        db.transaction(function (txn) {
          txn.executeSql(
            'SELECT * FROM Questions WHERE "test_id"=? AND "category_id"=?',
            [test_id, category_id],
            (txn, results) => {
              var len = results.rows.length;
              options_list = ['A', 'B', 'C', 'D'];
              let data_array = [];
              console.log('len', len);
              for (let i = 0; i < len; i++) {
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
      console.log(data_array);
      that.setState({
        data: data_array,
        loaded: true,
      })
    })

  }


  _onPressBack() {
    const { goBack } = this.props.navigation
    goBack()
  }
  _quizFinish(score, questions, users_ans, correct_ans) {
    this.setState({ quizFinish: true, score: score, questions: questions, users_ans: users_ans, correct_ans: correct_ans });
  }
  _scoreMessage(score) {
    if (score <= 30) {
      return (<View style={styles.innerContainer} >
        <View style={{ flexDirection: "row" }} >
        </View>
        <Text style={styles.score}>You need to work hard</Text>
        <Text style={styles.score}>You scored {score}%</Text>
      </View>)
    } else if (score > 30 && score < 60) {
      return (<View style={styles.innerContainer} >
        <View style={{ flexDirection: "row" }} >
        </View>
        <Text style={styles.score}>You are good</Text>
        <Text style={styles.score}>Congrats you scored {score}% </Text>
      </View>)
    } else if (score >= 60) {
      return (<View style={styles.innerContainer}>
        <View style={{ flexDirection: "row" }} >
        </View>
        <Text style={styles.score}>You are the master</Text>
        <Text style={styles.score}>Congrats you scored {score}% </Text>
      </View>)
    }
  }
  render() {
    if (this.state.loaded) {
      return (
        <View style={{ flex: 1 }}>

          {this.state.quizFinish ? <View style={styles.container}>
            <View style={styles.circle}>

              {this._scoreMessage(this.state.score)}
            </View>
            <Button
              title={'Review Questions'}
              onPress={() => this.props.navigation.navigate('Review', { questions: this.state.questions, users_ans: this.state.users_ans, correct_ans: this.state.correct_ans })}
            />
          </View> : <TestScreen send_test_id={this.state.test_id} send_cat_id={this.state.category_id} questionbank={this.state.questionbank} send_data={this.state.data} quizFinish={(score, questions, users_ans, correct_ans) => this._quizFinish(score, questions, users_ans, correct_ans)} />}

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
const scoreCircleSize = 300
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: "green"
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 55,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  }
});