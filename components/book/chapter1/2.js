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
} from '../bookcomponents';

export default class Chapter1Part2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The values and principles of the UK</Text>
        <Text style={styles.text}>
          {'\n'}British society is founded on fundamental values and principles
          which all those living in the UK should respect and support. These
          values are reflected in the responsibilities, rights and privileges of
          being a British citizen or permanent resident of the UK. They are
          based on history and traditions and are protected by law, customs and
          expectations. There is no place in British society for extremism or
          intolerance.
          {'\n'}
          {'\n'}The fundamental principles of British life include:{'\n'}{' '}
        </Text>
        {points([
          'Democracy',
          'The rule of law',
          'Individual liberty',
          'Tolerance of those with different faiths and beliefs',
          'Participation in community life',
        ])}

        <Text style={styles.text}>
          {'\n'}
          As part of the citizenship ceremony, new citizens pledge to uphold
          these values. The pledge is:
        </Text>
        <GreyCard text="'I will give my loyalty to the United Kingdom and respect its rights and freedoms. I will uphold its democratic values. I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.'" />
        <Text style={styles.text}>
          {'\n'}
          Flowing from the fundamental principles are responsibilities and
          freedoms which are shared by all those living in the UK and which we
          expect all residents to respect. If you wish to be a permanent
          resident or citizen of the UK, you should:
          {'\n'}
        </Text>
        {points([
          'respect and obey the law',
          'respect the rights of others, including their right to their own opinions',
          'treat others with fairness',
          'look after yourself and your family',
          'look after the area in which you live and the environment.',
        ])}
        <Text style={styles.text}>
          {'\n'}
          In return, the UK offers:{'\n'}{' '}
        </Text>
        {points([
          'freedom of belief and religion',
          'freedom of speech',
          'freedom from unfair discrimination',
          'a right to a fair trial',
          'a right to join in the election of a government.',
        ])}
      </View>
    );
  }
}
