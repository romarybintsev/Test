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
} from '../bookcomponents';

export default class Chapter4Part5 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Sports</Text>
        <Text style={styles.text}>
          {"\n"}Sports of all kinds play an important part in many people's lives. There are several sports that are particularly popular in the UK. Many sporting events take place at major stadiums such as Wembley Stadium in London and the Millennium Stadium in Cardiff.
          {"\n"}{"\n"}
Local governments and private companies provide sports facilities such as swimming pools, tennis courts, football pitches, dry ski slopes and gymnasiums. Many famous sports, including cricket, football, lawn tennis, golf and rugby, began in Britain.
{"\n"}{"\n"}
The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful, across a wide range of Olympic sports, finishing third in the medal table.
          
        </Text>
        <ImageCard img={"olympics"} text={"The UK has hosted the olympic games 3 times."} />
        <Text style={styles.text}>
        {"\n"}
        The Paralympic Games for 2012 were also hosted in London. The Paralympics have their origin in the work of Dr Sir Ludwig Guttman, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire. Dr Guttman developed new methods of treatment for people with spinal injuries and encouraged patients to take part in exercise and sport.
        {"\n"}</Text>
        <Text style={styles.subtitle}>
        Notable British sportsmen and women
        </Text>
        <PinkCard bold={"Sir Roger Bannister (1929 - )"} text={" was the first man in the world to run a mile in under four minutes, in 1954."} />
        <PinkCard bold={"Sir Jackie Stewart (1939 - )"} text={" is a Scottish former racing driver who won the Formula 1 world championship three times."} />
        <PinkCard bold={"Bobby Moore (1941 - 93)"} text={" captained the English football team that won the World Cup in 1966."} />
        <PinkCard bold={"Sir Ian Botham (1955 - )"} text={" captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling."} />
        <PinkCard bold={"Jayne Torvill (1957 - ) and Christopher Dean (1958 - )"} text={" won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships."} />
        <PinkCard bold={"Sir Steve Redgrave (1962 - )"} text={" won gold medals in rowing in five consecutive Olympic Games and is one of Britain's greatest Olympians."} />
        <PinkCard bold={"Baroness Tanni-Grey Thompson (1969 - )"} text={" is an athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games. She won the London Marathon six times and broke a total of 30 world records."} />
        <PinkCard bold={"Dame Kelly Holmes (1970 - )"} text={" won two gold medals for running in the 2004 Olympic Games. She has held a number of British and European records."} />
        <PinkCard bold={"Dame Ellen MacArthur (1976 - )"} text={" is a yachtswoman and in 2004 became the fastest person to sail around the world singlehanded."} />
        <PinkCard bold={"Sir Chris Hoy (1976 - )"} text={" is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 11 world championship titles."} />
        <PinkCard bold={"David Weir (1979 - )"} text={" is a Paralympian who uses a wheelchair and has won six gold medals over two Paralympic Games. He has also won the London Marathon six times."} />
        <PinkCard bold={"Bradley Wiggins (1980 - )"} text={" is a cyclist. In 2012, he became the first Briton to win the Tour de France. He has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games."} />
        <PinkCard bold={"Mo Farah (1983 - )"} text={" is a British distance runner, born in Somalia. He won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres."} />
        <PinkCard bold={"Jessica Ennis (1986 - )"} text={" is an athlete. She won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events. She also holds a number of British athletics records."} />
        <PinkCard bold={"Andy Murray (1987 - )"} text={" is a Scottish tennis player who in 2012 won the men's singles in the US Open. He is the first British man to win a singles title in a Grand Slam tournament since 1936. In the same year, he won Olympic gold and silver medals and was runner-up in the men's singles at Wimbledon."} />
        <PinkCard bold={"Ellie Simmonds (1994 - )"} text={" is a Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games."} />


        <Text style={styles.title}>{"\n"}Cricket</Text>
        <Text style={styles.text}>
          {"\n"}
          Cricket originated in England and is now played in many countries. Games can last up to five days but still result in a draw! The idiosyncratic nature of the game and its complex laws are said to reflect the best of the British character and sense of fair play. You may come across expressions such as 'rain stopped play', 'batting on a sticky wicket', 'playing a straight bat', 'bowled a googly' or 'it's just not cricket', which have passed into everyday usage. The most famous competition is the Ashes, which is a series of Test matches played between England and Australia.
          {"\n"}
        </Text>
        <Text style={styles.title}>
        Football{"\n"}
        </Text>
        <ImageCard img={"football"} text={"Football is the UK's most popular sport."} />
        <Text style={styles.text}>
          {"\n"}Football is the UK's most popular sport. It has a long history in the UK and the first professional football clubs were formed in the late 19th century.
          {"\n"}{"\n"}
