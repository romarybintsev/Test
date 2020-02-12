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

export default class Chapter5Part1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The UK government, the law and your role</Text>
        <Text style={styles.text}>
          {'\n'}
          In this chapter you will learn how the UK is governed. You need to understand the Queen's role in government and her powers. Make sure you understand how people are appointed to the two Houses of Parliament and the specific roles detailed, such as the Speaker and cabinet, and your rights to vote and stand for election. Everyone should understand the workings of the devolved administrations but pay particular attention if you are taking the test in Scotland, Wales or Northern Ireland.
          {'\n'}{'\n'}
The UK's international role is explained through the Commonwealth, EU and others so focus on the differences between these bodies and their member countries. The chapter then explains common laws, fundamental rights, policing and the courts of the UK. Pay particular attention to this so you know the differences between the various courts and offences they deal with. Finally the chapter deals with taxation, driving and community activity. {'\n'}
        </Text>
        <BlueCard
          list={[
            'Britain as a constitutional monarchy',
            'How Parliament works',
            'Elections, the government and the opposition',
            'Devolved administrations of the UK',
            'The Commonwealth, EU, UN and NATO',
            'British law and justice',
            'The courts',
            'Fundamental principles and rights',
            'Tax',
            'Driving',
            'Community work and getting involved',
          ]}
        />
                <Text style={styles.text}>
          {'\n'}
          The UK is a parliamentary democracy with the monarch as head of state. This section will tell you about the different institutions which make up this democratic system and explain how you can play a part in the democratic process. {'\n'}</Text>
      </View>
    );
  }
}
