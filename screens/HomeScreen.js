import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import RNIap, {
  acknowledgePurchaseAndroid,
  purchaseErrorListener,
  purchaseUpdatedListener,
} from 'react-native-iap';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });
var emitter = require('tiny-emitter/instance');
let purchaseUpdateSubscription;
let purchaseErrorSubscription;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receipt: '',
      availableItemsMessage: '',
    };
  }
  async componentDidMount() {
    try {
      const result = await RNIap.initConnection();
      await RNIap.consumeAllItemsAndroid();
      console.log('result', result);
    } catch (err) {
      console.log(err);
    }

  purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
    console.log('purchaseUpdatedListener', purchase);
    const receipt = purchase.transactionReceipt;
    const receiptBody = {
        'receipt-data': receipt
      };
    const result = await RNIap.validateReceiptIos(receiptBody, true); // true = sandbox
    if (receipt) {
        // Set Full version in DB to 1
        new Promise ((resolve, reject) => { 
        db.transaction(function (txn) {
            txn.executeSql(
                'UPDATE config SET full_version=1',
                [],
                (txn, results) => {
                    if (results.rowsAffected > 0){
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
        .then(function(result) {
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
            emitter.emit('stop_loader','');
          });
        }
      });

  purchaseErrorSubscription = purchaseErrorListener((error) => {
    emitter.emit('stop_loader','');
    console.log('purchaseErrorListener', error);
    error_code = error['responseCode'];
    if(error_code == 0){
      Alert.alert('Error','Cannot connect to iTunes. Please check your internet connection.');
    }
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
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Categories"
          onPress={() => this.props.navigation.navigate('Categories')}
        />
        <Button
          title="Go to Question Bank"
          onPress={() => this.props.navigation.navigate('QuestionBank')}
        />
        <Button
          title="Go to Statistics"
          onPress={() => this.props.navigation.navigate('Statistics')}
        />
        <Button
          title="Buy Products"
          onPress={() => this.props.navigation.navigate('BuyProducts')}
        />
      </View>
    );
  }
}