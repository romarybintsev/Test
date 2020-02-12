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
  YellowCard,
} from '../bookcomponents';

export default class Chapter5Part4 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The Commonwealth</Text>
        <Text style={styles.text}>
          {'\n'}
          The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined.
          {'\n'}{'\n'}
The Queen is the ceremonial head of the Commonwealth, which currently has 54 member states. Membership is voluntary. The Commonwealth has no power over its members, although it can suspend membership. The Commonwealth is based on the core values of democracy, good government and the rule of law.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>Commonwealth members{'\n'}</Text>
        {points([
            'Antigua and Barbuda',
            'Australia',
            'The Bahamas',
            'Bangladesh',
            'Barbados',
            'Belize',
            'Botswana',
            'Brunei Darussalam',
            'Cameroon',
            'Canada',
            'Cyprus',
            'Dominica',
            'Fiji (currently suspended)',
            'The Gambia',
            'Ghana',
            'Grenada',
            'Guyana',
            'India',
            'Jamaica',
            'Kenya',
            'Kiribati',
            'Lesotho',
            'Malawi',
            'Malaysia',
            'Maldives',
            'Malta',
            'Mauritius',
            'Mozambique',
            'Namibia',
            'Nauru',
            'New Zealand',
            'Nigeria',
            'Pakistan',
            'Papua New Guinea',
            'Rwanda',
            'Samoa',
            'Seychelles',
            'Sierra Leone',
            'Singapore',
            'Solomon Islands',
            'South Africa',
            'Sri Lanka',
            'St Kitts and Nevis',
            'St Lucia',
            'St Vincent and the Grenadines',
            'Swaziland',
            'Tanzania',
            'Tonga',
            'Trinidad and Tobago',
            'Tuvalu',
            'Uganda',
            'UK',
            'Vanuatu',
            'Zambia',
        ])}
        <Text style={styles.title}>
          {'\n'}The European Union{'\n'}
        </Text>
        <ImageCard
          img={'europeanunion'}
          text={'European Union Flag'}
        />
        <Text style={styles.text}>
          {' '}
          {'\n'}
          The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany, Italy, Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. There are now 27 EU member states. Croatia will also become a member state in 2013.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>EU member states{'\n'}</Text>
        {points([
            'Austria',
            'Belgium',
            'Bulgaria',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Estonia',
            'Finland',
            'France',
            'Germany',
            'Greece',
            'Hungary',
            'Ireland',
            'Italy',
            'Latvia',
            'Lithuania',
            'Luxembourg',
            'Malta',
            'Netherlands',
            'Poland',
            'Portugal',
            'Romania',
            'Slovakia',
            'Slovenia',
            'Spain',
            'Sweden',
            'UK',
        ])}
        <Text style={styles.text}>
          {'\n'}EU law is legally binding in the UK and all the other EU member states. European laws are called directives, regulations or framework decisions.
          {'\n'}
        </Text>
        <Text style={styles.title}>The Council of Europe</Text>
        <Text style={styles.text}>
          {'\n'}The Council of Europe is separate from the EU. It has 47 member countries, including the UK, and is responsible for the protection and promotion of human rights in those countries. It has no power to make laws but draws up conventions and charters, the most well-known of which is the European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights.{'\n'}
        </Text>
        <Text style={styles.title}>The United Nations</Text>
        <Text style={styles.text}>
          {'\n'}The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security. There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council.{'\n'}
        </Text>
        <Text style={styles.title}>The North Atlantic Treaty Organization (NATO)</Text>
        <Text style={styles.text}>
          {'\n'}The UK is also a member of NATO. NATO is a group of European and North American countries that have agreed to help each other if they come under attack. It also aims to maintain peace between all of its members.
        </Text>
        <GreenCard
          list={[
            'What the Commonwealth is and its role',
            'Other international organisations of which the UK is a member',
         ]}
        />
      </View>
    );
  }
}
