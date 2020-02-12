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
  BoldStart,
} from '../bookcomponents';

export default class Chapter4Part8 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Places of interest</Text>
        <Text style={styles.text}>
          {"\n"}The UK has a large network of public footpaths in the countryside. There are also many opportunities for mountain biking, mountaineering and hill walking. There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape.
          {"\n"}{"\n"}
There are many museums in the UK, which range from small community museums to large national and civic collections. Famous landmarks exist in towns, cities and the countryside throughout the UK. Most of them are open to the public to view (generally for a charge).
{"\n"}{"\n"}
Many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland. Both are charities that work to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep the organisation running.{"\n"}
        </Text>
        <Text style={styles.title}>UK landmarks</Text>
        <PinkCard text={"Big Ben is the nickname for the great bell of the clock at the Houses of Parliament in London. Many people call the clock Big Ben as well. The clock is over 150 years old and is a popular tourist attraction. The clock tower is named 'Elizabeth Tower' in honour of Queen Elizabeth II's Diamond Jubilee in 2012."} />
        <PinkCard text={"The Eden Project is located in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world. The Eden Project is also a charity which runs environmental and social projects internationally."} />
        <PinkCard text={"The Castle is a dominant feature of the skyline in Edinburgh, Scotland. It has a long history, dating back to the early Middle Ages. It is looked after by Historic Scotland, a Scottish government agency."} />
        <PinkCard text={"Located on the north-east coast of Northern Ireland, the Giant's Causeway is a land formation of columns made from volcanic lava. It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed."} />
        <PinkCard text={"Trossachs National Park covers 720 square miles (1,865 square kilometres) in the west of Scotland. Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park."} />
        <Text style={styles.subtitle}>{"\n"}London Eye{"\n"}</Text>
        <ImageCard
          img={"londoneye"}
          text={"London Eye captured at night. It is also used as part of New Year celebrations."}
        />
        <PinkCard text={"The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK's celebration of the new millennium and continues to be an important part of New Year celebrations."} />
        <PinkCard text={"Snowdonia is a national park in North Wales. It covers an area of 838 square miles (2,170 square kilometres). Its most well-known landmark is Snowdon, which is the highest mountain in Wales."} />
        <PinkCard text={"The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building's history. People can also see the Crown Jewels there."} />
        <View style={{height: EStyleSheet.value('15rem')}} />
        <ImageCard
          img={"lakedistrict"}
          text={"The views that can be seen in Lake District"}
        />
        <PinkCard text={"The Lake District is England's largest national park. It covers 885 square miles (2,292 square kilometres). It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors. The biggest stretch of water is Windermere. In 2007, television viewers voted Wastwater as Britain's favourite view."} />
        <GreenCard
          list={[
            'Some of the ways in which people in the UK spend their leisure time',
            'The development of British cinema',
            'What the television licence is and how it funds the BBC',
            'Some of the places of interest to visit in the UK',
          ]}
        />
      </View>
    );
  }
}
