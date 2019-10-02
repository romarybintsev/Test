import React from 'react';
import {Button, View, Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });

export default class StatisticsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            version: 0,
        }
        that = this;
    }
     componentDidMount() {
         db.transaction(function (txn) {
            txn.executeSql(
                'SELECT * FROM config',
                [],
                (txn, results) => {
                    version = results.rows.item(0).full_version;
                    that.setState({
                        version: version,
                    });
                }
        )
    })
}
    render(){
        return(
            <View>
                <Text>Current Version: {this.state.version}</Text>
            </View>
        );
    }
}