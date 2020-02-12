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

export default class Chapter1Part3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Becoming a permanent resident</Text>
        <Text style={styles.text}>
          {'\n'}
          To apply to become a permanent resident or citizen of the UK, you will
          need to:{'\n'}
        </Text>
        {points([
          'speak and read English',
          'have a good understanding of life in the UK.',
        ])}

        <Text style={styles.text}>
          {'\n'}
          There are currently (as of January 2013) two ways you can be tested on
          these requirements: {'\n'}
        </Text>
        {points([
          'Take the Life in the UK test. The questions are written in a way that requires an understanding of the English language at English for Speakers of Other Languages (ESOL) Entry Level 3, so there is no need to take a separate English language test. People here on work visas, including those on Tier 1 and Tier 2 of the points based system, normally must pass the Life in the UK test to become permanent residents.',
          'Pass an ESOL course in English with Citizenship. You will need to take this course if your standard of English is below ESOL Entry Level 3. The course will help you to improve your English and learn more about life in the UK. At the end of the course you will take a test.',
        ])}
        <Text style={styles.text}>
          {'\n'}
          Once you have passed one of these tests, you can make an application
          for permanent residence or British citizenship. The form that you have
          to complete and the evidence that you need to provide will depend on
          your personal circumstances. There is a fee for submitting an
          application, which is different for the various types of application.
          All of the forms and a list of fees can be found on the UK Border
          Agency website, www.ukba.homeoffice.gov.uk. From October 2013, the
          requirements will change. From that date, for settlement or permanent
          residence, you will need to:{'\n'}{' '}
        </Text>
        {points(['Pass the Life in the UK test'])}
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
            fontSize: EStyleSheet.value('18rem'),
            marginBottom: EStyleSheet.value('5rem'),
          }}>
          AND
        </Text>
        {points([
          'Produce acceptable evidence of speaking and listening skills in English at B1 of the Common European Framework of Reference. This is equivalent to ESOL Entry Level 3.',
        ])}
        <Text style={styles.text}>
          {'\n'}
          The requirements for citizenship applications may also change in the
          future. Further details will be published on the UK Border Agency
          website and you should check the information on that website for
          current requirements before applying for settlement or citizenship.
          {'\n'}
        </Text>
      </View>
    );
  }
}
