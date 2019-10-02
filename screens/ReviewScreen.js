import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';

export default class ReviewScreen extends React.Component {
  render() {
    var questions = this.props.navigation.getParam('questions', 'NO-q');
    var users_ans = this.props.navigation.getParam('users_ans', 'NO-q');
    var correct_ans = this.props.navigation.getParam('correct_ans', 'NO-q');
    let review_list = []
    var len = questions.length
    for (let i = 0; i < len; i++) {
      review_list[i] = [questions[i], users_ans[i], correct_ans[i]]
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Review Screen</Text>
        <FlatList
          data={review_list}
          renderItem={({ item }) =>
            <Text>
              Question: {item[0]}
              Your Answer: {item[1]}
              Correct Answer: {item[2]}
            </Text>}
        />
      </View>
    );
  }
}