// Imports

import React from 'react';
import { Alert, Platform, StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableWithoutFeedback, Dimensions, } from 'react-native';
import RNIap, { acknowledgePurchaseAndroid, purchaseErrorListener, purchaseUpdatedListener, } from 'react-native-iap';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { openDatabase } from 'react-native-sqlite-storage';
import Rate, { AndroidMarket } from 'react-native-rate';

// Variables

var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
var emitter = require('tiny-emitter/instance');
var { height, width } = Dimensions.get('window');
const itemSkus = Platform.select({
  ios: [
    '1',
  ],
  android: [],
});
const itemSubs = Platform.select({
  ios: [],
  android: [],
});

// Premium Text Class (takes prop 'text')

class PremiumText extends React.Component {
  render() {
    return (
      <View style={styles.premium_list}>
        <FontAwesomeIcon size={EStyleSheet.value('26rem')} icon='check-circle' fill='#a8e063' />
        <Text style={styles.premium_list_text}>{this.props.text}</Text>
      </View>
    )
  }
}

// Product Page

export default class BuyProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      receipt: '',
      availableItemsMessage: '',
      loading: true,
      reviewed: false,
    };
    that = this;
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
  that = this;

  // Review - First go to review page, then after 5 seconds set free_tests available to 15
  //          as global variable and in database
  review_button() {
      const options = {
        AppleAppID:"1481724919",
        GooglePackageName:"",
        AmazonPackageName:"",
        OtherAndroidURL:"",
        preferredAndroidMarket: AndroidMarket.Google,
        preferInApp:true,
        openAppStoreIfInAppFails:true,
        fallbackPlatformURL:"",
      }
      Rate.rate(options, success=>{
        if (success) {
          // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
          db.transaction(function (txn) {
            txn.executeSql(
              'UPDATE config SET free_tests=15', []
            );
          })
          global.free_tests = 15
          setTimeout(() => 
          that.setState({
            reviewed: true,
          }), 5000)
        }
      })
    }

  // Set loader, find products and cancel loader after
  async componentDidMount() {
    if (free_tests == 15) {
      that.setState({ reviewed: true })
    }
    emitter.on('stop_loader', function () {
      that.setState({ loading: false })
    });
    try {
      const products = await RNIap.getProducts(itemSkus);
      // const products = await RNIap.getSubscriptions(itemSkus);
      that.setState({ productList: products });
    } catch (err) {
      Alert.alert('Error', "Can't connect to iTunes. Please check your internet connection and restart the app.")
    } finally {
      that.setState({ loading: false })
    }

  }

  componentWillUnmount() {
    emitter.off('stop_loader');
  }

  // Version 3 apis
  requestPurchase = async (sku, dangerous) => {
    const purchases = await RNIap.getAvailablePurchases();
    if (purchases.length > 0) {
      this.getPurchases();
    }
    else {
      try {
        RNIap.requestPurchase(sku, dangerous);
      } catch (err) {
        Alert.alert("Can't connect to iTunes. Please check your internet connection and restart the app.")
        console.warn(err.code, err.message);
      } finally {
        that.setState({ loading: false, })
      }
    }
  };

  startPurchase(sku) {
    that.setState({ loading: true })
    RNIap.requestPurchase(sku, false)
  }


  // requestSubscription = async (sku) => {
  //   try {
  //     RNIap.requestSubscription(sku);
  //   } catch (err) {
  //     Alert.alert(err.message);
  //   }
  // };

  // getSubscriptions = async () => {
  //   try {
  //     const products = await RNIap.getSubscriptions(itemSubs);
  //     console.log('Products', products);
  //     this.setState({ productList: products });
  //   } catch (err) {
  //     console.warn(err.code, err.message);
  //   }
  // };

  getPurchases = async () => {
    try {
      const purchases = await RNIap.getAvailablePurchases();

      purchases.forEach(purchase => {
        switch (purchase.productId) {
          case '1':
            db.transaction(function (txn) {
              txn.executeSql(
                'UPDATE config SET full_version=1', []
              );
            })
            global.premium = 1
            emitter.emit('update_tests', '');
            Alert.alert('Restore Successful', 'You successfully restored the full version');
            break

          default:
            Alert.alert('Error', "Nothing to Restore.")
        }
      })
    } catch (err) {
      Alert.alert('Error', "Can't connect to iTunes. Please check your credentials and internet connection.")
    } finally {
      that.setState({ loading: false });
    }
  }
  render() {
    const { productList, loading } = this.state;
    that = this;

    function review_icon() {
      if (that.state.reviewed == false) {
        icon = 'circle'
        color = 'white'
      }
      else {
        icon = 'check-circle'
        color = '#a8e063'
      }
      return {
        icon: icon,
        color: color,
      }
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>

        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.header_title_view}>
              <FontAwesomeIcon size={EStyleSheet.value('20rem')} icon='star' fill='yellow' />
              <Text style={styles.premium_title}>GO PREMIUM</Text>
              <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'white', paddingBottom: EStyleSheet.value('10rem'), }}>
                <Text style={styles.header_title}>Unlock All{"\n"}Study Materials</Text>
              </View>
              <Text style={styles.header_subtitle}>Unlock all tests, explanations and remove ads</Text>
            </View>

          </LinearGradient>
        </View>

        <View style={{ flex: 1, marginTop: height / 3, paddingLeft: EStyleSheet.value('20rem'), paddingRight: EStyleSheet.value('20rem'), }}>
          <View style={styles.premium_text_view}>
            <PremiumText text={'1000+ Questions'} />
            <PremiumText text={'Detailed Explanations'} />
            <PremiumText text={'Ad-free experience'} />
            <PremiumText text={'Pass Guarantee'} />
            <View style={{ borderTopColor: '#E8E8E8', borderTopWidth: 1, marginTop: EStyleSheet.value('10rem'), paddingTop: EStyleSheet.value('10rem'), paddingBottom: EStyleSheet.value('10rem') }}>
              <TouchableWithoutFeedback style={{ flex: 1, alignItems: 'center' }} disabled={loading} onPress={() => that.startPurchase(productList[0].productId)}>
                <View style={{ padding: EStyleSheet.value('8rem'), borderRadius: 10, textAlign: 'center', backgroundColor: '#a8e063' }}>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem'), textAlign: 'center' }}>UNLOCK PREMIUM</Text>
                  <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('12rem'), textAlign: 'center' }}>one-time fee of £4.99</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={styles.premium_text_view}>
            <View style={{ borderBottomColor: '#E8E8E8', borderBottomWidth: 1, paddingBottom: EStyleSheet.value('10rem'), }}>
              <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), }}>Want more tests without premium? Leave us a review and unlock 5 more tests.</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => !this.state.reviewed ? that.review_button() : null}>
              <View style={styles.review_option}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('18rem'), }}>Leave a Review</Text>
                </View>
                <View style={{ flex: 0, alignSelf: 'center' }}>
                  <FontAwesomeIcon style={this.state.reviewed ? {} : {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 5,
                  }} size={EStyleSheet.value('28rem')} icon={review_icon().icon} fill={review_icon().color} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.bottom_view}>
            <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'gray' }}>
              <Text style={styles.bottom_view_text}>Restore purchase if you previously bought premium</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => {
              that.setState({ loading: true })
              that.getPurchases()
            }}>
              <Text style={styles.bottom_view_button}>Restore purchase</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {this.state.loading &&
          <View style={styles.loader}>
            <ActivityIndicator size='large' />
          </View>}

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
    height: height / 3,
    flex: 1,
  },
  header_title_view: {
    marginTop: '40rem',
    position: 'absolute',
    alignItems: 'center',
    flex: 1,
    paddingTop: '$restore_top_padding',

  },
  premium_title: {
    fontFamily: 'Roboto-Regular',
    color: 'lightgray',
    marginTop: '5rem',
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
  bottom_view: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingLeft: '30rem',
    paddingRight: '30rem',
    paddingBottom: '$restore_padding',
  },
  bottom_view_text: {
    fontFamily: 'Nunito-Light',
    fontSize: '12rem',
    textAlign: 'center',
    paddingBottom: '8rem',
    paddingTop: '10rem',
  },
  bottom_view_button: {
    fontFamily: 'Nunito-Bold',
    fontSize: '14rem',
    textAlign: 'center',
    paddingBottom: '10rem',
    paddingTop: '10rem',
    color: '#4AB027',
  },
  premium_list: {
    flexDirection: 'row',
    marginBottom: '5rem',
  },
  premium_list_text: {
    fontFamily: 'Nunito-Light',
    fontSize: '18rem',
    marginLeft: '10rem',
  },
  premium_text_view: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
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
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
});