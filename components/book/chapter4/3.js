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

export default class Chapter4Part3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Religion</Text>
        <Text style={styles.text}>
          {'\n'}The UK is historically a Christian country. In the 2009 Citizenship Survey, 70% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4%), Hindu (2%), Sikh (1%), Jewish or Buddhist (both less than 0.5%), and 2% of people followed another religion. There are religious buildings for other religions all over the UK. This includes Islamic mosques, Hindu temples, Jewish synagogues, Sikh gurdwaras and Buddhist temples. However, everyone has the legal right to choose their religion, or to choose not to practise a religion. In the Citizenship Survey, 21% of people said that they had no religion.
          {'\n'}
        </Text>
        <Text style={styles.title}>Christian Churches</Text>
        <Text style={styles.text}>
          {'\n'}In England, there is a constitutional link between Church and state. The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States). It is a Protestant Church and has existed since the Reformation in the 1530s.
          {'\n'}{'\n'}
The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury. The monarch has the right to select the Archbishop and other senior church officials, but usually the choice is made by the Prime Minister and a committee appointed by the Church. Several Church of England bishops sit in the House of Lords.
{'\n'}{'\n'}
In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator, who is appointed for one year only and often speaks on behalf of that Church.

{'\n'}
        </Text>
        <ImageCard img={'baroquechurch'} text={'Churches in the UK: Inside a Catholic Church'} />
        <Text style={styles.text}>
          {'\n'}There is no established Church in Wales or Northern Ireland. Other Protestant Christian groups in the UK are Baptists, Methodists, Presbyterians and Quakers. There are also other denominations of Christianity, the biggest of which is Roman Catholic.
          {'\n'}
        </Text>
        <Text style={styles.title}>Patron Saints' days</Text>
        <Text style={styles.text}>
          {'\n'}England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day:
          {'\n'}
        </Text>
        {points([
            "1 March: St David's Day, Wales",
            "17 March: St Patrick's Day, Northern Ireland",
            "23 April: St George's Day, England",
            "30 November: St Andrew's Day, Scotland.",
        ])}
        <Text style={styles.text}>
          {'\n'}Only Scotland and Northern Ireland have their patron saint's day as an official holiday (although in Scotland not all businesses and Offices will close). Events are held across Scotland, Northern Ireland and the rest of the country, especially where there are a lot of people of Scottish, Northern Irish and Irish heritage.
          {'\n'}{'\n'}
While the patron saints' days are no longer public holidays in England and Wales, they are still celebrated. Parades and small festivals are held all over the two countries.{'\n'}
        </Text>
        <GreenCard
          list={[
            'The different religions that are practised in the UK',
            "That the Anglican Church, also known as the Church of England, is the Church of the state in England (the 'established Church')",
            'That other branches of the Christian Church also practise their faith in the UK without being linked to the state',
            'That other religions are practised in the UK',
            'About the patron saints',
          ]}
        />
      </View>
    );
  }
}
