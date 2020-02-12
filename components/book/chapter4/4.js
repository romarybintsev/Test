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
  PinkCard,
  BoldStart
} from '../bookcomponents';

export default class Chapter4Part4 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The main Christian festivals</Text>
        <BoldStart bold={"Christmas Day, "} text={"25 December, celebrates the birth of Jesus Christ. It is a public holiday. Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself."} /> 

        <Text style={styles.text}>
          {"\n"}Christmas is celebrated in a traditional way. People usually spend the day at home and eat a special meal, which often includes roast turkey, Christmas pudding and mince pies. They give gifts, send cards and decorate their houses. Christmas is a special time for children. Very young children believe that Father Christmas (also known as Santa Claus) brings them presents during the night before Christmas Day. Many people decorate a tree in their home.
        </Text>
        <BoldStart bold={"Boxing Day "} text={"is the day after Christmas Day and is a public holiday."} /> 
        <Text style={styles.text}>
          {"\n"}
          Easter eggs, often chocolate eggs given as presents on Easter day.
          
        </Text>
        <BoldStart bold={"Easter "} text={"takes place in March or April. It marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday. Both Good Friday and the following Monday, called Easter Monday, are public holidays."} /> 
        <Text style={styles.text}>
          {"\n"}
          The 40 days before Easter are known as Lent. It is a time when Christians take time to reflect and prepare for Easter. Traditionally, people would fast during this period and today many people will give something up, like a favourite food. The day before Lent starts is called Shrove Tuesday, or Pancake Day. People eat pancakes, which were traditionally made to use up foods such as eggs, fat and milk before fasting. Lent begins on Ash Wednesday. There are church services where Christians are marked with an ash cross on their forehead as a symbol of death and sorrow for sin.
          {"\n"}{"\n"}
Easter is also celebrated by people who are not religious. 'Easter eggs' are chocolate eggs often given as presents at Easter as a symbol of new life.
          {"\n"}
        </Text>
        <Text style={styles.title}>Other religious festivals</Text>
        <BoldStart bold={"Diwali "} text={"normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are different stories about how the festival came about. There is a famous celebration of Diwali in Leicester."} /> 
        <BoldStart bold={"Hannukah "} text={"is in November or December and is celebrated for eight days. It is to remember the Jews' struggle for religious freedom. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight."} /> 
        <BoldStart bold={"Eid al-Fitr "} text={"celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast. The date when it takes place changes every year. Muslims attend special services and meals."} /> 
        <BoldStart bold={"Eid ul Adha "} text={"remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to. It reminds Muslims of their own commitment to God. Many Muslims sacrifice an animal to eat during this festival. In Britain this has to be done in a slaughterhouse."} /> 
        <BoldStart bold={"Vaisakhi "} text={"(also spelled Baisakhi) is a Sikh festival which celebrates the founding of the Sikh community known as the Khalsa. It is celebrated on 14 April each year with parades, dancing and singing."} /> 
        <Text style={styles.title}>
        {"\n"}Other festivals and traditions
        </Text>
        <Text style={styles.text}>
          {"\n"}
          New year (also called Hogmanay) in Scotland, Edinburgh
          
        </Text>
        <BoldStart bold={"New Year, "} text={"1 January, is a public holiday. People usually celebrate on the night of 31 December (called New Year's Eve). In Scotland, 31 December is called Hogmanay and 2 January is also a public holiday. For some Scottish people, Hogmanay is a bigger holiday than Christmas."} /> 
        <BoldStart bold={"Valentine's Day, "} text={"14 February, is when lovers exchange cards and gifts. Sometimes people send anonymous cards to someone they secretly admire."} /> 
        <BoldStart bold={"April Fool's Day, "} text={"1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes."} /> 
        <BoldStart bold={"Mothering Sunday "} text={"(or Mother's Day) is the Sunday three weeks before Easter. Children send cards or buy gifts for their mothers."} /> 
        <BoldStart bold={"Father's Day "} text={"is the third Sunday in June. Children send cards or buy gifts for their fathers."} /> 
        <BoldStart bold={"Halloween, "} text={"31 October, is an ancient festival and has roots in the pagan festival to mark the beginning of winter. Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."} /> 
        <BoldStart bold={"Bonfire Night, "} text={"5 November, is an occasion when people in Great Britain set off fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament."} /> 
        <BoldStart bold={"Remembrance Day, "} text={"11 November, commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 11 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."} /> 

        <Text style={styles.title}>{"\n"}Bank holidays</Text>
        <Text style={styles.text}>
          {"\n"}As well as those mentioned previously, there are other public holidays each year called bank holidays, when banks and many other businesses are closed for the day. These are of no religious significance. They are at the beginning of May, in late May or early June, and in August. In Northern Ireland, the anniversary of the Battle of the Boyne in July is also a public holiday.
        </Text>
        <GreenCard
          list={[
            'The main Christian festivals that are celebrated in the UK',
            'Other religious festivals that are important in the UK',
            'Some of the other events that are celebrated in the UK',
            'What a bank holiday is',
          ]}
        />
      </View>
    );
  }
}