England, Scotland, Wales and Northern Ireland each have separate leagues in which clubs representing different towns and cities compete. The English Premier League attracts a huge international audience. Many of the best players in the world play in the Premier League. Many UK teams also compete in competitions such as the UEFA (Union of European Football Associations) Champions League, against other teams from Europe. Most towns and cities have a professional club and people take great pride in supporting their home team. There can be great rivalry between different football clubs and among fans.
{"\n"}{"\n"}
Each country in the UK also has its own national team that competes with other national teams across the world in tournaments such as the FIFA (Federation Internationale de Football Association) World Cup and the UEFA European Football Championships. England's only international tournament victory was at the World Cup of 1966, hosted in the UK.
{"\n"}{"\n"}
Football is also a popular sport to play in many local communities, with people playing amateur games every week in parks all over the UK.
          {"\n"}
        </Text>
        <Text style={styles.title}>Rugby</Text>
        <Text style={styles.text}>
          {"\n"}
          Rugby originated in England in the early 19th century and is very popular in the UK today. There are two different types of rugby, which have different rules: union and league. Both have separate leagues and national teams in England, Wales, Scotland and Northern Ireland (who play with the Irish Republic). Teams from all countries compete in a range of competitions. The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy. The Super League is the most well-known rugby league (club) competition.
          {"\n"}
        </Text>

        <Text style={styles.title}>Horse-racing</Text>
        <Text style={styles.text}>
          {"\n"}
          There is a very long history of horse racing in Britain, with evidence of events taking place as far back as Roman times. The sport has a long association with royalty. There are racecourses all over the UK. Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk.
          {"\n"}
        </Text>

        <Text style={styles.title}>Golf</Text>
        <Text style={styles.text}>
          {"\n"}
          The modern game of golf can be traced back to 15th century Scotland. It is a popular sport played socially as well as professionally. There are public and private golf courses all over the UK. St Andrews in Scotland is known as the home of golf. The Open Championship is the only 'Major' tournament held outside the United States. It is hosted by a different golf course every year.
          {"\n"}
        </Text>

        <Text style={styles.title}>Tennis</Text>
        <Text style={styles.text}>
          {"\n"}
          Modern tennis evolved in England in the late 19th century. The first tennis club was founded in Leamington Spa in 1872. The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only 'Grand Slam' event played on grass.
          {"\n"}
        </Text>

        <Text style={styles.title}>Water sports</Text>
        <Text style={styles.text}>
          {"\n"}
          Sailing continues to be popular in the UK, reflecting our maritime heritage. A British sailor, Sir Francis Chichester, was the first person to sail single-handed around the world, in 1966/67. Two years later, Sir Robin Knox-Johnston became the first person to do this without stopping. Many sailing events are held throughout the UK, the most famous of which is at Cowes on the Isle of Wight. Rowing is also popular, both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities.
          {"\n"}
        </Text>

        <Text style={styles.title}>Motor sports</Text>
        <Text style={styles.text}>
          {"\n"}
          There is a long history of motor sport in the UK, for both cars and motor cycles. Motor-car racing in the UK started in 1902. The UK continues to be a world leader in the development and manufacture of motor-sport technology. A Formula 1 Grand Prix event is held in the UK each year and a number of British Grand Prix drivers have won the Formula 1 World Championship. Recent British winners include Damon Hill, Lewis Hamilton and Jensen Button.
          {"\n"}
        </Text>

        <Text style={styles.title}>Skiing</Text>
        <Text style={styles.text}>
          {"\n"}
          Skiing is increasingly popular in the UK. Many people go abroad to ski and there are also dry ski slopes throughout the UK. Skiing on snow may also be possible during the winter. There are five ski centres in Scotland, as well as Europe's longest dry ski slope near Edinburgh.   {"\n"}
        </Text>
      </View>
    );
  }
}
