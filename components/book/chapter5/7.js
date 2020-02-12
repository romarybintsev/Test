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

export default class Chapter5Part7 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Your role in the community</Text>
        <Text style={styles.text}>
          {'\n'}Becoming a British citizen or settling in the UK brings
          responsibilities but also opportunities. Everyone has the opportunity
          to participate in their community. This section looks at some of the
          responsibilities of being a citizen and gives information about how
          you can help to make your community a better place to live and work.
          {'\n'}
        </Text>
        <Text style={styles.title}>Values and responsibilities</Text>
        <Text style={styles.text}>
          {'\n'}
          Although Britain is one of the world's most diverse societies, there
          is a set of shared values and responsibilities that everyone can agree
          with. These values and responsibilities include:
          {'\n'}{' '}
        </Text>
        {points([
          'to obey and respect the law',
          'to be aware of the rights of others and respect those rights',
          'to treat others with fairness',
          'to behave responsibly',
          'to help and protect your family',
          'to respect and preserve the environment',
          'to treat everyone equally, regardless of sex, race, religion, age, disability, class or sexual orientation',
          'to work to provide for yourself and your family',
          'to help others',
          'to vote in local and national government elections.',
        ])}
        <Text style={styles.text}>
          {'\n'}Taking on these values and responsibilities will make it easier
          for you to become a full and active citizen.
          {'\n'}
        </Text>
        <Text style={styles.title}>Being a good neighbour</Text>
        <Text style={styles.text}>
          {'\n'}When you move into a new house or apartment, introduce yourself
          to the people who live near you. Getting to know your neighbours can
          help you to become part of the community and make friends. Your
          neighbours are also a good source of help - for example, they may be
          willing to feed your pets if you are away, or offer advice on local
          shops and services.
          {'\n'}
          {'\n'}
          You can help prevent any problems and conflicts with your neighbours
          by respecting their privacy and limiting how much noise you make. Also
          try to keep your garden tidy, and only put your refuse bags and bins
          on the street or in communal areas if they are due to be collected.
          {'\n'}
        </Text>
        <Text style={styles.title}>Getting involved in local activities</Text>
        <Text style={styles.text}>
          {'\n'}Volunteering and helping your community are an important part of
          being a good citizen. They enable you to integrate and get to know
          other people. It helps to make your community a better place if
          residents support each other. It also helps you to fulfil your duties
          as a citizen, such as behaving responsibly and helping others.{'\n'}
        </Text>
        <Text style={styles.title}>How you can support your community</Text>
        <Text style={styles.text}>
          {'\n'}There are a number of positive ways in which you can support
          your community and be a good citizen.
        </Text>
        <Text style={styles.subtitle}>
          {'\n'}Jury service{'\n'}
        </Text>
        <Text style={styles.text}>
          As well as getting the right to vote, people on the electoral register
          are randomly selected to serve on a jury. Anyone who is on the
          electoral register and is aged 18 to 70 can be asked to do this.{'\n'}
        </Text>
        <Text style={styles.subtitle}>
          Helping in schools
        </Text>
        <Text style={styles.text}>
          {'\n'}
          If you have children, there are many ways in which you can help at
          their schools. Parents can often help in classrooms, by supporting
          activities or listening to children read.
          {'\n'}
          {'\n'}
          Many schools organise events to raise money for extra equipment or
          out-of-school activities. Activities might include book sales, toy
          sales or bringing food to sell. You might have good ideas of your own
          for raising money. Sometimes events are organised by parent-teacher
          associations (PTAs). Volunteering to help with their events or joining
          the association is a way of doing something good for the school and
          also making new friends in your local community. You can find out
          about these opportunities from notices in the school or notes your
          children bring home.{'\n'}
        </Text>
        <Text style={styles.subtitle2}>School governors and school boards</Text>
        <Text style={styles.text}>
          {'\n'}School governors, or members of the school board in Scotland,
          are people from the local community who wish to make a positive
          contribution to children's education. They must be aged 18 or over
          at the date of their election or appointment. There is no upper age
          limit.
          {'\n'}
          {'\n'}
          Governors and school boards have an important part to play in raising
          school standards. They have three key roles:{'\n'}
        </Text>
        {points([
          'setting the strategic direction of the school',
          'ensuring accountability',
          'monitoring and evaluating school performance.',
        ])}
        <Text style={styles.text}>
          {'\n'}You can contact your local school to ask if they need a new
          governor or school board member. In England, you can also apply online
          at the School Governors' One-Stop Shop at www.sgoss.org.uk. In
          England, parents and other community groups can apply to open a free
          school in their local area. More information about this can be found
          on the Department for Education website at www.dfe.gov.uk.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>Supporting political parties</Text>
        <Text style={styles.text}>
          {'\n'}Political parties welcome new members. Joining one is a way to
          demonstrate your support for certain views and to get involved in the
          democratic process.
          {'\n'} {'\n'}
          Political parties are particularly busy at election times. Members
          work hard to persuade people to vote for their candidates - for
          instance, by handing out leaflets in the street or by knocking on
          people's doors and asking for their support. This is called
          'canvassing'. You don't have to tell a canvasser how you intend
          to vote if you don't want to.
          {'\n'} {'\n'}
          British citizens can stand for Office as a local councillor, a member
          of Parliament (or the devolved equivalents) or a member of the
          European Parliament. This is an opportunity to become even more
          involved in the political life of the UK. You may also be able to
          stand for Office if you are an Irish citizen, an eligible Commonwealth
          citizen or (except for standing to be an MP) a citizen of another EU
          country.
          {'\n'} {'\n'}
          You can find out more about joining a political party from the
          individual party websites.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Helping with local services</Text>
        <Text style={styles.text}>
          {'\n'}There are opportunities to volunteer with a wide range of local
          service providers, including local hospitals and youth projects.
          Services often want to involve local people in decisions about the way
          in which they work. Universities, housing associations, museums and
          arts councils may advertise for people to serve as volunteers in their
          governing bodies.
          {'\n'} {'\n'}
          You can volunteer with the police, and become a special constable or a
          lay (non-police) representative. You can also apply to become a
          magistrate. You will often find advertisements for vacancies in your
          local newspaper or on local radio. You can also find out more about
          these sorts of roles at www.gov.uk.{'\n'}
        </Text>

        <Text style={styles.title}>Blood and organ donation</Text>
        <Text style={styles.text}>
          {'\n'}Donated blood is used by hospitals to help people with a wide
          range of injuries and illnesses. Giving blood only takes about an hour
          to do. You can register to give blood at:
          {'\n'}
        </Text>
        {points([
          'England and North Wales: www.blood.co.uk',
          'Rest of Wales: www.welsh-blood.org.uk',
          'Scotland: www.scotblood.co.uk',
          'Northern Ireland: www.nibts.org',
        ])}
        <Text style={styles.text}>
          {'\n'}
          Many people in the UK are waiting for organ transplants. If you
          register to be an organ donor, it can make it easier for your family
          to decide whether to donate your organs when you die. You can register
          to be an organ donor at www.organdonation.nhs.uk. Living people can
          also donate a kidney.
          {'\n'}
        </Text>
        <Text style={styles.subtitle2}>Other ways to volunteer</Text>
        <Text style={styles.text}>
          {'\n'}Volunteering is working for good causes without payment. There
          are many benefits to volunteering, such as meeting new people helping
          make your community a better place. Some volunteer activities will
          give you a chance to practise your English or develop work skills that
          will help you find a job or improve your curriculum vitae (CV). Many
          people volunteer simply because they want to help other people.
          {'\n'} {'\n'}
          Activities you can do as a volunteer include:{'\n'}
        </Text>
        {points([
          'working with animals - for example, caring for animals at a local rescue shelter',
          'youth work - for example, volunteering at a youth group',
          'helping improve the environment - for example, participating in a litter pick-up in the local area',
          'working with the homeless in, for example, a homelessness shelter',
          'mentoring - for example, supporting someone who has just come out of prison',
          'work in health and hospitals - for example, working on an information desk in a hospital',
          'helping older people at, for example, a residential care home.',
        ])}
        <Text style={styles.text}>
          {'\n'}There are thousands of active charities and voluntary
          organisations in the UK. They work to improve the lives of people,
          animals and the environment in many different ways. They range from
          the British branches of international organisations, such as the
          British Red Cross, to small local charities working in particular
          areas. They include charities working with older people (such as Age
          UK), with children (for example, the National Society for the
          Prevention of Cruelty to Children (NSPCC)), and with the homeless (for
          example, Crisis and Shelter). There are also medical research
          charities (for example, Cancer Research UK), environmental charities
          (including the National Trust and Friends of the Earth) and charities
          working with animals (such as the People's Dispensary for Sick
          Animals (PDSA)).
          {'\n'}
          {'\n'}
          Volunteers are needed to help with their activities and to raise
          money. The charities often advertise in local newspapers, and most
          have websites that include information about their opportunities. You
          can also get information about volunteering for different
          organisations from www.do-it.org.uk.
          {'\n'}
          {'\n'}
          There are many opportunities for young people to volunteer and receive
          accreditation which will help them to develop their skills. These
          include the National Citizen Service programme, which gives 16- and
          17-year-olds the opportunity to enjoy outdoor activities, develop
          their skills and take part in a community project. You can find out
          more about these opportunities as follows:{'\n'}
        </Text>
        {points([
          'National Citizen Service: at nationalcitizenservice.direct.gov.uk',
          'England: at www.vinspired.com',
          'Wales: at www.gwirvol.org',
          'Scotland: at www.vds.org.uk',
          'Northern Ireland: at www.volunteernow.co.uk',
        ])}
        <Text style={styles.title}>Looking after the environment</Text>
        <Text style={styles.text}>
          {'\n'}It is important to recycle as much of your waste as you can.
          Using recycled materials to make new products uses less energy and
          means that we do not need to extract more raw materials from the
          earth. It also means that less rubbish is created, so the amount being
          put into landfill is reduced.
          {'\n'}
          {'\n'}
          You can learn more about recycling and its benefits at
          www.recyclenow.com. At this website you can also find out what you can
          recycle at home and in the local area if you live in England. This
          information is available for Wales at www.wasteawarenesswales.org.uk,
          for Scotland at www.recycleforscotland.com and for Northern Ireland
          from your local authority.
          {'\n'}
          {'\n'}A good way to support your local community is to shop for
          products locally where you can. This will help businesses and farmers
          in your area and in Britain. It will also reduce your carbon
          footprint, because the products you buy will not have had to travel as
          far.
          {'\n'}
          {'\n'}
          Walking and using public transport to get around when you can is also
          a good way to protect the environment. It means that you create less
          pollution than when you use a car.
        </Text>
        <GreenCard
          list={[
            "The different ways you can help at your child's school",
            'The role of school governors and members of school boards, and how you can become one',
            'The role of members of political parties',
            'The different local services people can volunteer to support',
            'How to donate blood and organs',
            'The benefits of volunteering for you, other people and the community',
            'The types of activities that volunteers can do',
            'How you can look after the environment',
          ]}
        />
      </View>
    );
  }
}
