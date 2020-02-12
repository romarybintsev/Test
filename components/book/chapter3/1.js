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

export default class Chapter3Part1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>A long and illustrious history</Text>
        <Text style={styles.text}>
          {'\n'}
          In this chapter you will learn about British history starting from the
          Stone Age. The beginning focuses on arriving populations which
          affected the language and religions of Britain. After that the focus
          is on the development of the Monarchy, church and Parliament. Major
          battles and significant periods are covered, including the civil war,
          the industrial revolution and the Empire. There is a lot of
          information about WWI and WWII and after WWII the chapter focuses on
          the governments of the UK and devolution in Northern Ireland, Wales
          and Scotland.
          {'\n'}
          {'\n'}
          Make sure that you understand the relationship between the monarchy
          and Parliament, Protestants and Catholics and Britain and the colonies
          of the Empire. Think about how the right to vote developed. You should
          also make sure you know about each of the people described. You will
          need to know about the Acts of Parliament and other major events. You
          should make sure that you know all of the dates given in this chapter.
          {'\n'}
        </Text>
        <BlueCard
          list={[
            'The history of early Britain',
            'The medieval period',
            'The Tudor and Stuart monarchs of the UK',
            'The establishment of Parliament',
            'The unification of the United Kingdom',
            'The Enlightenment and Industrial Revolution',
            'The Victorian Age and the British Empire',
            'The First World War',
            'The Great Depression',
            'The Second World War',
            'Britain since 1945 and the welfare state',
            'Great British inventions and sporting figures',
            'Government since the Second World War',
          ]}
        />
      </View>
    );
  }
}
