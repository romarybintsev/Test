import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'mydb.db', createFromLocation : 1, location:'Documents' });

export default class CategoriesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
        that = this;
        //Add to componentdidmount
        db.transaction(function (txn) {
            txn.executeSql(
                'SELECT DISTINCT "category_id" FROM questions',
                [],
                (txn, results) => {
                    var cats = [];
                    var len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        cats.push(results.rows.item(i).category_id);
                    }
                    that.setState({
                        FlatListItems: cats,
                    });
                }
            );
        });
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Categories Screen</Text>
                <FlatList
                    data={this.state.FlatListItems}
                    renderItem={({ item }) =>
                        <Button
                            title={'Go to Category ' + item}
                            onPress={() => this.props.navigation.navigate('CategoryTests', { category_id: item })}
                        />}
                />
            </View>
        );
    }
}