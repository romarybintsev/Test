// Imports

import React, { Component } from 'react';
import TestScreen from './TestScreen';
import { ReviewTest } from '../components/review_test';
import { StyleSheet, View, Text, } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Variables

var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });
const question_bank_sql = 'WITH latest_answer_per_question AS \
( SELECT question_id, correct, MAX(created_date) FROM user_answers GROUP BY 1)\
\
SELECT t1.* FROM questions as t1 Inner join latest_answer_per_question as t2 \
ON t1.id = t2.question_id \
AND t2.correct = 0';

// Challenge Bank Page

export default class QuestionBankScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizFinish: false,
            data: [],
            loaded: false,
            questionbank: true,
        }
        that = this;
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        function fetchDATA() {
            return new Promise((resolve, reject) => {
                db.transaction(function (txn) {
                    txn.executeSql(
                        question_bank_sql, [], (txn, results) => {
                            var len = results.rows.length;
                            let data_array = [];
                            for (let i = 0; i < len; i++) {
                                options_list = shuffle(['A', 'B', 'C', 'D'])
                                var row = results.rows.item(i);
                                data_array.push(row);
                                data_array[i]['options'] = {}
                                for (key of options_list) {
                                    data_array[i]['options'][key] = row[key];
                                    delete data_array[i][key];
                                }
                            }
                            resolve(data_array)
                        });
                });
            })
        }

        fetchDATA().then((data_array) => {
            that.setState({
                data: data_array,
                loaded: true,
            })
        })

    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: 'Challenge Bank',
            headerTintColor: 'white',
            headerTransparent: true,
            headerLeft: null,
            headerRight: <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <FontAwesomeIcon style={{ marginRight: 15, }} size={24} color={'white'} icon={'times-circle'} />
            </TouchableWithoutFeedback>,
        };
    };

    _quizFinish(score, questions, users_ans, correct_ans) {
        this.setState({ quizFinish: true, score: score, questions: questions, users_ans: users_ans, correct_ans: correct_ans });
    }

    render() {
        if (this.state.loaded) {
            return (
                <View style={{ flex: 1 }}>

                    {this.state.quizFinish ?
                        <ReviewTest score={this.state.score} pass_mark={this.state.data.length / 2} ans={this.state.users_ans} data={this.state.data} />
                        : <TestScreen questionbank={this.state.questionbank} send_data={this.state.data} quizFinish={(score, questions, users_ans, correct_ans) => this._quizFinish(score, questions, users_ans, correct_ans)} />}

                </View>
            );
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <Text>Loading...</Text>
                </View>
            );
        }
    }
}