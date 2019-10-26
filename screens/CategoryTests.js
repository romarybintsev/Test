// Imports

import React from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
import { TestsList } from '../components/tests_list';

// Variables

var emitter = require('tiny-emitter/instance');
var db = openDatabase({ name: 'mydb.db', createFromLocation: 1, location: 'Documents' });

// Tests Screen

export default class CategoryTestsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tests_info: [],
            tests_stats: [],
            update_tests: 5,
        }
    }
    componentDidMount() {
        that = this;
        emitter.on('update_tests', function () {
            that.setState({ update_tests: premium })
        });

        CheckScoreSubscription = this.props.navigation.addListener('willFocus', () => {
            that = this;
            new Promise((resolve, reject) => {
                db.transaction(function (txn) { // Get Test Information
                    txn.executeSql(
                        'WITH latest_tests AS (\
                        SELECT test_id, MAX(created_date) as max_created_date FROM test_results\
                        GROUP BY 1\
                    ),\
                    \
                    test_num_of_questions AS (\
                        SELECT test_id, COUNT(id) as num_questions FROM questions\
                        GROUP BY 1\
                    ),\
                    \
                    latest_test_scores AS (\
                        SELECT tr.* FROM test_results AS tr INNER JOIN latest_tests AS lt \
                        ON tr.test_id = lt.test_id \
                        AND tr.created_date = lt.max_created_date\
                    )\
                    \
                    SELECT t.*, lts.result, tnoq.num_questions as num_questions FROM tests AS t LEFT JOIN latest_test_scores AS lts \
                    ON t.id = lts.test_id\
                    INNER JOIN test_num_of_questions AS tnoq \
                    ON t.id = tnoq.test_id',
                        [],
                        (txn, results) => {
                            var tests_info = [];
                            var len = results.rows.length;
                            for (let i = 0; i < len; i++) {
                                tests_info.push(results.rows.item(i))
                            }
                            resolve(tests_info)
                        }
                    );
                });
            }).then((tests_info) => {
                db.transaction(function (txn) { // Get Test Information
                    txn.executeSql('WITH test_num_questions AS (SELECT test_id, COUNT(id) as num_questions \
                FROM questions GROUP BY 1) SELECT AVG(CASE WHEN tr.result >= t.pass_mark THEN 1 ELSE 0 END) \
                as avg_pass_rate, AVG(tr.result*100 / tnq.num_questions) AS avg_pct_mark FROM test_results tr \
                INNER JOIN test_num_questions tnq ON tr.test_id = tnq.test_id INNER JOIN tests t ON tr.test_id = t.id', [],
                        (txn, results) => {
                            that.setState({
                                tests_stats: results.rows.item(0),
                                tests_info: tests_info,
                            })
                        })
                })
            })
        })
    }
    componentWillUnmount() {
        CheckScoreSubscription.remove()
        emitter.off('update_tests');
    }
    render() {
        return (
            <TestsList tests_stats={this.state.tests_stats} data={this.state.tests_info} navigation={this.props.navigation} />
        );
    }
}
