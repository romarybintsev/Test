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

export default class Chapter5Part3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The Prime Minister</Text>
        <Text style={styles.text}>
          {'\n'}
          The Prime Minister (PM) is the leader of the political party in power.
          He or she appoints the members of the cabinet and has control over
          many important public appointments. The official home of the Prime
          Minister is 10 Downing Street, in central London, near the Houses of
          Parliament. He or she also has a country house outside London called
          Chequers.
          {'\n'}
          {'\n'}
          The Prime Minister can be changed if the MPs in the governing party
          decide to do so, or if he or she wishes to resign. The Prime Minister
          usually resigns if his or her party loses a General Election.
          {'\n'}
        </Text>
        <Text style={styles.title}>The cabinet</Text>
        <Text style={styles.text}>
          {'\n'}
          The Prime Minister appoints about 20 senior MPs to become ministers in
          charge of departments. These include: {'\n'}
        </Text>
        {points([
          'Chancellor of the Exchequer - responsible for the economy',
          'Home Secretary - responsible for crime, policing and immigration',
          'Foreign Secretary - responsible for managing relationships with foreign countries',
          "other ministers (called 'Secretaries of State') responsible for subjects such as education, health and defence.",
        ])}
        <Text style={styles.text}>
          {' '}
          {'\n'}
          These ministers form the cabinet, a committee which usually meets
          weekly and makes important decisions about government policy. Many of
          these decisions have to be debated or approved by Parliament.
          {'\n'}
          {'\n'}
          Each department also has a number of other ministers, called Ministers
          of State and Parliamentary Under-Secretaries of State, who take charge
          of particular areas of the department's work.
          {'\n'}
        </Text>
        <Text style={styles.title}>The opposition</Text>
        <Text style={styles.text}>
          {'\n'}The second-largest party in the House of Commons is called the
          opposition. The leader of the opposition usually becomes Prime
          Minister if his or her party wins the next General Election.
          {'\n'}
          {'\n'}
          The leader of the opposition leads his or her party in pointing out
          what they see as the government's failures and weaknesses. One
          important opportunity to do this is at Prime Minister's Questions,
          which takes place every week while Parliament is sitting. The leader
          of the opposition also appoints senior opposition MPs to be 'shadow
          ministers'. They form the shadow cabinet and their role is to
          challenge the government and put forward alternative policies.
          {'\n'}
        </Text>
        <Text style={styles.title}>The party system</Text>
        <Text style={styles.text}>
          {'\n'}Anyone aged 18 or over can stand for election as an MP but they
          are unlikely to win unless they have been nominated to represent one
          of the major political parties. These are the Conservative Party, the
          Labour Party, the Liberal Democrats, or one of the parties
          representing Scottish, Welsh or Northern Irish interests.
          {'\n'}
          {'\n'}
          There are a few MPs who do not represent any of the main political
          parties. They are called 'independents' and usually represent an
          issue important to their constituency.
          {'\n'}
          {'\n'}
          The main political parties actively look for members of the public to
          join their debates, contribute to their costs, and help at elections
          for Parliament or for local government. They have branches in most
          constituencies and hold policy-making conferences every year.
          {'\n'}
          {'\n'}
          Pressure and lobby groups are organisations which try to influence
          government policy. They play an important role in politics. Some are
          representative organisations such as the CBI (Confederation of British
          Industry), which represents the views of British business. Others
          campaign on particular topics, such as the environment (for example,
          Greenpeace) or human rights (for example, Liberty).{'\n'}
        </Text>
        <Text style={styles.title}>The civil service</Text>
        <Text style={styles.text}>
          {'\n'}Civil servants support the government in developing and
          implementing its policies. They also deliver public services. Civil
          servants are accountable to ministers. They are chosen on merit and
          are politically neutral - they are not political appointees. People
          can apply to join the civil service through an application process,
          like other jobs in the UK. Civil servants are expected to carry out
          their role with dedication and a commitment to the civil service and
          its core values. These are: integrity, honesty, objectivity and
          impartiality (including being politically neutral). {'\n'}
        </Text>
        <Text style={styles.title}>Local government</Text>
        <Text style={styles.text}>
          {'\n'}Towns, cities and rural areas in the UK are governed by
          democratically elected councils, often called 'local authorities'.
          Some areas have both district and county councils, which have
          different functions. Most large towns and cities have a single local
          authority.
          {'\n'}
          {'\n'}
          Local authorities provide a range of services in their areas. They are
          funded by money from central government and by local taxes.
          {'\n'}
          {'\n'}
          Many local authorities appoint a mayor, who is the ceremonial leader
          of the council. In some towns, a mayor is elected to be the effective
          leader of the administration. London has 33 local authorities, with
          the Greater London Authority and the Mayor of London coordinating
          policies across the capital. For most local authorities, local
          elections for councillors are held in May every year. Many candidates
          stand for council election as members of a political party.{'\n'}
        </Text>
        <Text style={styles.title}>Devolved administrations</Text>
        <Text style={styles.text}>
          {'\n'}Since 1997, some powers have been devolved from the central
          government to give people in Wales, Scotland and Northern Ireland more
          control over matters that directly affect them. There has been a Welsh
          Assembly and a Scottish Parliament since 1999. There is also a
          Northern Ireland Assembly, although this has been suspended on a few
          occasions.
          {'\n'}
          {'\n'}
          Policy and laws governing defence, foreign affairs, immigration,
          taxation and social security all remain under central UK government
          control. However, many other public services, such as education, are
          controlled by the devolved administrations.
          {'\n'}
          {'\n'}
          The devolved administrations each have their own civil service.{'\n'}
        </Text>
        <Text style={styles.subtitle}>The Welsh government</Text>
        <Text style={styles.text}>
          {'\n'}The Welsh government and National Assembly for Wales are based
          in Cardiff, the capital city of Wales. The National Assembly has 60
          Assembly members (AMs) and elections are held every four years using a
          form of proportional representation. Members can speak in either Welsh
          or English and all of the Assembly's publications are in both
          languages.
          {'\n'}
          {'\n'}
          The Assembly has the power to make laws for Wales in 20 areas,
          including:{'\n'}
        </Text>
        {points([
          'education and training',
          'health and social services',
          'economic development',
          'housing.',
        ])}
        <Text style={styles.text}>
          {'\n'}Since 2011, the National Assembly for Wales has been able to
          pass laws on these topics without the agreement of the UK Parliament.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>The Scottish Parliament</Text>
        <Text style={styles.text}>
          {'\n'}The Scottish Parliament was formed in 1999. It sits in
          Edinburgh, the capital city of Scotland.
          {'\n'}
          {'\n'}
          There are 129 members of the Scottish Parliament (MSPs), elected by a
          form of proportional representation. The Scottish Parliament can pass
          laws for Scotland on all matters which are not specifically reserved
          to the UK Parliament. The matters on which the Scottish Parliament can
          legislate include:{'\n'}{' '}
        </Text>
        {points([
          'civil and criminal law',
          'health',
          'education',
          'planning',
          'additional tax-raising powers.',
        ])}
        <Text style={styles.subtitle}>{'\n'}The Northern Ireland Assembly</Text>
        <Text style={styles.text}>
          {'\n'}A Northern Ireland Parliament was established in 1922, when
          Ireland was divided, but it was abolished in 1972, shortly after the
          Troubles broke out in 1969.
          {'\n'}
          {'\n'}
          The Northern Ireland Assembly was established soon after the Belfast
          Agreement (or Good Friday Agreement) in 1998. There is a power-sharing
          agreement which distributes ministerial Offices amongst the main
          parties. The Assembly has 108 elected members, known as MLAs (members
          of the Legislative Assembly). They are elected with a form of
          proportional representation.
          {'\n'}
          {'\n'}
          The Northern Ireland Assembly can make decisions on issues such as:
          {'\n'}{' '}
        </Text>
        {points([
          'education',
          'agriculture',
          'the environment',
          'health',
          'social services.',
        ])}
        <Text style={styles.text}>
          {'\n'}
          The UK government has the power to suspend all devolved assemblies. It
          has used this power several times in Northern Ireland when local
          political leaders found it difficult to work together. However, the
          Assembly has been running successfully since 2007.
          {'\n'}
        </Text>
        <Text style={styles.title}>The media and government</Text>
        <Text style={styles.text}>
          {'\n'}
          Proceedings in Parliament are broadcast on television and published in
          official reports called Hansard. Written reports can be found in large
          libraries and at www.parliament.uk. Most people get information about
          political issues and events from newspapers (often called 'the
          press'), television, radio and the internet.
          {'\n'}
          {'\n'}
          The UK has a free press. This means that what is written in newspapers
          is free from government control. Some newspaper owners and editors
          hold strong political opinions and run campaigns to try to influence
          government policy and public opinion.
          {'\n'}
          {'\n'}
          By law, radio and television coverage of the political parties must be
          balanced and so equal time has to be given to rival viewpoints.
        </Text>
        <GreenCard
          list={[
            'The role of the Prime Minister, cabinet, opposition and shadow cabinet',
            'The role of political parties in the UK system of government',
            'Who the main political parties are',
            'What pressure and lobby groups do',
            'The role of the civil service',
            'The role of local government',
            'The powers of the devolved governments in Wales, Scotland and Northern Ireland',
            'How proceedings in Parliament are recorded',
            'The role of the media in keeping people informed about political issues',
          ]}
        />
        <Text style={styles.title}>{'\n'}Who can vote?</Text>
        <Text style={styles.text}>
          {'\n'}The UK has had a fully democratic voting system since 1928. The
          present voting age of 18 was set in 1969 and (with a few exceptions)
          all UK-born and naturalised adult citizens have the right to vote.
          {'\n'}
          {'\n'}
          Adult citizens of the UK, and citizens of the Commonwealth and the
          Irish Republic who are resident in the UK, can vote in all public
          elections. Adult citizens of other EU states who are resident in the
          UK can vote in all elections except General Elections.{'\n'}
        </Text>
        <Text style={styles.title}>The electoral register</Text>
        <Text style={styles.text}>
          {'\n'}To be able to vote in a parliamentary, local or European
          election, you must have your name on the electoral register.
          {'\n'}
          {'\n'}
          If you are eligible to vote, you can register by contacting your local
          council electoral registration Office. This is usually based at your
          local council (in Scotland it may be based elsewhere). If you don't
          know which local authority you come under, you can find out by
          visiting www.aboutmyvote.co.uk and entering your postcode. You can
          also download voter registration forms in English, Welsh and some
          other languages.
          {'\n'}
          {'\n'}
          The electoral register is updated every year in September or October.
          An electoral registration form is sent to every household and this has
          to be completed and returned with the names of everyone who is
          resident in the household and eligible to vote.
          {'\n'}
          {'\n'}
          In Northern Ireland a different system operates. This is called
          'individual registration' and all those entitled to vote must
          complete their own registration form. Once registered, people stay on
          the register provided their personal details do not change. For more
          information see the Electoral Office for Northern Ireland website at
          www.eoni.org.uk
          {'\n'}
          {'\n'}
          By law, each local authority has to make its electoral register
          available for anyone to look at, although this has to be supervised.
          The register is kept at each local electoral registration Office (or
          council Office in England and Wales). It is also possible to see the
          register at some public buildings such as libraries.{'\n'}
        </Text>
        <Text style={styles.title}>Where to vote{'\n'}</Text>
        <ImageCard
          img={'pollingstation'}
          text={'Polling station with a ballot box displayed'}
        />
        <Text style={styles.text}>
          {'\n'}People vote in elections at places called polling stations, or
          polling places in Scotland. Before the election you will be sent a
          poll card. This tells you where your polling station or polling place
          is and when the election will take place. On election day, the polling
          station or place will be open from 7.00 am until 10.00 pm.
          {'\n'}
          {'\n'}
          When you arrive at the polling station, the staff will ask for your
          name and address. In Northern Ireland you will also have to show
          photographic identification. You will then get your ballot paper,
          which you take to a polling booth to fill in privately. You should
          make up your own mind who to vote for. No one has the right to make
          you vote for a particular candidate. You should follow the
          instructions on the ballot paper. Once you have completed it, put it
          in the ballot box.
          {'\n'}
          {'\n'}
          If it is difficult for you to get to a polling station or polling
          place, you can register for a postal ballot. Your ballot paper will be
          sent to your home before the election. You then fill it in and post it
          back. You can choose to do this when you register to vote.{'\n'}
        </Text>
        <Text style={styles.title}>Standing for office</Text>
        <Text style={styles.text}>
          {'\n'}Most citizens of the UK, the Irish Republic or the Commonwealth
          aged 18 or over can stand for public Office. There are some
          exceptions, including:{'\n'}
        </Text>
        {points([
          'members of the armed forces',
          'civil servants',
          'people found guilty of certain criminal offences.',
        ])}
        <Text style={styles.text}>
          {'\n'}Members of the House of Lords may not stand for election to the
          House of Commons but are eligible for all other public Offices.{'\n'}
        </Text>
        <Text style={styles.title}>
          Visiting Parliament and the devolved administrations
        </Text>
        <Text style={styles.subtitle}>{'\n'}The UK Parliament</Text>
        <Text style={styles.text}>
          {'\n'}The public can listen to debates in the Palace of Westminster
          from public galleries in both the House of Commons and the House of
          Lords.
          {'\n'}
          {'\n'}
          You can write to your local MP in advance to ask for tickets or you
          can queue on the day at the public entrance. Entrance is free.
          Sometimes there are long queues for the House of Commons and people
          have to wait for at least one to two hours. It is usually easier to
          get in to the House of Lords.
          {'\n'}
          {'\n'}
          You can find further information on the UK Parliament website at
          www.parliament.uk.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Northern Ireland Assembly</Text>
        <Text style={styles.text}>
          {'\n'}In Northern Ireland elected members, known as MLAs, meet in the
          Northern Ireland Assembly at Stormont, in Belfast.
          {'\n'}
          {'\n'}
          There are two ways to arrange a visit to Stormont. You can either
          contact the Education Service (details are on the Northern Ireland
          Assembly website at www.niassembly.gov.uk) or contact an MLA.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Scottish Parliament</Text>
        <Text style={styles.text}>
          {'\n'}In Scotland the elected members, called MSPs, meet in the
          Scottish Parliament building at Holyrood in Edinburgh (for more
          information, see www.scottish.parliament.uk).
          {'\n'}
          {'\n'}
          You can get information, book tickets or arrange tours through visitor
          services. You can write to them at the Scottish Parliament, Edinburgh,
          EH99 1SP, telephone 0131 348 5200 or email
          sp.bookings@scottish.parliament.uk{'\n'}
        </Text>
        <Text style={styles.subtitle}>National Assembly for Wales</Text>
        <Text style={styles.text}>
          {'\n'}In Wales the elected members, known as AMs, meet in the Welsh
          Assembly in the Senedd in Cardiff Bay (for more information, see
          www.wales.gov.uk).
          {'\n'}
          {'\n'}
          The Senedd is an open building. You can book guided tours or seats in
          the public galleries for the Welsh Assembly. To make a booking,
          contact the Assembly Booking Service on 0845 010 5500 or email
          assembly.bookings@wales.gsi.gov.uk
        </Text>
        <GreenCard
          list={[
            'Who is eligible to vote',
            'How you register to vote',
            'How to vote',
            'Who can stand for public Office',
            'How you can visit Parliament, the Northern Ireland Assembly, the Scottish Parliament and the Welsh Assembly',
          ]}
        />
      </View>
    );
  }
}
