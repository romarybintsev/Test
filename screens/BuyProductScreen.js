import React from 'react';
import {
    Fragment,
    Button,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
  import RNIap, {
    acknowledgePurchaseAndroid,
    purchaseErrorListener,
    purchaseUpdatedListener,
  } from 'react-native-iap';


  import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });
var emitter = require('tiny-emitter/instance');
  
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
  
export default class BuyProductScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        productList: [],
        receipt: '',
        availableItemsMessage: '',
        readyForPurchase: false,
        loading: false,
      };
      that = this;
      
    }
  
    async componentDidMount() {
      try {
        const products = await RNIap.getProducts(itemSkus);
        // const products = await RNIap.getSubscriptions(itemSkus);
        console.log('Products', products);
        this.setState({ productList: products, readyForPurchase: true, });
      } catch (err) {
        Alert.alert('Error', "Can't connect to iTunes. Please check your internet connection and restart the app.")
      }
      emitter.on('stop_loader', function () {
          that.setState({loading:false})
       });

    }
  
    componentWillUnmount(){
        emitter.off('stop_loader');
    }
    // getSubscriptions = async () => {
    //   try {
    //     const products = await RNIap.getSubscriptions(itemSubs);
    //     console.log('Products', products);
    //     this.setState({ productList: products });
    //   } catch (err) {
    //     console.warn(err.code, err.message);
    //   }
    // };
  
    // Version 3 apis
    requestPurchase = async (sku, dangerous) => {
      try {
        RNIap.requestPurchase(sku, dangerous);
      } catch (err) {
        console.warn(err.code, err.message);
      }
    };

    startPurchase(sku){
        this.setState({loading:true})
        RNIap.requestPurchase(sku, false)
    }

  
    // requestSubscription = async (sku) => {
    //   try {
    //     RNIap.requestSubscription(sku);
    //   } catch (err) {
    //     Alert.alert(err.message);
    //   }
    // };

    getPurchases = async () => {
        try {
          const purchases = await RNIap.getAvailablePurchases();
          let restoredTitles = [];
    
          purchases.forEach(purchase => {
            switch (purchase.productId) {
            case '1':
                    db.transaction(function (txn) {
                        txn.executeSql(
                            'UPDATE config SET full_version=1', []
                        );
                    })
              restoredTitles.push('Full Version');
            }
          })
          if(restoredTitles.length > 0){
            Alert.alert('Restore Successful', 'You successfully restored the following purchase: ' + restoredTitles.join(', '));
          }
          else {
            Alert.alert('Nothing to Restore')
          }
    
        } catch(err) {
            Alert.alert('Error', "Can't connect to iTunes. Please check your internet connection and restart the app.")
        } finally {
            this.setState({loading:false});
        }
      }
    render() {
      const { productList, readyForPurchase, loading } = this.state;
      that = this;

      function render_buy(){
          if(readyForPurchase && !loading){
              return (
              <React.Fragment>
                  <Text>{productList[0].title} for only £{productList[0].price}</Text>
                  <Button title='Buy Full Version' onPress={() => that.startPurchase(productList[0].productId)} />
                  <Button title='Restore Full Version' onPress={() => {that.setState({loading:true})
            that.getPurchases()}} />
            </React.Fragment>)
          }
          else {
            return <ActivityIndicator size="large" color="#0000ff" />
          }
      }
  
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Buy Product Page</Text>
          </View>
          <View style={styles.content}>
              {render_buy()}
          </View>
        </View>
      );
    }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.select({
        ios: 0,
        android: 24,
      }),
      paddingTop: Platform.select({
        ios: 0,
        android: 24,
      }),
      backgroundColor: 'white',
    },
    header: {
      flex: 20,
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTxt: {
      fontSize: 26,
      color: 'green',
    },
    content: {
      flex: 80,
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    btn: {
      height: 48,
      width: 240,
      alignSelf: 'center',
      backgroundColor: '#00c40f',
      borderRadius: 0,
      borderWidth: 0,
    },
    txt: {
      fontSize: 16,
      color: 'white',
    },
  });