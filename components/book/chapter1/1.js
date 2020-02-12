import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {Header} from 'react-navigation-stack';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  BlueCard,
  CustomHeader,
  book_styles as styles,
} from '../bookcomponents';

export default class Chapter1Part1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The values and principles of the UK</Text>
        <Text style={styles.text}>
          {'\n'}In this chapter you will learn about the fundamental rights and
          responsibilities which apply to everyone who lives in the UK, citizen
          or not. There is also some information about the format of the Life in
          the UK Test and the requirements for becoming a permanent resident.
          {'\n'}
          {'\n'}The questions you get in the real test will be based on the
          whole book, including this introductory chapter so make sure that you
          are familiar with the details of the application process for permanent
          residence as well as the rights and responsibilities of UK residents.
        </Text>
        <BlueCard
          list={[
            'The fundamental principles of British life',
            'Responsibilities and freedoms of all UK residents',
            'Becoming a permanent resident',
            'Taking the Life in the UK test',
            'The testable sections of this book',
          ]}
        />
        <Text style={styles.text}>
          Britain is a fantastic place to live: a modern, thriving society with
          a long and illustrious history. Our people have been at the heart of
          the world's political, scientific, industrial and cultural
          development. We are proud of our record of welcoming new migrants who
          will add to the diversity and dynamism of our national life.{'\n'}
          {'\n'}Applying to become a permanent resident or citizen of the UK is
          an important decision and commitment. You will be agreeing to accept
          the responsibilities which go with permanent residence and to respect
          the laws, values and traditions of the UK. Good citizens are an asset
          to the UK. We welcome those seeking to make a positive contribution to
          our society.{'\n'}
          {'\n'}Passing the Life in the UK test is part of demonstrating that
          you are ready to become a permanent migrant to the UK. This handbook
          is designed to support you in your preparation. It will help you to
          integrate into society and play a full role in your local community.
          It will also help ensure that you have a broad general knowledge of
          the culture, laws and history of the UK.
        </Text>
      </View>
    );
  }
}
