// Imports

import React from 'react';
import { View, Text, Alert, TouchableWithoutFeedback, StyleSheet, ActivityIndicator, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { openDatabase } from 'react-native-sqlite-storage';
import RNIap from 'react-native-iap';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var emitter = require('tiny-emitter/instance');
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });

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
    that = this;

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
            if (restoredTitles.length > 0) {
                global.premium = 1
                emitter.emit('update_tests', '');
                Alert.alert('Restore Successful', 'You successfully restored the following purchase: ' + restoredTitles.join(', '));
            }
            else {
                Alert.alert('Nothing to Restore')
            }

        } catch (err) {
            Alert.alert('Error', "Can't connect to iTunes. Please check your internet connection and restart the app.")
        } finally {
            that.setState({ loading: false });
        }
    }

    // Test Buttons (Remove Later)
    version0() {
        db.transaction(function (txn) {
            txn.executeSql(
                'UPDATE config SET full_version=0',
                []
            )
        })
        console.log('Updated to version 0')
        global.premium = 0
        emitter.emit('update_tests', '');
    }
    version1() {
        db.transaction(function (txn) {
            txn.executeSql(
                'UPDATE config SET full_version=1',
                []
            )
            console.log('Updated to version 1')

        })
        global.premium = 1
        emitter.emit('update_tests', '');
    }
    // Remove above ^^

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
        that = this;
        return (<View style={{ flex: 1, paddingLeft: EStyleSheet.value('20rem'), paddingRight: EStyleSheet.value('20rem'), backgroundColor: '#E8E8E8' }}>
            <Text style={styles.title}>MAIN SETTINGS</Text>
            <SettingsButton title='Reset Statistics' on_press_fun={() => this.promptUser()} />
            <SettingsButton title='Restore Purchases' on_press_fun={() => {
                this.setState({ loading: true })
                this.getPurchases()
            }} />
            <Text style={styles.title}>OTHER</Text>
            <SettingsButton title='Terms and Conditions' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/terms-and-conditions/')} />
            <SettingsButton title='Privacy Policy' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/privacy-policy/')} />
            <SettingsButton title='F.A.Q' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/about-the-test/')} />
            <SettingsButton title='More Resources' on_press_fun={() => this.go_to_url('https://lifeintheuktests.co.uk/study-guide/')} />
            {/* <Button onPress={() => this.version0()} title='Set Version 0' />
            <Button onPress={() => this.version1()} title='Set Version 1' /> */}
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
        elevation: 5,
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
        alignItems: 'center'
    },
    header_text: {
        color: 'white',
        fontSize: '20rem',
        fontFamily: 'Nunito-Regular',
    }
})
