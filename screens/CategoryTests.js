import React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });

export default class CategoryTestsScreen extends React.Component {
    constructor(props) {
        super(props);
        const category_id = this.props.navigation.getParam('category_id', 'NO-ID');
        this.state = {
            FlatListItems: [],
        }
        that = this;
        db.transaction(function (txn) {
            txn.executeSql(
                'SELECT DISTINCT "test_id" FROM Questions WHERE "category_id"=?',
                [category_id],
                (txn, results) => {
                    var tests = [];
                    var len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        tests.push(results.rows.item(i).test_id);
                    }
                    that.setState({
                        FlatListItems: tests,
                    });
                }
            );
        });
    }
    render() {
        const category_id = this.props.navigation.getParam('category_id', 'NO-ID');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Category {this.state.category_id} Screen</Text>
                <FlatList
                    data={this.state.FlatListItems}
                    renderItem={({ item }) =>
                        <Button
                            title={'Go to Test ' + item}
                            onPress={() => this.props.navigation.navigate('Quiz', { test_id: item, category_id: category_id })}
                        />}
                />
            </View>
        );
    }
}