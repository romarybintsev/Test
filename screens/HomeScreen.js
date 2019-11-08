// Imports

import React from 'react';
import { Image, StatusBar, Dimensions, View, Text, Alert, } from 'react-native';
import RNIap, { acknowledgePurchaseAndroid, purchaseErrorListener, purchaseUpdatedListener, } from 'react-native-iap';
import { openDatabase } from 'react-native-sqlite-storage';
import { HomeCard } from '../components/home_cards'
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var { height, width } = Dimensions.get('window');
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
var emitter = require('tiny-emitter/instance');
let purchaseUpdateSubscription;
let purchaseErrorSubscription;

if (Platform.OS === 'ios') {
  storeName = 'iTunes'
}
else if (Platform.OS === 'android') {
  storeName = 'Google Play'
}

if (height > 667) {
  HEADER_MAX_HEIGHT = height / 3
  QUESTION_MAX_HEIGHT = height / 3
}
else {
  HEADER_MAX_HEIGHT = height / 3
  QUESTION_MAX_HEIGHT = height / 3
}

const question_bank_sql = 'WITH latest_answer_per_question AS \
( SELECT question_id, correct, MAX(created_date) FROM user_answers GROUP BY 1)\
\
SELECT t1.* FROM questions as t1 Inner join latest_answer_per_question as t2 \
ON t1.id = t2.question_id \
AND t2.correct = 0';

