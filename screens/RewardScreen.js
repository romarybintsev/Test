import React from 'react';
import { Alert, Platform, StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableWithoutFeedback, Dimensions, TextInput } from 'react-native';
import RNIap, { acknowledgePurchaseAndroid, purchaseErrorListener, purchaseUpdatedListener, } from 'react-native-iap';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { openDatabase } from 'react-native-sqlite-storage';
import Rate, { AndroidMarket } from 'react-native-rate';
import {
    AdMobBanner,
    AdMobInterstitial,
    AdMobRewarded,
    PublisherBanner,
  } from 'react-native-admob';
import { ScrollView } from 'react-native-gesture-handler';

var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
var { height, width } = Dimensions.get('window');
var emitter = require('tiny-emitter/instance');

export default class RewardScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            update: false,
            text: '',
        }
    }

      // Header Navigation Details
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerTintColor: 'white',
      headerTransparent: true,
      headerLeft: null,
      headerRight: <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <FontAwesomeIcon style={{ marginRight: EStyleSheet.value('15rem'), }} size={EStyleSheet.value('24rem')} color={'white'} icon={'times-circle'} />
      </TouchableWithoutFeedback>,
      tabBarVisible: false,
    };
  };

    // Review - First go to review page, then after 5 seconds set free_tests available to 15
  //          as global variable and in database
  review_button() {
    const options = {
      AppleAppID:"1481724919",
      GooglePackageName:"uk.lifeintheuktest",
      AmazonPackageName:"",
      OtherAndroidURL:"",
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp:false,
      openAppStoreIfInAppFails:true,
      fallbackPlatformURL:"",
    }
    Rate.rate(options, success=>{
      if (success) {
        // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
        db.transaction(function (txn) {
          txn.executeSql(
            'UPDATE config SET review = 1', []
          );
          txn.executeSql(
            'UPDATE config SET free_tests = free_tests + 5', []
          );
        })
        global.free_tests = free_tests + 5
        setTimeout(() => {
        global.reviewed = 1
        this.setState({update: !this.state.update})}, 5000)

      }
    })
  }
  todays_pin(){
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    pin = '72' + yyyy + mm;
    return pin
  }

  unlock_with_pin(){
      if(this.state.text == this.todays_pin()) {
        db.transaction(function (txn) {
            txn.executeSql(
              'UPDATE config SET full_version=1', []
            );
          })
          global.premium = 1
          emitter.emit('update_tests', '');
          Alert.alert('Success', 'You have successfully unlocked the Full Version.')
      }
      else{
          Alert.alert('Oops', 'Looks like your PIN is incorrect.')
      }
  }

    componentDidMount(){
        AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
        AdMobRewarded.setAdUnitID('ca-app-pub-6187955227300148/7807300071');
        AdMobRewarded.requestAd().catch(error => console.warn(error)); 

        AdMobRewarded.addEventListener('rewarded', () => {
            console.log('Reward video completed')
        db.transaction(function (txn) {
            txn.executeSql(
              'UPDATE config SET free_tests= free_tests + 1', []
            );
          })
        global.free_tests = free_tests + 1
        }
      );

      AdMobRewarded.addEventListener('adFailedToLoad', error =>
        AdMobRewarded.requestAd().catch(error => console.warn(error))
        );
        AdMobRewarded.addEventListener('adClosed', () => {
            console.log('AdMobRewarded => adClosed');
            AdMobRewarded.requestAd().catch(error => console.warn(error));
          });
    }

    componentWillUnmount() {
        AdMobRewarded.removeAllListeners();
        AdMobInterstitial.removeAllListeners();
      }

    showRewarded() {
        AdMobRewarded.showAd().catch(error =>  Alert.alert('Error', 'Please wait for the ad to load.'));
    }
    render(){

        that = this;
        return(
            <View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>

            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
              <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.header_title_view}>
                    <Text style={styles.header_title}>Unlock more tests</Text>
                </View>
    
              </LinearGradient>
            </View>
            <ScrollView style={{zIndex: 0}}>
            <View style={{marginTop: height/4, padding: EStyleSheet.value('20rem') }}>
            {reviewed == 0 ?<View style={styles.premium_text_view}>
            <View style={{ borderBottomColor: '#E8E8E8', borderBottomWidth: 1, paddingBottom: EStyleSheet.value('10rem'), }}>
              <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), }}>Leave us a review and unlock 5 more tests.</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => reviewed == 0 ? that.review_button() : null}>
              <View style={styles.review_option}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem'), }}>Leave a Review</Text>
                </View>
                <View style={{ flex: 0, alignSelf: 'center', borderRadius: EStyleSheet.value('14rem'), elevation: 2, }}>
                  <FontAwesomeIcon style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  }} size={EStyleSheet.value('28rem')} icon={'circle'} fill={'white'} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View> : null }

          <View style={styles.premium_text_view}>
            <View style={{ borderBottomColor: '#E8E8E8', borderBottomWidth: 1, paddingBottom: EStyleSheet.value('10rem'), }}>
              <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), }}>Want even more tests? Unlock 1 test for each video watched.</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => that.showRewarded()}>
              <View style={styles.review_option}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem'), }}>Watch Now</Text>
                </View>
                <View style={{ flex: 0, alignSelf: 'center', borderRadius: EStyleSheet.value('14rem'), elevation: 2, }}>
                  <FontAwesomeIcon style={reviewed == 1 ? {} : {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                  }} size={EStyleSheet.value('28rem')} icon={'play-circle'} fill={'#396afc'} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={{alignSelf:'center', fontFamily: 'Roboto-Bold', marginTop:EStyleSheet.value('10rem'), fontSize: EStyleSheet.value('24rem'), color: '#777777' }}>OR</Text>
          <View style={styles.premium_text_view}>
          <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), }}>Unlock all tests, explanations and remove ads</Text>
            <View style={{ borderTopColor: '#E8E8E8', borderTopWidth: 1, marginTop: EStyleSheet.value('10rem'), paddingTop: EStyleSheet.value('10rem'), paddingBottom: EStyleSheet.value('10rem') }}>
              <TouchableWithoutFeedback style={{ flex: 1, alignItems: 'center' }} onPress={() => this.props.navigation.navigate('BuyProducts')}>
                <View style={{ padding: EStyleSheet.value('8rem'), borderRadius: 10, textAlign: 'center', backgroundColor: '#a8e063' }}>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem'), textAlign: 'center' }}>UNLOCK PREMIUM</Text>
                  <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('12rem'), textAlign: 'center' }}>one-time fee of £4.99</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.premium_text_view}>
            <View style={{ borderBottomColor: '#E8E8E8', borderBottomWidth: 1, paddingBottom: EStyleSheet.value('10rem'), }}>
              <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), }}>Have a PIN? Enter it here.</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => reviewed == 0 ? that.review_button() : null}>
              <View style={styles.pin_option}>
                <View style={{ alignSelf: 'center' }}>
                <TextInput
                    placeholder="Enter your PIN"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
                </View>
                <View style={{ flex: 0, alignSelf: 'center', borderRadius: EStyleSheet.value('14rem'), elevation: 2, }}>
                <View style={{ padding: EStyleSheet.value('8rem'), borderRadius: 10, textAlign: 'center', backgroundColor: '#a8e063' }}>
                <TouchableWithoutFeedback style={{ flex: 1, alignItems: 'center' }} onPress={() => this.unlock_with_pin()}>
                    <Text style={{fontFamily: 'Nunito-Light'}}>Enter</Text>
                </TouchableWithoutFeedback>
                </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          </View>
          </ScrollView>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: height / 4,
      flex: 1,
      zIndex: 1,
    },
    header_title_view: {
      marginTop: '40rem',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingTop: '$restore_top_padding',
  
    },

    header_title: {
      fontFamily: 'Roboto-Bold',
      color: 'white',
      fontSize: '34rem',
      textAlign: 'center',
      lineHeight: '45rem',
      marginTop: '5rem',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      elevation: 5,
      paddingTop: '$restore_top_padding',
  
    },
    header_subtitle: {
      fontFamily: 'Nunito-Light',
      color: 'white',
      fontSize: '17rem',
      textAlign: 'center',
      maxWidth: '350rem',
      marginTop: '5rem',
      paddingTop: '$restore_top_padding',
    },
    premium_text_view: {
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      borderRadius: 10,
      paddingLeft: '15rem',
      paddingRight: '22rem',
      paddingTop: '8rem + $restore_top_padding',
      marginTop: '8rem + $restore_top_padding',
    },
    review_option: {
      justifyContent: 'space-between',
      backgroundColor: 'white',
      flexDirection: 'row',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: '15rem',
      paddingRight: '22rem',
      paddingTop: '10rem',
      paddingBottom: '10rem',
      marginTop: '10rem',
      marginBottom: '10rem',
    },
    pin_option: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: '15rem',
        paddingRight: '22rem',
        marginTop: '10rem',
        marginBottom: '10rem',
      },
  });