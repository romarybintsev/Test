// Imports

import React, { Component } from 'react';
import TestScreen from './TestScreen';
import { ReviewTest } from '../components/review_test';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AdMobInterstitial } from 'react-native-admob';

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

  // navigation.goBack()
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const test_name = navigation.getParam('test_name', 'Test');
    return {
      headerTitle: <Text style={styles.header_text}>{test_name}</Text>,
      headerTintColor: 'white',
      headerLeft: null,
      headerTransparent: true,
      headerRight: <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={{ paddingRight: EStyleSheet.value('15rem') }}>
        <FontAwesomeIcon size={EStyleSheet.value('24rem')} color={'white'} icon={'times-circle'} />
        </View>
      </TouchableWithoutFeedback>,
      tabBarVisible: false,
    };
  };

  _quizFinish(score, questions, users_ans, correct_ans) {
    // this.setState({ quizFinish: true, score: score, questions: questions, users_ans: users_ans, correct_ans: correct_ans });
    if(test_id > 5 && premium == 0) {
      if(Platform.OS === 'android'){
        AdMobInterstitial.setAdUnitID('ca-app-pub-6187955227300148/9739823688');
      }
      else if (Platform.OS === 'ios') {
        AdMobInterstitial.setAdUnitID('ca-app-pub-6187955227300148/9580444538');
      }
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    }
    this.props.navigation.navigate("ResultsScreen", {
      score:score,
      pass_mark:this.state.pass_mark,
      ans:users_ans,
      data:this.state.data,
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <View style={{ flex: 1 }}>
<TestScreen send_test_id={this.state.test_id} questionbank={this.state.questionbank} send_data={this.state.data} quizFinish={(score, questions, users_ans, correct_ans) => this._quizFinish(score, questions, users_ans, correct_ans)} />
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