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

export default class Chapter5Part5 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Respecting the law</Text>
        <Text style={styles.text}>
          {'\n'}One of the most important responsibilities of all residents in
          the UK is to know and obey the law. This section will tell you about
          the legal system in the UK and some of the laws that may affect you.
          Britain is proud of being a welcoming country, but all residents,
          regardless of their background, are expected to comply with the law
          and to understand that some things which may be allowed in other legal
          systems are not acceptable in the UK. Those who do not respect the law
          should not expect to be allowed to become permanent residents in the
          UK.
          {'\n'}
          {'\n'}
          The law is relevant to all areas of life in the UK. You should make
          sure that you are aware of the laws which affect your everyday life,
          including both your personal and business affairs.
          {'\n'}
        </Text>
        <Text style={styles.title}>The law in the UK</Text>
        <Text style={styles.text}>
          {'\n'}
          Every person in the UK receives equal treatment under the law. This
          means that the law applies in the same way to everyone, no matter who
          they are or where they are from.
          {'\n'}
          {'\n'}
          Laws can be divided into criminal law and civil law:{'\n'}
        </Text>
        {points([
          'Criminal law relates to crimes, which are usually investigated by the police or another authority such as a council, and which are punished by the courts.',
          'Civil law is used to settle disputes between individuals or groups.',
        ])}
        <Text style={styles.text}>
          {'\n'}
          Examples of criminal laws are:
          {'\n'}
        </Text>
        {points([
          'Carrying a weapon: it is a criminal offence to carry a weapon of any kind, even if it is for self-defence. This includes a gun, a knife or anything that is made or adapted to cause injury.',
          'Drugs: selling or buying drugs such as heroin, cocaine, ecstasy and cannabis is illegal in the UK.',
          'Racial crime: it is a criminal offence to cause harassment, alarm or distress to someone because of their religion or ethnic origin.',
          'Selling tobacco: it is illegal to sell tobacco products (for example, cigarettes, cigars, roll-up tobacco) to anyone under the age of 18.',
          'Smoking in public places: it is against the law to smoke tobacco products in nearly every enclosed public place in the UK. There are signs displayed to tell you where you cannot smoke.',
          'Buying alcohol: it is a criminal offence to sell alcohol to anyone who is under 18 or to buy alcohol for people who are under the age of 18. (There is one exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant.',
          'Drinking in public: some places have alcohol-free zones where you cannot drink in public. The police can also confiscate alcohol or move young people on from public places. You can be fined or arrested.',
        ])}
        <Text style={styles.text}>
          {'\n'}This list does not include all crimes. There are many that apply
          in most countries, such as murder, theft and assault. You can find out
          more about types of crime in the UK at www.gov.uk.
          {'\n'}
          {'\n'} Examples of civil laws are:
          {'\n'}
        </Text>
        {points([
          'Housing law: this includes disputes between landlords and tenants over issues such as repairs and eviction.',
          'Consumer rights: an example of this is a dispute about faulty goods or services.',
          'Employment law: these cases include disputes over wages and cases of unfair dismissal or discrimination in the workplace.',
          'Debt: people might be taken to court if they owe money to someone.',
        ])}
        <Text style={styles.title}>
          {'\n'}The police and their duties{'\n'}
        </Text>
        <ImageCard img={'police'} text={'Police in the UK'} />
        <Text style={styles.text}>
          {'\n'}The job of the police in the UK is to:
          {'\n'}
        </Text>
        {points([
          'protect life and property',
          'prevent disturbances (also known as keeping the peace)',
          'prevent and detect crime.',
        ])}
        <Text style={styles.text}>
          {'\n'}The police are organised into a number of separate police forces
          headed by Chief Constables. They are independent of the government.
          {'\n'}
          {'\n'}
          In November 2012, the public elected Police and Crime Commissioners
          (PCCs) in England and Wales. These are directly elected individuals
          who are responsible for the delivery of an efficient and effective
          police force that reflects the needs of their local communities. PCCs
          set local police priorities and the local policing budget. They also
          appoint the Chief Constable.
          {'\n'}
          {'\n'}
          The police force is a public service that helps and protects everyone,
          no matter what their background or where they live. Police Officers
          must themselves obey the law. They must not misuse their authority,
          make a false statement, be rude or abusive, or commit racial
          discrimination. If police Officers are corrupt or misuse their
          authority they are severely punished.
          {'\n'}
          {'\n'}
          Police Officers are supported by police community support Officers
          (PSCOs). PSCOs have different roles according to the area but usually
          patrol the streets, work with the public, and support police Officers
          at crime scenes and major events.
          {'\n'}
          {'\n'}
          All people in the UK are expected to help the police prevent and
          detect crimes whenever they can. If you are arrested and taken to a
          police station, a police Officer will tell you the reason for your
          arrest and you will be able to seek legal advice.
          {'\n'}
          {'\n'}
          If something goes wrong, the police complaints system tries to put it
          right. Anyone can make a complaint about the police by going to a
          police station or writing to the Chief Constable of the police force
          involved. Complaints can also be made to an independent body: the
          Independent Police Complaints Commission in England and Wales, the
          Police Complaints Commissioner for Scotland or the Police Ombudsman
          for Northern Ireland.{'\n'}
        </Text>
        <Text style={styles.title}>Terrorism and extremism</Text>
        <Text style={styles.text}>
          {'\n'}The UK faces a range of terrorist threats. The most serious of
          these is from Al Qa'ida, its affiliates and like-minded
          organisations. The UK also faces threats from other kinds of
          terrorism, such as Northern Ireland-related terrorism.
          {'\n'}
          {'\n'}
          All terrorist groups try to radicalise and recruit people to their
          cause. How, where and to what extent they try to do so will vary.
          Evidence shows that these groups attract very low levels of public
          support, but people who want to make their home in the UK should be
          aware of this threat. It is important that all citizens feel safe.
          This includes feeling safe from all kinds of extremism (vocal or
          active opposition to fundamental British values), including religious
          extremism and far-right extremism.
          {'\n'}
          {'\n'}
          If you think someone is trying to persuade you to join an extremist or
          terrorist cause, you should notify your local police force.
        </Text>
        <GreenCard
          list={[
            'The difference between civil and criminal law and some examples of each',
            'The duties of the police',
            'The possible terrorist threats facing the UK',
          ]}
        />
        <Text style={styles.title}>
          {'\n'}The role of the courts{'\n'}
        </Text>
        <Text style={styles.subtitle}>The judiciary</Text>
        <Text style={styles.text}>
          {'\n'}Judges (who are together called 'the judiciary') are
          responsible for interpreting the law and ensuring that trials are
          conducted fairly. The government cannot interfere with this.
          {'\n'}
          {'\n'}
          Sometimes the actions of the government are claimed to be illegal. If
          the judges agree, then the government must either change its policies
          or ask Parliament to change the law. If judges find that a public body
          is not respecting someone's legal rights, they can order that body
          to change its practices and/or pay compensation. Judges also make
          decisions in disputes between members of the public or organisations.
          These might be about contracts, property or employment rights or after
          an accident.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Criminal courts</Text>
        <Text style={styles.text}>
          {'\n'}There are some differences between the court systems in England
          and Wales, Scotland and Northern Ireland.
          {'\n'}
          {'\n'}
          <Text style={styles.subtitle2}>Magistrates' and Justice of the Peace Courts</Text>
          {'\n'}
          {'\n'}
          In England, Wales and Northern Ireland, most minor criminal cases are
          dealt with in a Magistrates' Court. In Scotland, minor criminal
          offences go to a Justice of the Peace Court.
          {'\n'}
          {'\n'}
          Magistrates and Justices of the Peace (JPs) are members of the local
          community. In England, Wales and Scotland they usually work unpaid and
          do not need legal qualifications. They receive training to do the job
          and are supported by a legal adviser. Magistrates decide the verdict
          in each case that comes before them and, if the person is found
          guilty, the sentence that they are given. In Northern Ireland, cases
          are heard by a District Judge or Deputy District Judge, who is legally
          qualified and paid.
          {'\n'}
          {'\n'}
          <Text style={styles.subtitle2}>Crown Courts and Sheriff Courts</Text>
          {'\n'}
          {'\n'}
          In England, Wales and Northern Ireland, serious offences are tried in
          front of a judge and a jury in a Crown Court. In Scotland, serious
          cases are heard in a Sheriff Court with either a sheriff or a sheriff
          with a jury. The most serious cases in Scotland, such as murder, are
          heard at a High Court with a judge and jury. A jury is made up of
          members of the public chosen at random from the local electoral
          register. In England, Wales and Northern Ireland a jury has 12
          members, and in Scotland a jury has 15 members. Everyone who is
          summoned to do jury service must do it unless they are not eligible
          (for example, because they have a criminal conviction) or they provide
          a good reason to be excused, such as ill health.
          {'\n'}
          {'\n'}
          The jury has to listen to the evidence presented at the trial and then
          decide a verdict of 'guilty' or 'not guilty' based on what
          they have heard. In Scotland, a third verdict of 'not proven' is
          also possible. If the jury finds a defendant guilty, the judge decides
          on the penalty.
          {'\n'}
          {'\n'}
          <Text style={styles.subtitle2}>Youth Courts</Text>
          {'\n'}
          {'\n'}
          In England, Wales and Northern Ireland, if an accused person is aged
          10 to 17, the case is normally heard in a Youth Court in front of up
          to three specially trained magistrates or a District Judge. The most
          serious cases will go to the Crown Court. The parents or carers of the
          young person are expected to attend the hearing. Members of the public
          are not allowed in Youth Courts, and the name or photographs of the
          accused young person cannot be published in newspapers or used by the
          media.
          {'\n'}
          {'\n'}
          In Scotland a system called the Children's Hearings System is used
          to deal with children and young people who have committed an offence.
          {'\n'}
          {'\n'}
          Northern Ireland has a system of youth conferencing to consider how a
          child should be dealt with when they have committed an offence.{'\n'}
        </Text>
        <Text style={styles.subtitle}>Civil courts</Text>
        <Text style={styles.text}>
          {'\n'}<Text style={styles.subtitle2}>County Courts</Text>
          {'\n'} {'\n'}
          County Courts deal with a wide range of civil disputes. These include
          people trying to get back money that is owed to them, cases involving
          personal injury, family matters, breaches of contract, and divorce. In
          Scotland, most of these matters are dealt with in the Sheriff Court.
          More serious civil cases - for example, when a large amount of
          compensation is being claimed - are dealt with in the High Court in
          England, Wales and Northern Ireland. In Scotland, they are dealt with
          in the Court of Session in Edinburgh.
          {'\n'} {'\n'}
          <Text style={styles.subtitle2}>The small claims procedure</Text>
          {'\n'} {'\n'}
          The small claims procedure is an informal way of helping people to
          settle minor disputes without spending a lot of time and money using a
          lawyer. This procedure is used for claims of less than £5,000 in
          England and Wales and £3,000 in Scotland and Northern Ireland. The
          hearing is held in front of a judge in an ordinary room, and people
          from both sides of the dispute sit around a table. Small claims can
          also be issued online through Money Claims Online
          (www.moneyclaim.gov.uk).
          {'\n'} {'\n'}
          You can get details about the small claims procedure from your local
          County Court or Sheriff Court. Details of your local court can be
          found as follows:{'\n'}
        </Text>
        {points([
          'England and Wales: at www.gov.uk',
          'Scotland: at www.scotcourts.gov.uk',
          'Northern Ireland: at www.courtsni.gov.uk.',
        ])}
        <Text style={styles.subtitle}>{'\n'}Legal advice</Text>
        <Text style={styles.text}>
          {'\n'}<Text style={styles.subtitle2}>Solicitors</Text>
          {'\n'}
          {'\n'}
          Solicitors are trained lawyers who give advice on legal matters, take
          action for their clients and represent their clients in court.
          {'\n'}
          {'\n'}
          There are solicitors' Offices throughout the UK. It is important to
          find out which aspects of law a solicitor specialises in and to check
          that they have the right experience to help you with your case. Many
          advertise in local newspapers and in Yellow Pages. The Citizens Advice
          Bureau (www.citizensadvice.org.uk) can give you names of local
          solicitors and which areas of law they specialise in. You can also get
          this information from the Law Society (www.lawsociety.org.uk) in
          England and Wales, the Law Society of Scotland (www.lawscot.org.uk) or
          the Law Society of Northern Ireland (www.lawsoc-ni.org). Solicitors'
          charges are usually based on how much time they spend on a case. It is
          very important to find out at the start how much a case is likely to
          cost.
        </Text>
        <GreenCard
          list={[
            'The role of the judiciary',
            'About the different criminal courts in the UK',
            'About the different civil courts in the UK',
            'How you can settle a small claim',
          ]}
        />
      </View>
    );
  }
}
