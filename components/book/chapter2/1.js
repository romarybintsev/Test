import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {Header} from 'react-navigation-stack';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  BlueCard,
  CustomHeader,
  book_styles as styles,
  points,
  GreyCard,
} from '../bookcomponents';

export default class Chapter2Part1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>What is the UK?</Text>
        <Text style={styles.text}>
          {'\n'}
          In this chapter you will learn about the countries that make up the
          Union as well as the various phrases used to describe them. Although
          this chapter is very short you should make sure that you read and
          understand all facts presented. For instance it is very likely there
          will be questions about the differences between Great Britain, the
          British Isles and Britain, or what the Crown Dependencies are.{'\n'}
        </Text>
        <BlueCard list={['The different countries that make up the UK']} />
      </View>
    );
  }
}
