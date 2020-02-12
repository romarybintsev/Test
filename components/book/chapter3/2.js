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

export default class Chapter3Part2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Early Britain</Text>
        <Text style={styles.text}>
          {'\n'}The first people to live in Britain were hunter-gatherers, in
          what we call the Stone Age. For much of the Stone Age, Britain was
          connected to the continent by a land bridge. People came and went,
          following the herds of deer and horses which they hunted. Britain only
          became permanently separated from the continent by the Channel about
          10,000 years ago.{'\n'}
          {'\n'}
          The first farmers arrived in Britain about 6,000 years ago. The
          ancestors of these first farmers probably came from south-east Europe.
          These people built houses, tombs and monuments on the land. One of
          these monuments, Stonehenge, still stands in what is now the English
          county of Wiltshire. Stonehenge was probably a special gathering place
          for seasonal ceremonies. Other Stone Age sites have also survived.
          Skara Brae on Orkney, off the north coast of Scotland, is the best
          preserved prehistoric village in northern Europe, and has helped
          archaeologists to understand more about how people lived near the end
          of the Stone Age.
          {'\n'}
        </Text>
        <ImageCard img={'Stonehenge'} text={'Stonehenge'} />
        <Text style={styles.text}>
          {'\n'}
          Around 4,000 years ago, people learned to make bronze. We call this
          period the Bronze Age. People lived in roundhouses and buried their
          dead in tombs called round barrows. The people of the Bronze Age were
          accomplished metalworkers who made many beautiful objects in bronze
          and gold, including tools, ornaments and weapons. The Bronze Age was
          followed by the Iron Age, when people learned how to make weapons and
          tools out of iron. People still lived in roundhouses, grouped together
          into larger settlements, and sometimes defended sites called hill
          forts. A very impressive hill fort can still be seen today at Maiden
          Castle, in the English county of Dorset. Most people were farmers,
          craft workers or warriors. The language they spoke was part of the
          Celtic language family. Similar languages were spoken across Europe in
          the Iron Age, and related languages are still spoken today in some
          parts of Wales, Scotland and Ireland. The people of the Iron Age had a
          sophisticated culture and economy. They made the first coins to be
          minted in Britain, some inscribed with the names of Iron Age kings.
          This marks the beginnings of British history. {'\n'}
        </Text>
        <Text style={styles.title}>The Romans</Text>
        <Text style={styles.text}>
          {'\n'}
          Julius Caesar led a Roman invasion of Britain in 55 BC. This was
          unsuccessful and for nearly 100 years Britain remained separate from
          the Roman Empire. In AD 43 the Emperor Claudius led the Roman army in
          a new invasion. This time, there was resistance from some of the
          British tribes but the Romans were successful in occupying almost all
          of Britain. One of the tribal leaders who fought against the Romans
          was Boudicca, the queen of the Iceni in what is now eastern England.
          She is still remembered today and there is a statue of her on
          Westminster Bridge in London, near the Houses of Parliament.
          {'\n'}
          {'\n'}
          Areas of what is now Scotland were never conquered by the Romans, and
          the Emperor Hadrian built a wall in the north of England to keep out
          the Picts (ancestors of the Scottish people). Included in the wall
          were a number of forts. Parts of Hadrian's Wall, including the forts
          of Housesteads and Vindolanda, can still be seen. It is a popular area
          for walkers and is a UNESCO (United Nations Education, Scientific and
          Cultural Organization) World Heritage Site. {'\n'}{' '}
        </Text>
        <ImageCard img={'Hadrianswall'} text={'Hadrians wall'} />
        <Text style={styles.text}>
          {'\n'}
          The Romans remained in Britain for 400 years. They built roads and
          public buildings, created a structure of law, and introduced new
          plants and animals. It was during the 3rd and 4th centuries AD that
          the first Christian communities began to appear in Britain. {
            '\n'
          }{' '}
        </Text>
        <Text style={styles.title}>The Anglo-Saxons</Text>
        <Text style={styles.text}>
          {'\n'}
          The Roman army left Britain in AD 410 to defend other parts of the
          Roman Empire and never returned. Britain was again invaded by tribes
          from northern Europe: the Jutes, the Angles and the Saxons. The
          languages they spoke are the basis of modern-day English. Battles were
          fought against these invaders but, by about AD 600, Anglo-Saxon
          kingdoms were established in Britain. These kingdoms were mainly in
          what is now England. The burial place of one of the kings was at
          Sutton Hoo in modern Suffolk. This king was buried with treasure and
          armour, all placed in a ship which was then covered by a mound of
          earth. Parts of the west of Britain, including much of what is now
          Wales, and Scotland, remained free of Anglo-Saxon rule.
          {'\n'}
          {'\n'}The Anglo-Saxons were not Christians when they first came to
          Britain but, during this period, missionaries came to Britain to
          preach about Christianity. Missionaries from Ireland spread the
          religion in the north. The most famous of these were St Patrick, who
          would become the patron saint of Ireland and St Columba, who founded a
          monastery on the island of Iona, off the coast of what is now
          Scotland. St Augustine led missionaries from Rome, who spread
          Christianity in the south. St Augustine became the first Archbishop of
          Canterbury. {'\n'}{' '}
        </Text>
        <Text style={styles.title}>The Vikings{'\n'}</Text>
        <ImageCard
          img={'vikings'}
          text={
            'Modern representation of the Vikings: people dressed as Vikings'
          }
        />
        <Text style={styles.text}>
          {'\n'}
          The Vikings came from Denmark and Norway. They first visited Britain
          in AD 789 to raid coastal towns and take away goods and slaves. Then,
          they began to stay and form their own communities in the east of
          England and Scotland. The Anglo-Saxon kingdoms in England united under
          King Alfred the Great, who defeated the Vikings. Many of the Viking
          invaders stayed in Britain, especially in the east and north of
          England, in an area known as the Danelaw (many places names there,
          such as Grimsby and Scunthorpe, come from the Viking languages). The
          Viking settlers mixed with local communities and some converted to
          Christianity.
          {'\n'}
          {'\n'}Anglo-Saxon kings continued to rule what is now England, except
          for a short period when there were Danish kings. The first of these
          was Cnut, also called Canute.
          {'\n'}
          {'\n'}In the north, the threat of attack by Vikings had encouraged the
          people to unite under one king, Kenneth MacAlpin. The term Scotland
          began to be used to describe that country.{'\n'}
        </Text>
        <Text style={styles.title}>The Norman Conquest</Text>
        <Text style={styles.text}>
          {'\n'}
          In 1066, an invasion led by William, the Duke of Normandy (in what is
          now northern France), defeated Harold, the Saxon king of England, at
          the Battle of Hastings. Harold was killed in the battle. William
          became king of England and is known as William the Conqueror. The
          battle is commemorated in a great piece of embroidery, known as the
          Bayeux Tapestry, which can still be seen in France today.
          {'\n'}
          {'\n'}The Norman Conquest was the last successful foreign invasion of
          England and led to many changes in government and social structures in
          England. Norman French, the language of the new ruling class,
          influenced the development of the English language as we know it
          today. Initially the Normans also conquered Wales, but the Welsh
          gradually won territory back. The Scots and the Normans fought on the
          border between England and Scotland; the Normans took over some land
          on the border but did not invade Scotland.{'\n'}
        </Text>
        <ImageCard img={'BayeuxTapestry'} text={'Bayeux Tapestry'} />
        <Text style={styles.text}>
          {'\n'}
          William sent people all over England to draw up lists of all the towns
          and villages. The people who lived there, who owned the land and what
          animals they owned were also listed. This was called the Domesday
          Book. It still exists today and gives a picture of society in England
          just after the Norman Conquest.
        </Text>
        <GreenCard
          list={[
            'The history of the UK before the Romans',
            'The impact of the Romans on British society',
            'The different groups that invaded after the Romans',
            'The importance of the Norman invasion in 1066',
          ]}
        />
      </View>
    );
  }
}
