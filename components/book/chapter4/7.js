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

export default class Chapter4Part7 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Leisure</Text>
        <Text style={styles.text}>
          {"\n"}People in the UK spend their leisure time in many different
          ways.{"\n"}
        </Text>
        <Text style={styles.title}>Gardening</Text>
        <Text style={styles.text}>
          {"\n"}A lot of people have gardens at home and will spend their free
          time looking after them. Some people rent additional land called 'an
          allotment', where they grow fruit and vegetables. Gardening and
          flower shows range from major national exhibitions to small local
          events. Many towns have garden centres selling plants and gardening
          equipment. There are famous gardens to visit throughout the UK,
          including Kew Gardens, Sissinghurst and Hidcote in England, Crathes
          Castle and Inveraray Castle in Scotland, Bodnant Garden in Wales, and
          Mount Stewart in Northern Ireland.{"\n"}
        </Text>
        <ImageCard img={"kewgardens"} text={"Kew gardens"} />
        <Text style={styles.text}>
          {"\n"}
          The countries that make up the UK all have flowers which are
          particularly associated with them and which are sometimes worn on
          national saints' days.
          {"\n"}{" "}
        </Text>
        <Text style={styles.title}>Shopping</Text>
        <Text style={styles.text}>
          {"\n"}
          There are many different places to go shopping in the UK. Most towns
          and cities have a central shopping area, which is called the town
          centre. Undercover shopping centres are also common - these might be
          in town centres or on the outskirts of a town or city. Most shops in
          the UK are open seven days a week, although trading hours on Sundays
          and public holidays are generally reduced. Many towns also have
          markets on one or more days a week, where stallholders sell a variety
          of goods.
          {"\n"}{" "}
        </Text>
        <Text style={styles.title}>Cooking and food</Text>
        <Text style={styles.text}>
          {"\n"}
          Many people in the UK enjoy cooking. They often invite each other to
          their homes for dinner. A wide variety of food is eaten in the UK
          because of the country's rich cultural heritage and diverse
          population.{"\n"}{" "}
        </Text>
        <Text style={styles.subtitle}>Traditional foods</Text>
        <Text style={styles.text}>
          {"\n"}
          There are a variety of foods that are traditionally associated with
          different parts of the UK:
        </Text>
        <PinkCard
          bold={"England: "}
          text={
            'Roast beef, which is served with potatoes, vegetables, Yorkshire puddings (batter that is baked in the oven) and other accompaniments. Fish and chips are also popular.'
          }
        />
        <PinkCard
          bold={"Wales: "}
          text={
            'Welsh cakes - a traditional Welsh snack made from flour, dried fruits and spices, and served either hot or cold.'
          }
        />
        <PinkCard
          bold={"Scotland: "}
          text={
            "Haggis - a sheep's stomach stuffed with offal, suet, onions and oatmeal."
          }
        />
        <PinkCard
          bold={"Northern Ireland: "}
          text={
            'Ulster fry - a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread.'
          }
        />

        <Text style={styles.title}>
          {"\n"}Films{"\n"}
        </Text>
        <Text style={styles.subtitle}>British film industry</Text>

        <Text style={styles.text}>
          {"\n"}The UK has had a major influence on modern cinema.{"\n"}
        </Text>
        <ImageCard
          img={"charliechaplin"}
          text={"Charlie Chaplin, famous for playing a tramp character"}
        />
        <Text style={styles.text}>
          {"\n"}Films were first shown publicly in the UK in 1896 and film
          screenings very quickly became popular. From the beginning, film
          makers became famous for clever special effects and this continues to
          be an area of British expertise. From the early days of the cinema,
          British actors have worked in both the UK and USA. Sir Charles
          (Charlie) Chaplin became famous in silent movies for his tramp
          character and was one of many British actors to make a career in
          Hollywood.
          {"\n"}
          {"\n"}
          British studios flourished in the 1930s. Eminent directors included
          Sir Alexander Korda and Sir Alfred Hitchcock, who later left for
          Hollywood and remained an important film director until his death in
          1980. During the Second World War, British movies (for example, In
          Which We Serve) played an important part in boosting morale. Later,
          British directors including Sir David Lean and Ridley Scott found
          great success both in the UK and internationally.
          {"\n"}
          {"\n"}
          The 1950s and 1960s were a high point for British comedies, including
          Passport to Pimlico, The Ladykillers and, later, the Carry On films.
          {"\n"}
          {"\n"}
          Many of the films now produced in the UK are made by foreign
          companies, using British expertise. Some of the most commercially
          successful films of all time, including the two highest-grossing film
          franchises (Harry Potter and James Bond), have been produced in the
          UK. Ealing Studios has a claim to being the oldest continuously
          working film studio facility in the world. Britain continues to be
          particularly strong in special effects and animation. One example is
          the work of Nick Park, who has won four Oscars for his animated films,
          including three for films featuring Wallace and Gromit.
          {"\n"}
          {"\n"}
          Actors such as Sir Lawrence Olivier, David Niven, Sir Rex Harrison and
          Richard Burton starred in a wide variety of popular films. British
          actors continue to be popular and continue to win awards throughout
          the world. Recent British actors to have won Oscars include Colin
          Firth, Sir Anthony Hopkins, Dame Judi Dench, Kate Winslet and Tilda
          Swinton.
          {"\n"}
          {"\n"}
          The annual British Academy Film Awards, hosted by the British Academy
          of Film and Television Arts (BAFTA), are the British equivalent of the
          Oscars.
          {"\n"}{" "}
        </Text>
        <Text style={styles.subtitle}>Some famous British films</Text>
        <PinkCard text={"The 39 Steps (1935), directed by Alfred Hitchcock"} />
        <PinkCard text={"Brief Encounter (1945), directed by David Lean"} />
        <PinkCard text={"The Third Man (1949), directed by Carol Reed"} />
        <PinkCard
          text={
            "The Belles of St Trinian's (1954), directed by Frank Launder"
          }
        />
        <PinkCard text={"Lawrence of Arabia (1962), directed by David Lean"} />
        <PinkCard text={"Women in Love (1969), directed by Ken Russell"} />
        <PinkCard text={"Don't Look Now (1973), directed by Nicolas Roeg"} />
        <PinkCard text={"Chariots of Fire (1981), directed by Hugh Hudson"} />
        <PinkCard
          text={"The Killing Fields (1984), directed by Roland JoffÃ©"}
        />
        <PinkCard
          text={"Four Weddings and a Funeral (1994), directed by Mike Newell"}
        />
        <PinkCard
          text={"Touching the Void (2003), directed by Kevin MacDonald"}
        />
        <Text style={styles.title}>{"\n"}British comedy</Text>
        <Text style={styles.text}>
          {"\n"}The traditions of comedy and satire, and the ability to laugh at
          ourselves, are an important part of the UK character. Medieval kings
          and rich nobles had jesters who told jokes and made fun of people in
          the Court. Later, Shakespeare included comic characters in his plays.
          In the 18th century, political cartoons attacking prominent
          politicians - and, sometimes, the monarch or other members of the
          Royal Family - became increasingly popular. In the 19th century,
          satirical magazines began to be published. The most famous was Punch,
          which was published for the first time in the 1840s. Today, political
          cartoons continue to be published in newspapers, and magazines such
          asPrivate Eye continue the tradition of satire.
          {"\n"} {"\n"}
          Comedians were a popular feature of British music hall, a form of
          variety theatre which was very common until television became the
          leading form of entertainment in the UK. Some of the people who had
          performed in the music halls in the 1940s and 1950s, such as Morecambe
          and Wise, became stars of television.
          {"\n"} {"\n"}
          Television comedy developed its own style. Situation comedies, or
          sitcoms, which often look at family life and relationships in the
          workplace, remain popular. Satire has also continued to be important,
          with shows like That Was The Week That Was in the 1960s and Spitting
          Image in the 1980s and 1990s. In 1969, Monty Python's Flying Circus
          introduced a new type of progressive comedy. Stand-up comedy, where a
          solo comedian talks to a live audience, has become popular again in
          recent years.{"\n"}{" "}
        </Text>
        <Text style={styles.title}>Television and radio</Text>
        <Text style={styles.text}>
          {"\n"}Many different television (TV) channels are available in the UK.
          Some are free to watch and others require a paid subscription. British
          television shows a wide variety of programmes. Popular programmes
          include regular soap operas such as Coronation Street and EastEnders.
          In Scotland, some Scotland-specific programmes are shown and there is
          also a channel with programmes in the Gaelic language. There is a
          Welsh-language channel in Wales. There are also programmes specific to
          Northern Ireland and some programmes broadcast in Irish Gaelic.
          {"\n"}
          {"\n"}
          Everyone in the UK with a TV, computer or other medium which can be
          used for watching TV must have a television licence. One licence
          covers all of the equipment in one home, except when people rent
          different rooms in a shared house and each has a separate tenancy
          agreement - those people must each buy a separate licence. People
          over 75 can apply for a free TV licence and blind people can get a 50%
          discount. You will receive a fine of up to £1,000 if you watch TV but
          do not have a TV licence.
          {"\n"}
          {"\n"}
          The money from TV licences is used to pay for the British Broadcasting
          Corporation (BBC). This is a British public service broadcaster
          providing television and radio programmes. The BBC is the largest
          broadcaster in the world. It is the only wholly state-funded media
          organisation that is independent of government. Other UK channels are
          primarily funded through advertisements and subscriptions.
          {"\n"}
          {"\n"}
          There are also many different radio stations in the UK. Some broadcast
          nationally and others in certain cities or regions. There are radio
          stations that play certain types of music and some broadcast in
          regional languages such as Welsh or Gaelic. Like television, BBC radio
          stations are funded by TV licences and other radio stations are funded
          through advertisements.
          {"\n"}
        </Text>
        <Text style={styles.title}>Social networking</Text>
        <Text style={styles.text}>
          {"\n"}Social networking websites such as Facebook and Twitter are a
          popular way for people to stay in touch with friends, organise social
          events, and share photos, videos and opinions. Many people use social
          networking on their mobile phones when out and about.
          {"\n"}
        </Text>
        <Text style={styles.title}>Pubs and night clubs</Text>
        <Text style={styles.text}>
          {"\n"}
          Public houses (pubs) are an important part of the UK social culture.
          Many people enjoy meeting friends in the pub. Most communities will
          have a 'local' pub that is a natural focal point for social
          activities. Pub quizzes are popular. Pool and darts are traditional
          pub games. To buy alcohol in a pub or night club you must be 18 or
          over, but people under that age may be allowed in some pubs with an
          adult. When they are 16, people can drink wine or beer with a meal in
          a hotel or restaurant (including eating areas in pubs) as long as they
          are with someone over 18.
          {"\n"} {"\n"}
          Pubs are usually open during the day from 11.00 am (12 noon on
          Sundays). Night clubs with dancing and music usually open and close
          later than pubs. The licensee decides the hours that the pub or night
          club is open.{"\n"}
        </Text>
        <Text style={styles.title}>Betting and gambling</Text>
        <Text style={styles.text}>
          {"\n"}In the UK, people often enjoy a gamble on sports or other
          events. There are also casinos in many places. You have to be 18 to go
          into betting shops or gambling clubs. There is a National Lottery for
          which draws are made every week. You can enter by buying a ticket or a
          scratch card. People under 16 are not allowed to participate in the
          National Lottery.{"\n"}
        </Text>
        <Text style={styles.title}>Pets</Text>
        <Text style={styles.text}>
          {"\n"}A lot of people in the UK have pets such as cats or dogs. They
          might have them for company or because they enjoy looking after them.
          It is against the law to treat a pet cruelly or to neglect it. All
          dogs in public places must wear a collar showing the name and address
          of the owner. The owner is responsible for keeping the dog under
          control and for cleaning up after the animal in a public place.
          {"\n"}
          {"\n"}
          Vaccinations and medical treatment for animals are available from
          veterinary surgeons (vets). There are charities which may help people
          who cannot afford to pay a vet.{"\n"}
        </Text>
      </View>
    );
  }
}
