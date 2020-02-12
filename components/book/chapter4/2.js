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

export default class Chapter4Part2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The UK today</Text>
        <Text style={styles.text}>
          {'\n'}The UK today is a more diverse society than it was 100 years
          ago, in both ethnic and religious terms. Post-war immigration means
          that nearly 10% of the population has a parent or grandparent born
          outside the UK. The UK continues to be a multinational and multiracial
          society with a rich and varied culture. This section will tell you
          about the different parts of the UK and some of the important places.
          It will also explain some of the UK's traditions  customs and some
          of the popular activities that take place.
          {'\n'}
        </Text>
        <Text style={styles.title}>The nations of the UK</Text>
        <Text style={styles.text}>
          {'\n'}The UK is located in the north west of Europe. The longest
          distance on the mainland is from John O'Groats on the north coast of
          Scotland to Land's End in the south-west corner of England. It is
          about 870 miles (approximately 1,400 kilometres). Most people live in
          towns and cities but much of Britain is still countryside. Many people
          continue to visit the countryside for holidays and for leisure
          activities such as walking, camping and fishing.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Cities of the UK{'\n'}</Text>
        <Text style={styles.subtitle}>England</Text>
        <Text style={styles.text}>
          {'\n'}London, Birmingham, Liverpool, Leeds, Sheffield, Bristol,
          Manchester, Bradford, Newcastle Upon Tyne, Plymouth, Southampton,
          Norwich.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Wales</Text>
        <Text style={styles.text}>
          {'\n'}Cardiff, Swansea, Newport.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Scotland</Text>
        <Text style={styles.text}>
          {'\n'}Edinburgh, Glasgow, Dundee, Aberdeen.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Northern Ireland</Text>
        <Text style={styles.text}>
          {'\n'}Belfast.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Capital cities</Text>
        <Text style={styles.text}>
          {'\n'}The capital city of the UK is London.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Scotland</Text>
        <Text style={styles.text}>
          {'\n'}The capital city of Scotland is Edinburgh.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Wales</Text>
        <Text style={styles.text}>
          {'\n'}The capital city of Wales is Cardiff.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Northern Ireland</Text>
        <Text style={styles.text}>
          {'\n'}The capital city of Northern Ireland is Belfast.{'\n'}{' '}
        </Text>
        <Text style={styles.title}>UK currency</Text>
        <Text style={styles.text}>
          {'\n'}The currency in the UK is the pound sterling (symbol £). There
          are 100 pence in a pound. The denominations (values) of currency are:
          {'\n'}
        </Text>
        {points([
          'coins: 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2',
          'notes: £5, £10, £20, £50',
        ])}
        <Text style={styles.text}>
          {'\n'}Northern Ireland and Scotland have their own banknotes, which
          are valid everywhere in the UK. However, shops and businesses do not
          have to accept them.{'\n'}
        </Text>
        <Text style={styles.title}>Languages and dialects</Text>
        <Text style={styles.text}>
          {'\n'}There are many variations in language in the different parts of
          the UK. The English language has many accents and dialects. In Wales,
          many people speak Welsh, a completely different language from
          English, and it is taught in schools and universities. In Scotland,
          Gaelic (again, a different language) is spoken in some parts of the
          Highlands and Islands, and in Northern Ireland some people speak Irish
          Gaelic.{'\n'}
        </Text>
        <Text style={styles.title}>Population</Text>
        <Text style={styles.text}>
          {'\n'}The table below shows how the population of the UK has changed
          over time.{'\n'}
        </Text>
        <YellowCard
          info={[
            {
              title: 'Year',
              list: [
                '1600',
                '1700',
                '1801',
                '1851',
                '1901',
                '1951',
                '1998',
                '2005',
                '2010',
              ],
            },
            {
              title: 'Population',
              list: [
                'Just over 4 million',
                '5 million',
                '8 million',
                '20 million',
                '40 million',
                '50 million',
                '57 million',
                'Just under 60 million',
                'Just over 62 million',
              ],
            },
          ]}
        />
        <Text style={styles.text}>
          Source: National Statistics {'\n'} {'\n'}
          In Scotland, Gaelic is spoken in some parts of the Highlands and
          Islands, and in Northern Ireland some people speak Irish Gaelic.
          {'\n'} {'\n'}
          Population growth has been faster in more recent years. Migration into
          the UK and longer life expectancy have played a part in population
          growth.
          {'\n'} {'\n'}
          The population is very unequally distributed over the four parts of
          the UK. England more or less consistently makes up 84% of the total
          population, Wales around 5%, Scotland just over 8% and Northern
          Ireland less than 3%.{'\n'}
        </Text>
        <Text style={styles.title}>An ageing population</Text>
        <Text style={styles.text}>
          {'\n'}People in the UK are living longer than ever before. This is due
          to improved living standards and better health care. There are now a
          record number of people aged 85 and over. This has an impact on the
          cost of pensions and health care.{'\n'}
        </Text>
        <Text style={styles.title}>Ethnic diversity</Text>
        <Text style={styles.text}>
          {'\n'}The UK population is ethnically diverse and changing rapidly,
          especially in large cities such as London. It is not always easy to
          get an exact picture of the ethnic origin of all the population. There
          are people in the UK with ethnic origins from all over the world. In
          surveys, the most common ethnic description chosen is white, which
          includes people of European, Australian, Canadian, New Zealand and
          American descent. Other significant groups are those of Asian, black
          and mixed descent.{'\n'}
        </Text>
        <Text style={styles.title}>An equal society</Text>
        <Text style={styles.text}>
          {'\n'}Within the UK, it is a legal requirement that men and women
          should not be discriminated against because of their gender or because
          they are, or are not, married. They have equal rights to work, own
          property, marry and divorce. If they are married, both parents are
          equally responsible for their children.
          {'\n'}
          {'\n'}
          Women in Britain today make up about half of the workforce. On
          average, girls leave school with better qualifications than boys. More
          women than men study at university.
          {'\n'}
          {'\n'}
          Employment opportunities for women are much greater than they were in
          the past. Women work in all sectors of the economy, and there are now
          more women in high-level positions than ever before, including senior
          managers in traditionally male-dominated occupations. Alongside this,
          men now work in more varied jobs than they did in the past.
          {'\n'}
          {'\n'}
          It is no longer expected that women should stay at home and not work.
          Women often continue to work after having children. In many families
          today, both partners work and both share responsibility for childcare
          and household chores.{'\n'}
        </Text>
        <GreenCard
          list={[
            'The capital cities of the UK',
            'What languages other than English are spoken in particular parts of the UK',
            'How the population of the UK has changed',
            'That the UK is an equal society and ethnically diverse',
            'The currency of the UK',
          ]}
        />
      </View>
    );
  }
}
