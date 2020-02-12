import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {Header} from 'react-navigation-stack';
import {ScrollView} from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  CustomHeader,
  book_styles as styles,
  points,
  GreyCard,
  GreenCard,
  ImageCard,
} from '../bookcomponents';

export default class Chapter2Part2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>What is the UK?</Text>
        <Text style={styles.text}>
          {'\n'}The UK is made up of England, Scotland, Wales and Northern
          Ireland. The rest of Ireland is an independent country.
          {'\n'}
        </Text>
        <ImageCard
          img={'UK'}
          text={
            'The countries that make up the UK: England, Scotland, Wales and Northern Ireland.'
          }
        />
        <Text style={styles.text}>
          {'\n'}
          The official name of the country is the United Kingdom of Great
          Britain and Northern Ireland. 'Great Britain' refers only to England,
          Scotland and Wales, not to Northern Ireland. The words 'Britain',
          'Isles' or 'British', however, are used in this book to refer to
          everyone in the UK.{'\n'}
          {'\n'}
          The UK is governed by the parliament sitting in Westminster. Scotland,
          Wales and Northern Ireland also have parliaments or assemblies of
          their own, with devolved powers in defined areas.{'\n'}
        </Text>
        <GreenCard list={['The different countries that make up the UK']} />
      </View>
    );
  }
}
