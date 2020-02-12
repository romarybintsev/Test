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

export default class Chapter4Part6 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Music</Text>
        <Text style={styles.text}>
          {'\n'}Music is an important part of British culture, with a rich and
          varied heritage. It ranges from classical music to modern pop. There
          are many different venues and musical events that take place across
          the UK.
          {'\n'}
          {'\n'}
          The Proms is an eight-week summer season of orchestral classical music
          that takes place in various venues, including the Royal Albert Hall in
          London. It has been organised by the British Broadcasting Corporation
          (BBC) since 1927. The Last Night of the Proms is the most well-known
          concert and (along with others in the series) is broadcast on
          television.
          {'\n'}
          {'\n'}
          Classical music has been popular in the UK for many centuries. Henry
          Purcell (1659 - 95) was the organist at Westminster Abbey. He wrote
          church music, operas and other pieces, and developed a British style
          distinct from that elsewhere in Europe. He continues to be influential
          on British composers.{'\n'}
        </Text>
        <ImageCard
          img={'orchestra'}
          text={'Classical music remains very popular in the UK'}
        />
        <Text style={styles.text}>
          {'\n'}
          The German-born composer George Frederick Handel (1695 - 1759) spent
          many years in the UK and became a British citizen in 1727. He wrote
          the Water Music for King George I and Music for the Royal Fireworks
          for his son, George II. Both these pieces continue to be very popular.
          Handel also wrote an oratorio, Messiah, which is sung regularly by
          choirs, often at Easter time.
          {'\n'}
          {'\n'}
          More recently, important composers include Gustav Holst (1874 - 1934),
          whose work includes The Planets, a suite of pieces themed around the
          planets of the solar system. He adapted Jupiter, part of the Planets
          suite, as the tune for I vow to thee my country, a popular hymn in
          British churches.
        </Text>
        <BoldStart
          bold={'Sir Edward Elgar (1857 - 1934) '}
          text={
            'was born in Worcester, England. His best-known work is probably the Pomp and Circumstance Marches. March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall.'
          }
        />
        <BoldStart
          bold={'Ralph Vaughan Williams (1872 - 1958) '}
          text={
            'wrote music for orchestras and choirs. He was strongly influenced by traditional English folk music.'
          }
        />
        <BoldStart
          bold={'Sir William Walton (1902 - 83) '}
          text={
            "wrote a wide range of music, from film scores to opera. He wrote marches for the coronations of King George VI and Queen Elizabeth II but his best-known works are probably Façade, which became a ballet, and Balthazar's Feast, which is intended to be sung by a large choir."
          }
        />
        <BoldStart
          bold={'Benjamin Britten (1913 - 76) '}
          text={
            "is best known for his operas, which include Peter Grimes and Billy Budd. He also wrote A Young Person's Guide to the Orchestra, which is based on a piece of music by Purcell and introduces the listener to the various different sections of an orchestra. He founded the Aldeburgh festival in Suffolk, which continues to be a popular music event of international importance."
          }
        />

        <Text style={styles.text}>
          {'\n'}
          Other types of popular music, including folk music, jazz, pop and
          music, have flourished in Britain since the 20th century. Britain has
          had an impact on popular music around the world, due to the wide use
          of the English language, the UK's cultural links with many countries,
          and British capacity for invention and innovation. Since the 1960s,
          British pop music has made one of the most important cultural
          contributions to life in the UK. Bands including The Beatles and The
          Rolling Stones continue to have an influence on music both here and
          abroad. British pop music has continued to innovate - for example, the
          Punk movement of the late 1970s, and the trend towards boy and girl
          bands in the 1990s.
          {'\n'}
          {'\n'}
          There are many large venues that host music events throughout the
          year, such as: Wembley Stadium; The O2 in Greenwich, south-east
          London; and the Scottish Exhibition and Conference Centre (SECC) in
          Glasgow.
          {'\n'}
          {'\n'}
          Festival season takes place across the UK every summer, with major
          events in various locations. Famous festivals include Glastonbury, the
          Isle of Wight Festival and the V Festival. Many bands and solo
          artists, both well-known and up-and-coming, perform at these events.
          {'\n'}
          {'\n'}
          The National Eisteddfod of Wales is an annual cultural festival which
          includes music, dance, art and original performances largely in Welsh.
          It includes a number of important competitions for Welsh poetry.
          {'\n'}
          {'\n'}
          The Mercury Music Prize is awarded each September for the best album
          from the UK and Ireland. The Brit Awards is an annual event that gives
          awards in a range of categories, such as best British group and best
          British solo artist.{'\n'}
        </Text>
        <Text style={styles.title}>Theatre</Text>
        <Text style={styles.text}>
          {'\n'}
          There are theatres in most towns and cities throughout the UK, ranging
          from the large to the small. They are an important part of local
          communities and often show both professional and amateur productions.
          London's West End, also known as 'Theatreland', is particularly well
          known. The Mousetrap, a murder-mystery play by Dame Agatha Christie,
          has been running in the West End since 1952 and has had the longest
          initial run of any show in history.
          {'\n'}
          {'\n'}
          There is also a strong tradition of musical theatre in the UK. In the
          19th century, Gilbert and Sullivan wrote comic operas, often making
          fun of popular culture and politics. These operas include HMS
          Pinafore, The Pirates of Penzance and The Mikado. Gilbert and
          Sullivan's work is still often staged by professional and amateur
          groups. More recently, Andrew Lloyd Webber has written the music for
          shows which have been popular throughout the world, including, in
          collaboration with Tim Rice, Jesus Christ Superstar and Evita, and
          also Cats and The Phantom of the Opera.
          {'\n'}
          {'\n'}
          One British tradition is the pantomime. Many theatres produce a
          pantomime at Christmas time. They are based on fairy stories and are
          light-hearted plays with music and comedy, enjoyed by family
          audiences. One of the traditional characters is the Dame, a woman
          played by a man. There is often also a pantomime horse or cow played
          by two actors in the same costume.
          {'\n'}
          {'\n'}
          The Edinburgh Festival takes place in Edinburgh, Scotland, every
          summer. It is a series of different arts and cultural festivals, with
          the biggest and most well-known being the Edinburgh Festival Fringe
          ('the Fringe'). The Fringe is a showcase of mainly theatre and comedy
          performances. It often shows experimental work.
          {'\n'}
          {'\n'}
          The Laurence Olivier Awards take place annually at different venues in
          London. There are a variety of categories, including best director,
          best actor and best actress. The awards are named after the British
          actor Sir Laurence Olivier, later Lord Olivier, who was best known for
          his roles in various Shakespeare plays.
          {'\n'}{' '}
        </Text>
        <Text style={styles.title}>Art</Text>
        <Text style={styles.text}>
          {'\n'}
          During the Middle Ages, most art had a religious theme, particularly
          wall paintings in churches and illustrations in religious books. Much
          of this was lost after the Protestant Reformation but wealthy families
          began to collect other paintings and sculptures. Many of the painters
          working in Britain in the 16th and 17th centuries were from abroad -
          for example, Hans Holbein and Sir Anthony Van Dyck. British artists,
          particularly those painting portraits and landscapes, became well
          known from the 18th century onwards.
          {'\n'} {'\n'}
          Works by British and international artists are displayed in galleries
          across the UK. Some of the most well-known galleries are The National
          Gallery, Tate Britain and Tate Modern in London, the National Museum
          in Cardiff, and the National Gallery of Scotland in Edinburgh.
          {'\n'} {'\n'}
          The Turner Prize was established in 1984 and celebrates contemporary
          art. It was named after Joseph Turner. Four works are shortlisted
          every year and shown at Tate Britain before the winner is announced.
          The Turner Prize is recognised as one of the most prestigious visual
          art awards in Europe. Previous winners include Damien Hirst and
          Richard Wright.{'\n'}{' '}
        </Text>
        <Text style={styles.subtitle}>Notable British artists</Text>
        <PinkCard
          bold={'Thomas Gainsborough (1727 - 88) '}
          text={
            'was a portrait painter who often painted people in country or garden scenery.'
          }
        />
        <PinkCard
          bold={'David Allan (1744 - 96) '}
          text={
            'was a Scottish painter who was best known for painting portraits. One of his most famous works is called The Origin of Painting.'
          }
        />
        <PinkCard
          bold={'Joseph Turner (1775 - 1851) '}
          text={
            'was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting.'
          }
        />
        <PinkCard
          bold={'John Constable (1776 - 1837) '}
          text={
            'was a landscape painter most famous for his works of Dedham Vale on the Suffolk - Essex border in the east of England.'
          }
        />
        <PinkCard
          text={
            'The Pre-Raphaelites were an important group of artists in the second half of the 19th century. They painted detailed pictures on religious or literary themes in bright colours. The group included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais.'
          }
        />
        <PinkCard
          bold={'Sir John Lavery (1856 - 1941) '}
          text={
            'was a very successful Northern Irish portrait painter. His work included painting the Royal Family.'
          }
        />
        <PinkCard
          bold={'Henry Moore (1898 - 1986) '}
          text={
            'was an English sculptor and artist. He is best known for his large bronze abstract sculptures.'
          }
        />
        <PinkCard
          bold={'John Petts (1914 - 91) '}
          text={
            'was a Welsh artist, best known for his engravings and stained glass.'
          }
        />
        <PinkCard
          bold={'Lucian Freud (1922 - 2011) '}
          text={
            'was a German-born British artist. He is best known for his portraits.'
          }
        />
        <PinkCard
          bold={'David Hockney (1937 - ) '}
          text={
            "was an important contributor to the 'pop art' movement of the 1960s and continues to be influential today."
          }
        />

        <Text style={styles.title}>{'\n'}Architecture</Text>
        <Text style={styles.text}>
          {'\n'}
          The architectural heritage of the UK is rich and varied. In the Middle
          Ages, great cathedrals and churches were built, many of which still
          stand today. Examples are the cathedrals in Durham, Lincoln,
          Canterbury and Salisbury. The White Tower in the Tower of London is an
          example of a Norman castle keep, built on the orders of William the
          Conqueror.
          {'\n'}
        </Text>
        <ImageCard img={'toweroflondon'} text={'The Tower of London'} />
        <Text style={styles.text}>
          {'\n'}Gradually, as the countryside became more peaceful and
          landowners became richer, the houses of the wealthy became more
          elaborate and great country houses such as Hardwick Hall in Derbyshire
          were built. British styles of architecture began to evolve.
          {'\n'}
          {'\n'}
          In the 17th century, Inigo Jones took inspiration from classical
          architecture to design the Queen's House at Greenwich and the
          Banqueting House in Whitehall in London. Later in the century, Sir
          Christopher Wren helped develop a British version of the ornate styles
          popular in Europe in buildings such as the new St Paul's Cathedral.
          {'\n'}
          {'\n'}
          In the 18th century, simpler designs became popular. The Scottish
          architect Robert Adam influenced the development of architecture in
          the UK, Europe and America. He designed the inside decoration as well
          as the building itself in great houses such as Dumfries House in
          Scotland. His ideas influenced architects in cities such as Bath,
          where the Royal Crescent was built.
          {'\n'}
          {'\n'}
          In the 19th century, the medieval 'gothic' style became popular again.
          As cities expanded, many great public buildings were built in this
          style. The Houses of Parliament and St Pancras Station were built at
          this time, as were the town halls in cities such as Manchester and
          Sheffield.
          {'\n'}
        </Text>
        <ImageCard img={'cenotaph'} text={'Cenotaph in London, Whitehall'} />
        <Text style={styles.text}>
          {'\n'}In the 20th century, Sir Edwin Lutyens had an influence
          throughout the British Empire. He designed New Delhi to be the seat of
          government in India. After the First World War, he was responsible for
          many war memorials throughout the world, including the Cenotaph in
          Whitehall. The Cenotaph is the site of the annual Remembrance Day
          service attended by the Queen, politicians and foreign ambassadors.
          {'\n'}
          {'\n'}
          Modern British architects including Sir Norman Foster, Lord (Richard)
          Rogers and Dame Zaha Hadid continue to work on major projects
          throughout the world as well as within the UK.
          {'\n'}
          {'\n'}
          Alongside the development of architecture, garden design and
          landscaping have played an important role in the UK. In the 18th
          century, Lancelot 'Capability' Brown designed the grounds around
          country houses so that the landscape appeared to be natural, with
          grass, trees and lakes. He often said that a place had 'capabilities'.
          Later, Gertrude Jekyll often worked with Edwin Lutyens to design
          colourful gardens around the houses he designed. Gardens continue to
          be an important part of homes in the UK. The annual Chelsea Flower
          Show showcases garden design from Britain and around the world.
          {'\n'}
        </Text>

        <Text style={styles.title}>Fashion and design</Text>
        <Text style={styles.text}>
          {'\n'}
          Britain has produced many great designers, from Thomas Chippendale
          (who designed furniture in the 18th century) to Clarice Cliff (who
          designed Art Deco ceramics) to Sir Terence Conran (a 20th-century
          interior designer). Leading fashion designers of recent years include
          Mary Quant, Alexander McQueen and Vivienne Westwood.
          {'\n'}
        </Text>

        <Text style={styles.title}>Literature</Text>
        <Text style={styles.text}>
          {'\n'}
          The UK has a prestigious literary history and tradition. Several
          British writers, including the novelist Sir William Golding, the poet
          Seamus Heaney, and the playwright Harold Pinter, have won the Nobel
          Prize in Literature. Other authors have become well known in popular
          fiction. Agatha Christie's detective stories are read all over the
          world and Ian Fleming's books introduced James Bond. In 2003, The Lord
          of the Rings by JRR Tolkien was voted the country's best-loved novel.
          {'\n'}
          {'\n'}
          The Man Booker Prize for Fiction is awarded annually for the best
          fiction novel written by an author from the Commonwealth, Ireland or
          Zimbabwe. It has been awarded since 1968. Past winners include Ian
          McEwan, Hilary Mantel and Julian Barnes.
          {'\n'}
        </Text>

        <Text style={styles.subtitle}>Notable authors and writers</Text>
        <PinkCard
          bold={'Jane Austen (1775 - 1817) '}
          text={
            'was an English novelist. Her books include Pride and Prejudice and Sense and Sensibility. Her novels are concerned with marriage and family relationships. Many have been made into television programmes or films.'
          }
        />
        <PinkCard
          bold={'Charles Dickens (1812 - 70) '}
          text={
            'wrote a number of very famous novels, including Oliver Twist and Great Expectations. You will hear references in everyday talk to some of the characters in his books, such as Scrooge (a mean person) or Mr Micawber (always hopeful).'
          }
        />
        <PinkCard
          bold={'Robert Louis Stevenson (1850 - 94) '}
          text={
            'wrote books which are still read by adults and children today. His most famous books include Treasure Island, Kidnapped and Dr Jekyll and Mr Hyde.'
          }
        />
        <PinkCard
          bold={'Thomas Hardy (1840 - 1928) '}
          text={
            'was an author and poet. His best-known novels focus on rural society and include Far from the Madding Crowd and Jude the Obscure.'
          }
        />
        <PinkCard
          bold={'Sir Arthur Conan Doyle (1859 - 1930) '}
          text={
            'was a Scottish doctor and writer. He was best known for his stories about Sherlock Holmes, who was one of the first fictional detectives.'
          }
        />
        <PinkCard
          bold={'Evelyn Waugh (1903 - 66) '}
          text={
            'wrote satirical novels, including Decline and Fall and Scoop. He is perhaps best known for Brideshead Revisited.'
          }
        />
        <PinkCard
          bold={'Sir Kingsley Amis (1922 - 95) '}
          text={
            'was an English novelist and poet. He wrote more than 20 novels. The most well-known is Lucky Jim.'
          }
        />
        <PinkCard
          bold={'Graham Greene (1904 - 91) '}
          text={
            'wrote novels often influenced by his religious beliefs, including The Heart of the Matter, The Honorary Consul, Brighton Rock and Our Man in Havana.'
          }
        />
        <PinkCard
          bold={'J K Rowling (1965 - ) '}
          text={
            "wrote the Harry Potter series of children's books, which have enjoyed huge international success. She now writes fiction for adults as well."
          }
        />

        <Text style={styles.title}>{'\n'}British poets</Text>
        <Text style={styles.text}>
          {'\n'}
          British poetry is among the richest in the world. The Anglo-Saxon poem
          Beowulf tells of its hero's battles against monsters and is still
          translated into modern English. Poems which survive from the Middle
          Ages include Chaucer's Canterbury Tales and a poem called Sir Gawain
          and the Green Knight, about one of the knights at the court of King
          Arthur.
          {'\n'}
          {'\n'}
          As well as plays, Shakespeare wrote many sonnets (poems which must be
          14 lines long) and some longer poems. As Protestant ideas spread, a
          number of poets wrote poems inspired by their religious views. One of
          these was John Milton, who wrote Paradise Lost.
          {'\n'}
          {'\n'}
          Other poets, including William Wordsworth, were inspired by nature.
          Sir Walter Scott wrote poems inspired by Scotland and the traditional
          stories and songs from the area on the borders of Scotland and
          England. He also wrote novels, many of which were set in Scotland.
          {'\n'}
          {'\n'}
          Poetry was very popular in the 19th century, with poets such as
          William Blake, John Keats, Lord Byron, Percy Shelley, Alfred Lord
          Tennyson, and Robert and Elizabeth Browning. Later, many poets - for
          example, Wilfred Owen and Siegfried Sassoon - were inspired to write
          about their experiences in the First World War. More recently, popular
          poets have included Sir Walter de la Mare, John Masefield, Sir John
          Betjeman and Ted Hughes. Some of the best-known poets are buried or
          commemorated in Poet's Corner in Westminster Abbey.
          {'\n'}
          {'\n'}
          Some famous lines include:
        </Text>
        <GreyCard
          text={
            "'Oh to be in England\nNow that April's there,\nAnd whoever wakes in England\nSees, some morning, unaware,\nThat the lowest boughs and the brushwood sheaf\nRound the elm-tree bole are in tiny leaf,\nWhile the chaffinch sings on the orchard bough\nIn England  -  Now!'\n\n(Robert Browning, 1812 - 89  -  Home Thoughts from Abroad)"
          }
        />
        <GreyCard
          text={
            "'She walks in beauty, like the night\nOf cloudless climes and starry skies,\nAll that's best of dark and bright\nMeet in her aspect and her eyes'\n\n(Lord Byron, 1788 - 1824  -  She Walks in Beauty)"
          }
        />
        <GreyCard
          text={
            "'I wander'd lonely as a cloud\nThat floats on high o'er vales and hills\nWhen all at once I saw a crowd,\nA host of golden daffodils'\n\n(William Wordsworth, 1770 - 1850  -  The Daffodils)"
          }
        />
        <GreyCard
          text={
            "'Tyger! Tyger! Burning bright\nIn the forests of the night,\nWhat immortal hand or eye\nCould frame thy fearful symmetry?'\n\n(William Blake, 1757 - 1827  -  The Tyger)"
          }
        />
        <GreyCard
          text={
            "'What passing-bells for these who die as cattle?\nOnly the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.'\n\n(Wilfred Owen, 1893 - 1918  -  Anthem for Doomed Youth)"
          }
        />

        <GreenCard
          list={[
            'Which sports are particularly popular in the UK',
            'Some of the major sporting events that take place each year',
            'Some of the major arts and culture events that happen in the UK',
            'How achievements in arts and culture are formally recognised',
            'Important figures in British literature',
          ]}
        />
      </View>
    );
  }
}
