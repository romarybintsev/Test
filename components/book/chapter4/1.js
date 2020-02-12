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

export default class Chapter4Part1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>A modern, thriving society</Text>
        <Text style={styles.text}>
          {'\n'}
          In this chapter you will learn about the population and culture of the
          UK. The start of the chapter shows you where the major cities of the
          UK are. You should be sure you can identify the various cities, such
          as Leeds and Bradford, confidently. Because the UK is a multicultural
          country you will also have to know the sizes of the different ethnic
          and religious groups in the UK, as well as their main festivals.
          {'\n'}
          {'\n'}
          The chapter focuses on British culture after that and you should make
          sure you know who each of the people described are and what they have
          achieved. Britain's recent sporting success at the Olympics features
          heavily so focus on who won medals and for what as well as the general
          information about sport in the UK. Make sure you familiarise yourself
          with the poems, films, books and other works listed too, as well as
          the artists, composers, architects, authors, poets and other famous
          people. You should also familiarise yourself with the extracts of
          poems provided and be able to recognise the famous landmarks at the
          end of the chapter.
          {'\n'}
        </Text>
        <BlueCard
          list={[
            'The cities and population of the UK',
            'Religious festivals of the UK',
            'Popular sports and famous sportsmen and women',
            'The development of music, including famous composers',
            'British theatre and cinema through the ages',
            'British artists and architects',
            'Famous British poets and authors',
            'Sections of famous British poems',
            'British comedy and leisure activities',
            'Famous British landmarks',
          ]}
        />
      </View>
    );
  }
}
