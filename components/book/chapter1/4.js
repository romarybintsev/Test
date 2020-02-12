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
} from '../bookcomponents';

export default class Chapter1Part4 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Taking the Life in the UK test</Text>
        <Text style={styles.text}>
          {'\n'}This handbook will help prepare you for taking the Life in the
          UK test. The test consists of 24 questions about important aspects of
          life in the UK. Questions are based on ALL parts of the handbook. The
          24 questions will be different for each person taking the test at that
          test session.
          {'\n'}
          {'\n'}The Life in the UK test is usually taken in English, although
          special arrangements can be made if you wish to take it in Welsh or
          Scottish Gaelic.{'\n'}
          {'\n'}You can only take the test at a registered and approved Life in
          the UK test centre. There are about 60 test centres around the UK. You
          can only book your test online, at www.lifeintheuktest.gov.uk. You
          should not take your test at any other establishment as the UK Border
          Agency will only accept certificates from registered test centres. If
          you live on the Isle of Man or in the Channel Islands, there are
          different arrangements for taking the Life in the UK test.
          {'\n'} {'\n'}When booking your test, read the instructions carefully.
          Make sure you enter your details correctly. You will need to take some
          identification and proof of your address with you to the test. If you
          don't take these, you will not be able to take the test.{'\n'}{' '}
        </Text>
        <Text style={styles.title}>How to use this handbook</Text>
        <Text style={styles.text}>
          {'\n'}
          Everything that you will need to know to pass the Life in the UK test
          is included in this handbook. The questions will be based on the whole
          book, including this introduction, so make sure you study the entire
          book thoroughly. The handbook has been written to ensure that anyone
          who can read English at ESOL Entry Level 3 or above should have no
          difficulty with the language. {'\n'}
          {'\n'}
          The glossary at the back of the handbook contains some key words and
          phrases, which you might find helpful. {'\n'} {'\n'}
          The 'Check that you understand' boxes are for guidance. They will help
          you to identify particular things that you should understand. Just
          knowing the things highlighted in these boxes will not be enough to
          pass the test. You need to make sure that you understand everything in
          the book, so please read the information carefully.{'\n'}
        </Text>
        <Text style={styles.title}>Where to find more information</Text>
        <Text style={styles.text}>
          {'\n'}
          You can find out more information from the following places: {'\n'}
        </Text>
        {points([
          'The UK Border Agency website (www.ukba.homeoffice.gov.uk) for more information about the application process and the forms you will need to complete',
          'The Life in the UK test website (www.lifeintheuktest.gov.uk) for more information about the test and how to book a place to take one',
          'Gov.uk (www.gov.uk) for information about ESOL courses and how to find one in your area.',
        ])}
        <GreenCard
          list={[
            'The origin of the values underlying British society',
            'The fundamental principles of British life',
            'The responsibilities and freedoms which come with permanent residence',
            'The process of becoming a permanent resident or citizen.',
          ]}
        />
      </View>
    );
  }
}
