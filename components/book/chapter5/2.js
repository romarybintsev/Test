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

export default class Chapter5Part2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The development of British democracy</Text>
        <Text style={styles.text}>
          {'\n'}
          Democracy is a system of government where the whole adult population
          gets a say. This might be by direct voting or by choosing
          representatives to make decisions on their behalf.
          {'\n'}
          {'\n'}
          At the turn of the 19th century, Britain was not a democracy as we
          know it today. Although there were elections to select members of
          Parliament (MPs), only a small group of people could vote. They were
          men who were over 21 years of age and who owned a certain amount of
          property.
          {'\n'}
          {'\n'}
          The franchise (that is, the number of people who had the right to
          vote) grew over the course of the 19th century and political parties
          began to involve ordinary men and women as members.
          {'\n'}
          {'\n'}
          In the 1830s and 1840s, a group called the Chartists campaigned for
          reform. They wanted six changes:
          {'\n'}
        </Text>
        {points([
          'for every man to have the vote',
          'elections every year',
          'for all regions to be equal in the electoral system',
          'secret ballots',
          'for any man to be able to stand as an MP',
          'for MPs to be paid',
        ])}
        <Text style={styles.text}>
          {' '}
          {'\n'}
          At the time, the campaign was generally seen as a failure. However, by
          1918 most of these reforms had been adopted. The voting franchise was
          also extended to women over 30, and then in 1928 to men and women over
          21. In 1969, the voting age was reduced to 18 for men and women.
          {'\n'}
        </Text>
        <Text style={styles.title}>The British constitution</Text>
        <Text style={styles.text}>
          {'\n'}A constitution is a set of principles by which a country is
          governed. It includes all of the institutions that are responsible for
          running the country and how their power is kept in check. The
          constitution also includes laws and conventions. The British
          constitution is not written down in any single document, and therefore
          it is described as 'unwritten'. This is mainly because the UK,
          unlike America or France, has never had a revolution which led
          permanently to a totally new system of government. Our most important
          institutions have developed over hundreds of years. Some people
          believe that there should be a single document, but others believe an
          unwritten constitution allows for more flexibility and better
          government.
          {'\n'}
        </Text>
        <Text style={styles.title}>Constitutional institutions</Text>
        <Text style={styles.text}>
          {'\n'}In the UK, there are several different parts of government. The
          main ones are:{'\n'}
        </Text>
        {points([
          'the monarchy',
          'Parliament (the House of Commons and the House of Lords)',
          'the Prime Minister',
          'the cabinet',
          'the judiciary (courts)',
          'the police',
          'the civil service',
          'local government',
        ])}
        <Text style={styles.text}>
          {'\n'}In addition, there are devolved governments in Scotland, Wales
          and Northern Ireland that have the power to legislate on certain
          issues.{'\n'}
        </Text>
        <Text style={styles.title}>The monarchy {'\n'}</Text>
        <ImageCard img={'QueenElizabethII'} text={'Queen Elizabeth II'} />
        <Text style={styles.text}>
          {'\n'}Queen Elizabeth II is the head of state of the UK. She is also
          the monarch or head of state for many countries in the Commonwealth.
          The UK has a constitutional monarchy. This means that the king or
          queen does not rule the country but appoints the government, which the
          people have chosen in a democratic election. The monarch invites the
          leader of the party with the largest number of MPs, or the leader of a
          coalition between more than one party, to become the Prime Minister.
          The monarch has regular meetings with the Prime Minister and can
          advise, warn and encourage, but the decisions on government policies
          are made by the Prime Minister and cabinet.
          {'\n'}
          {'\n'}
          The Queen has reigned since her father's death in 1952, and in 2012
          she celebrated her Diamond Jubilee (60 years as queen). She is married
          to Prince Philip, the Duke of Edinburgh. Her eldest son, Prince
          Charles (the Prince of Wales), is the heir to the throne.
          {'\n'}
          {'\n'}
          The Queen has important ceremonial roles, such as the opening of the
          new parliamentary session each year. On this occasion the Queen makes
          a speech which summarises the government's policies for the year
          ahead. All Acts of Parliament are made in her name.
          {'\n'}
          {'\n'}
          The Queen represents the UK to the rest of the world. She receives
          foreign ambassadors and high commissioners, entertains visiting heads
          of state, and makes state visits overseas in support of diplomatic and
          economic relationships with other countries.
          {'\n'}
          {'\n'}
          The Queen has an important role in providing stability and continuity.
          While governments and Prime Ministers change regularly, the Queen
          continues as head of state. She provides a focus for national identity
          and pride, which was demonstrated through the celebrations of her
          Jubilee.{'\n'}{' '}
        </Text>
        <Text style={styles.title}>The national anthem</Text>
        <Text style={styles.text}>
          {'\n'}The National Anthem of the UK is 'God Save the Queen'. It is
          played at important national occasions and at events attended by the
          Queen or the Royal Family. The first verse is:{'\n'}{' '}
        </Text>
        <GreyCard
          text={
            "'God save our gracious Queen!\nLong live our noble Queen!\nGod save the Queen!\nSend her victorious,\nHappy and glorious,\nLong to reign over us,\nGod save the Queen!'"
          }
        />
        <Text style={styles.text}>
          {'\n'}New citizens swear or affirm loyalty to the Queen as part of the
          citizenship ceremony.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Oath of allegiance</Text>
        <GreyCard
          text={
            "'I (name) swear by Almighty God that on becoming a British citizen, I will be faithful and bear true allegiance to Her Majesty Queen Elizabeth the Second, her Heirs and Successors, according to law.'"
          }
        />
        <Text style={styles.subtitle}>{'\n'}Affirmation of allegiance</Text>
        <GreyCard
          text={
            "'I (name) do solemnly, sincerely and truly declare and affirm that on becoming a British citizen, I will be faithful and bear true allegiance to Her Majesty Queen Elizabeth the Second, her Heirs and Successors, according to law.'"
          }
        />
        <Text style={styles.title}> {'\n'}System of government</Text>
        <Text style={styles.text}>
          {'\n'}The system of government in the UK is a parliamentary democracy.
          The UK is divided into parliamentary constituencies. Voters in each
          constituency elect their member of Parliament (MP) in a General
          Election. All of the elected MPs form the House of Commons. Most MPs
          belong to a political party, and the party with the majority of MPs
          forms the government. If one party does not get a majority, two
          parties can join together to form a coalition.{'\n'}{' '}
        </Text>
        <Text style={styles.title}>The House of Commons {'\n'}</Text>
        <ImageCard
          img={'houseofcommons'}
          text={'Parliamentary debates in the House of Commons'}
        />
        <Text style={styles.text}>
          {'\n'}The House of Commons is regarded as the more important of the
          two chambers in Parliament because its members are democratically
          elected. The Prime Minister and almost all the members of the cabinet
          are members of the House of Commons (MPs). Each MP represents a
          parliamentary constituency, which is a small area of the country. MPs
          have a number of different responsibilities. They:{'\n'}{' '}
        </Text>
        {points([
          'represent everyone in their constituency',
          'help to create new laws',
          'scrutinise and comment on what the government is doing',
          'debate important national issues.',
        ])}
        <Text style={styles.title}>
          {'\n'}The House of Lords {'\n'}
        </Text>
        <ImageCard img={'houseoflords'} text={'The House of Lords'} />
        <Text style={styles.text}>
          {'\n'}Members of the House of Lords, known as peers, are not elected
          by the people and do not represent a constituency. The role and
          membership of the House of Lords has changed over the last 50 years.
          {'\n'}
          {'\n'}
          Until 1958, all peers were:{'\n'}{' '}
        </Text>
        {points([
          "'hereditary', which means they inherited their title, or",
          'senior judges, or',
          'bishops of the Church of England.',
        ])}
        <Text style={styles.text}>
          {'\n'}Since 1958, the Prime Minister has had the power to nominate
          peers just for their own lifetime. These are called life peers. They
          have usually had an important career in politics, business, law or
          another profession. Life peers are appointed by the monarch on the
          advice of the Prime Minister. They also include people nominated by
          the leaders of the other main political parties or by an independent
          Appointments Commission for non-party peers.
          {'\n'}
          {'\n'}
          Since 1999, hereditary peers have lost the automatic right to attend
          the House of Lords. They now elect a few of their number to represent
          them in the House of Lords.
          {'\n'}
          {'\n'}
          The House of Lords is normally more independent of the government than
          the House of Commons. It can suggest amendments or propose new laws,
          which are then discussed by MPs. The House of Lords checks laws that
          have been passed by the House of Commons to ensure they are fit for
          purpose. It also holds the government to account to make sure that it
          is working in the best interests of the people. There are peers who
          are specialists in particular areas, and their knowledge is useful in
          making and checking laws. The House of Commons has powers to overrule
          the House of Lords, but these are not used often.
        </Text>
        <Text style={styles.title}>The Speaker</Text>
        <Text style={styles.text}>
          {'\n'}Debates in the House of Commons are chaired by the Speaker. This
          person is the chief Officer of the House of Commons. The Speaker is
          neutral and does not represent a political party, even though he or
          she is an MP, represents a constituency and deals with constituents'
          problems like any other MP. The Speaker is chosen by other MPs in a
          secret ballot.
          {'\n'}
          {'\n'}
          The Speaker keeps order during political debates to make sure the
          rules are followed. This includes making sure the opposition has a
          guaranteed amount of time to debate issues which it chooses. The
          Speaker also represents Parliament on ceremonial occasions.{'\n'}
        </Text>
        <Text style={styles.title}>Elections</Text>
        <Text style={styles.subtitle}> {'\n'}UK elections</Text>
        <Text style={styles.text}>
          {'\n'}MPs are elected at a General Election, which is held at least
          every five years.
          {'\n'}
          {'\n'}
          If an MP dies or resigns, there will be a fresh election, called a
          byelection, in his or her constituency.
          {'\n'}
          {'\n'}
          MPs are elected through a system called 'first past the post'. In
          each constituency, the candidate who gets the most votes is elected.
          The government is usually formed by the party that wins the majority
          of constituencies. If no party wins a majority, two parties may join
          together to form a coalition.{'\n'}
        </Text>
        <Text style={styles.subtitle}>European parliamentary elections</Text>
        <Text style={styles.text}>
          {'\n'}Elections for the European Parliament are also held every five
          years. Elected members are called members of the European Parliament
          (MEPs). Elections to the European Parliament use a system of
          proportional representation, where seats are allocated to each party
          in proportion to the total number of votes it has won.{'\n'}
        </Text>
        <Text style={styles.title}>Contacting elected members</Text>
        <Text style={styles.text}>
          {'\n'}All elected members have a duty to serve and represent their
          constituents. You can get contact details for all your representatives
          and their parties from your local library and from www.parliament.uk.
          MPs, Assembly members, members of the Scottish Parliament (MSPs) and
          MEPs are also listed in The Phone Book, published by BT, and inYellow
          Pages.
          {'\n'}
          {'\n'}
          You can contact MPs by letter or telephone at their constituency
          Office, or at their Office in the House of Commons: The House of
          Commons, Westminster, London SW1A 0AA, telephone 020 7729 3000. In
          addition, many MPs, Assembly members, MSPs and MEPs hold regular local
          'surgeries', where constituents can go in person to talk about
          issues that are of concern to them. These surgeries are often
          advertised in the local newspaper.{'\n'}
        </Text>
        <GreenCard
          list={[
            'How democracy has developed in the UK',
            "What a constitution is and how the UK's constitution is different from those of most other countries",
            'The role of the monarch',
            'The role of the House of Commons and House of Lords',
            'What the Speaker does',
            'How the UK elects MPs and MEPs',
          ]}
        />
      </View>
    );
  }
}
