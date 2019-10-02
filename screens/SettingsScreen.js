import React from 'react';
import {Button, View, Text} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });

export default class SettingsScreen extends React.Component {
    constructor(props){
        super(props);
    }
    
    version0() {
        db.transaction(function (txn) {
            txn.executeSql(
                'UPDATE config SET full_version=0',
                []
            )
        })
        console.log('Updated to version 0')
    }
    version1() {
        db.transaction(function (txn) {
            txn.executeSql(
                'UPDATE config SET full_version=1',
                []
            )
            console.log('Updated to version 1')

        })
        }
hello(){console.log('Hello hello hello')}
    render() {
        return(<View>
            <Button onPress={() => this.version0()} title='Set Version 0' />
            <Button onPress={() => this.version1()} title='Set Version 1' />
            </View>)
    }
}
