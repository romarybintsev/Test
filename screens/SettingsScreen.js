// Imports

import React from 'react';
import { View, Text, Alert, TouchableWithoutFeedback, StyleSheet, ActivityIndicator, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { openDatabase } from 'react-native-sqlite-storage';
import RNIap from 'react-native-iap';
import EStyleSheet from 'react-native-extended-stylesheet';
import Rate, { AndroidMarket } from 'react-native-rate';

// Variables

var emitter = require('tiny-emitter/instance');
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
if (Platform.OS === 'ios') {
    storeName = 'iTunes'
  }
  else if (Platform.OS === 'android') {
    storeName = 'Google Play'
  }

// Settings Button (takes prop 'title + on_press_fucntion')

class SettingsButton extends React.Component {
    render() {
        title = this.props.title
        on_press_fun = this.props.on_press_fun
        return (
            <TouchableWithoutFeedback onPress={on_press_fun}>
                <View style={styles.option}>
                    <Text style={styles.option_title}>{title}</Text>
                    <FontAwesomeIcon size={EStyleSheet.value('26rem')} color='#E8E8E8' icon='chevron-right' />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

// Settings Screen 

export default class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: true,
            loading: false,
        }
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            headerTitle: <Text style={styles.header_text}>Settings</Text>,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2948ff',
            },
            headerLeft: null,
        };
    };

    getPurchases = async () => {
        try {
          const purchases = await RNIap.getAvailablePurchases();
          let restoredTitles = [];
          if(purchases.length > 0) {
          purchases.forEach(purchase => {
            switch (purchase.productId) {
              case '1':
                db.transaction(function (txn) {
                  txn.executeSql(
                    'UPDATE config SET full_version=1', []
                  );
                })
                restoredTitles.push('Full Version');
                global.premium = 1
                emitter.emit('update_tests', '');
                Alert.alert('Restore Successful', 'You successfully restored the full version');
                break
    
              default:
                Alert.alert('Error', "Nothing to Restore.")
            }
          })
        } else {
            Alert.alert('Error', "Nothing to Restore.")
        }
        } catch (err) {
            Alert.alert("Can't connect to " + storeName + ". Please check your credentials and internet connection.")
        } finally {
          this.setState({ loading: false });
        }
      }

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
            // Do smth on success
          }
        })
      }

    go_to_url(url) {
        Linking.canOpenURL(url).then((supported) => {
            if (!supported) {
                console.log("Can't handle url: " + url);
            } else {
                return Linking.openURL(url);
            }
        })
            .catch((err) => console.error('An error occurred', err));
    }

    promptUser = () => {
        const title = 'Are you sure?';
        const message = 'All past data will be erased.';
        const buttons = [
            { text: 'Yes', onPress: () => this.reset_statistics() },
            { text: 'Cancel', type: 'cancel' },

        ];
        Alert.alert(title, message, buttons);
    }

    reset_statistics() {
        db.transaction(function (txn) {
            txn.executeSql('DELETE FROM test_results', []);
            txn.executeSql('DELETE FROM user_answers', []);
        })
        const title = 'Success';
        const message = 'All past data has been erased.';
        const buttons = [
            { text: 'Okay', type: 'cancel' },

        ];
        Alert.alert(title, message, buttons);
    }
    render() {
        return (<View style={{ flex: 1, paddingLeft: EStyleSheet.value('20rem'), paddingRight: EStyleSheet.value('20rem'), backgroundColor: '#E8E8E8' }}>
            <Text style={styles.title}>MAIN SETTINGS</Text>
            <SettingsButton title='Reset Statistics' on_press_fun={() => this.promptUser()} />
            <SettingsButton title='Restore Purchases' on_press_fun={() => {
                this.setState({ loading: true })
                this.getPurchases()
            }} />
            <Text style={styles.title}>OTHER</Text>
            <SettingsButton title='Rate Us' on_press_fun={() => this.review_button()} />
            <SettingsButton title='More Resources' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/study-guide/')} />
            <SettingsButton title='Contact Us' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/contact/')} />
            {this.state.loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size='large' />
                </View>}
        </View>)
    }
}

const styles = EStyleSheet.create({
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#777777',
        marginBottom: '10rem',
        marginTop: '20rem',
    },
    option: {
        justifyContent: 'space-between',
        // flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginTop: '5rem',
        borderRadius: 10,
        paddingLeft: '15rem',
        paddingRight: '22rem',
        paddingTop: '16rem',
        paddingBottom: '16rem',
    },
    option_title: {
        fontFamily: 'Nunito-Regular',
        fontSize: '18rem',
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
        alignItems: 'center',
        zIndex: 99999,
    },
    header_text: {
        color: 'white',
        fontSize: '20rem',
        fontFamily: 'Nunito-Regular',
    }
})