const accessToken = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAijPTCR2j1pTjn0Yd8NtJRiopTWgqym1gA6R/+t55oy9AoB550JqmT42KT20SlaVAWcBYPIGK5r6MugMVkR/ssW4tClWG/49FWtpbbEjkXE56qx6lyK4mdBJ9RAklhM+QdS61g+hZVWEznxel0Kcq4zaDzevU7CqDabPGMYsqxIgQ756IOGM5eaZeLu2shXmCcFp8Fzp1jf+x1oxvvU8ya8zM7a+iu3cQz+HW5Zp/lJQiXW1vDJgoV/lvsR6pXnoBFgHdjkVGPbQtK2laDZrkNf0CbE4M4iIcpiseQQUXndDsaKJThlRfLETVCVqD8h2gIn2xsXMurvJh4HhQFModRwIDAQAB';
const packageName = 'uk.lifeintheuktest';
const isSub = false;
// Main Screen

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receipt: '',
      availableItemsMessage: '',
      num_completed: 0,
      test_len: 0,
      question_bank_len: 0,
    };
  }

  async componentDidMount() {
    that = this;
    const { navigation } = this.props;
    CheckScoreSubscription = navigation.addListener('willFocus', () => {
      that = this;
      db.transaction(function (txn) { // Get Test Information
        txn.executeSql(
          'WITH latest_tests AS (\
                  SELECT test_id, MAX(created_date) as max_created_date FROM test_results\
                  GROUP BY 1\
              ),\
              \
              test_num_of_questions AS (\
                  SELECT test_id, COUNT(id) as num_questions FROM questions\
                  GROUP BY 1\
              ),\
              \
              latest_test_scores AS (\
                  SELECT tr.* FROM test_results AS tr INNER JOIN latest_tests AS lt \
                  ON tr.test_id = lt.test_id \
                  AND tr.created_date = lt.max_created_date\
              )\
              \
              SELECT t.*, lts.result, tnoq.num_questions as num_questions FROM tests AS t LEFT JOIN latest_test_scores AS lts \
              ON t.id = lts.test_id\
              INNER JOIN test_num_of_questions AS tnoq \
              ON t.id = tnoq.test_id',
          [],
          (txn, results) => {
            var num_completed = 0
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              if (results.rows.item(i).result != null) { // Check if test result is not null (i.e completed)
                num_completed += 1
              }
            }
            that.setState({
              num_completed: num_completed,
              test_len: len,
            });
          }
        );
      });

      db.transaction(function (txn) { // get question bank len
        txn.executeSql(
          question_bank_sql,
          [],
          (txn, results) => {
            var q_len = results.rows.length;
            that.setState({
              question_bank_len: q_len,
            })
          });
      });

    });
    try {
      const result = await RNIap.initConnection();
      await RNIap.consumeAllItemsAndroid();
      console.log('result', result);
    } catch (err) {
      console.log(err);
    }

    purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
      console.log('purchaseupdatelistener')
      const receipt = purchase.transactionReceipt;
      if (Platform.OS === 'ios') {
        const receiptBody = {
          'receipt-data': receipt
        };
        const validation = await RNIap.validateReceiptIos(receiptBody, false); // true = sandbox
        if(receipt && validation.status == 0){
          valid = true
        }
      }
      else if (Platform.OS === 'android') {
        if(receipt){
          valid = true
        }
      }
      if (valid) {
        // Set Full version in DB to 1
        new Promise((resolve, reject) => {
          db.transaction(function (txn) {
            txn.executeSql(
              'UPDATE config SET full_version=1',
              [],
              (txn, results) => {
                if (results.rowsAffected > 0) {
                  result = true //Full version created
                }
                else {
                  result = false //Nothing happened
                }
                resolve(result);
              }
            );
          })
        })
          .then((result) => {
            if (result) {
              // Tell the store that you have delivered what has been paid for.
              // Failure to do this will result in the purchase being refunded on Android and
              // the purchase event will reappear on every relaunch of the app until you succeed
              // in doing the below. It will also be impossible for the user to purchase consumables
              // again untill you do this.
              if (Platform.OS === 'ios') {
                RNIap.finishTransactionIOS(purchase.transactionId);
              } else if (Platform.OS === 'android') {
                // If consumable (can be purchased again)
                // RNIap.consumePurchaseAndroid(purchase.purchaseToken);
                // If not consumable
                RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
              }
            } else {
              // Retry / conclude the purchase is fraudulent, etc...
            }
            global.premium = 1
            emitter.emit('update_tests', '');
          });
      }
      emitter.emit('stop_loader', '');
    });

    purchaseErrorSubscription = purchaseErrorListener((error) => {
      console.log('errorpurchaselistnere')
      error_code = error['responseCode'];
      if (error_code == 0) {
        Alert.alert("Can't connect to " + storeName + ". Please check your internet connection and restart the app.")
      }
      emitter.emit('stop_loader', '');
    });

  }
  componentWillUnmount() {
    if (purchaseUpdateSubscription) {
      purchaseUpdateSubscription.remove();
      purchaseUpdateSubscription = null;
    }
    if (purchaseErrorSubscription) {
      purchaseErrorSubscription.remove();
      purchaseErrorSubscription = null;
    }
    CheckScoreSubscription.remove()
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
        <StatusBar barStyle="light-content" />
        <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, padding: 20 }}>
          <View style={styles.header_title_view}>
            <Text style={styles.header_title}>Life in the UK</Text>
            <Text style={styles.header_title}>Test Preparation</Text>
          </View>
          <View style={{ flex: 1, marginTop: EStyleSheet.value('20rem'), marginBottom: EStyleSheet.value('10rem'), zIndex: 1, }}>
            <HomeCard navigate_to={() => this.props.navigation.navigate('CategoryTests')} title='Practice Tests' second_text={this.state.num_completed + ' of ' + this.state.test_len + ' tests completed'} />
            <HomeCard navigate_to={() => this.props.navigation.navigate('QuestionBank')} title='Challenge Bank' second_text={this.state.question_bank_len + (this.state.question_bank_len == 1 ? ' question in the bank' : ' questions in the bank')} question_bank={this.state.question_bank_len} />
            {premium == 0 ? <HomeCard navigate_to={() => this.props.navigation.navigate('BuyProducts')} title='Premium' second_text='Unlock all tests and more' /> : null}
            {premium == 0 ? <HomeCard navigate_to={() => this.props.navigation.navigate('Rewards')} title='Rewards' second_text='Unlock tests for free' /> : null}
          </View>
          <Image style={{ alignSelf: 'center', width: width, height: width/2.5, position: 'absolute', bottom: 0, opacity: 0.2, }} source={require('../assets/img/home.png')} />
        </LinearGradient>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  header_title_view: {
    marginTop: '55rem',
    marginLeft: '25rem',
  },
  header_title: {
    fontFamily: 'Nunito-Bold',
    zIndex: 10,
    color: 'white',
    fontSize: '30rem',
  },
})