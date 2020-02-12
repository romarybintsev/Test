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

export default class Chapter5Part6 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>Fundamental principles</Text>
        <Text style={styles.text}>
          {'\n'}Britain has a long history of respecting an individual's
          rights and ensuring essential freedoms. These rights have their roots
          in Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689,
          and they have developed over a period of time. British diplomats and
          lawyers had an important role in drafting the European Convention on
          Human Rights and Fundamental Freedoms. The UK was one of the first
          countries to sign the Convention in 1950.
          {'\n'}
          {'\n'}
          Some of the principles included in the European Convention on Human
          Rights are:
          {'\n'}
        </Text>
        {points([
          'right to life',
          'prohibition of torture',
          'prohibition of slavery and forced labour',
          'right to liberty and security',
          'right to a fair trial',
          'freedom of thought, conscience and religion',
          'freedom of expression (speech).',
        ])}
        <Text style={styles.text}>
          {'\n'}
          The Human Rights Act 1998 incorporated the European Convention on
          Human Rights into UK law. The government, public bodies and the courts
          must follow the principles of the Convention.{'\n'}
        </Text>
        <Text style={styles.title}>Equal opportunities</Text>
        <Text style={styles.text}>
          {'\n'}
          UK laws ensure that people are not treated unfairly in any area of
          life or work because of their age, disability, sex, pregnancy and
          maternity, race, religion or belief, sexuality or marital status. If
          you face problems with discrimination, you can get more information
          from the Citizens Advice Bureau or from one of the following
          organisations:
          {'\n'}{' '}
        </Text>
        {points([
          'England and Wales: Equality and Human Rights Commission (www.equalityhumanrights.com)',
          'Scotland: Equality and Human Rights Commission in Scotland (www.equalityhumanrights.com/scotland/the-commission-inscotland) and Scottish Human Rights Commission (www.scottishhumanrights.com)',
          'Northern Ireland: Equality Commission for Northern Ireland (www.equalityni.org)',
          'Northern Ireland Human Rights Commission (www.nihrc.org).',
        ])}
        <Text style={styles.title}>{'\n'}Domestic violence</Text>
        <Text style={styles.text}>
          {'\n'}In the UK, brutality and violence in the home is a serious
          crime. Anyone who is violent towards their partner - whether they
          are a man or woman, married or living together - can be prosecuted.
          Any man who forces a woman to have sex, including a woman's husband,
          can be charged with rape.
          {'\n'} {'\n'}
          It is important for anyone facing domestic violence to get help as
          soon as possible. A solicitor or the Citizens Advice Bureau can
          explain the available options. In some areas there are safe places to
          go and stay in, called refuges or shelters. There are emergency
          telephone numbers in the helpline section at the front of Yellow
          Pages, including, for women, the number of the nearest women's
          centre. You can also phone the 24-hour National Domestic Violence
          Freephone Helpline on 0808 2000 247 at any time, or the police can
          help you find a safe place to stay.
          {'\n'}
        </Text>
        <Text style={styles.title}>Female genital mutilation</Text>
        <Text style={styles.text}>
          {'\n'}Female genital mutilation (FGM), also known as cutting or female
          circumcision, is illegal in the UK. Practising FGM or taking a girl or
          woman abroad for FGM is a criminal offence.{'\n'}
        </Text>
        <Text style={styles.title}>Forced marriage</Text>
        <Text style={styles.text}>
          {'\n'}A marriage should be entered into with the full and free consent
          of both people involved. Arranged marriages, where both parties agree
          to the marriage, are acceptable in the UK.
          {'\n'}
          {'\n'}
          Forced marriage is where one or both parties do not or cannot give
          their consent to enter into the partnership. Forcing another person to
          marry is a criminal offence.
          {'\n'}
          {'\n'}
          Forced Marriage Protection Orders were introduced in 2008 for England,
          Wales and Northern Ireland under the Forced Marriage (Civil
          Protection) Act 2007. Court orders can be obtained to protect a person
          from being forced into a marriage, or to protect a person in a forced
          marriage. Similar Protection Orders were introduced in Scotland in
          November 2011.
          {'\n'}
          {'\n'}A potential victim, or someone acting for them, can apply for an
          order. Anyone found to have breached an order can be jailed for up to
          two years for contempt of court.{'\n'}
        </Text>
        <Text style={styles.title}>Taxation</Text>
        <Text style={styles.subtitle}>{'\n'}Income tax{'\n'}</Text>
        <Text style={styles.text}>
          People in the UK have to pay tax on their income, which includes:{'\n'}
        </Text>
        {points([
          'wages from paid employment',
          'profits from self-employment',
          'taxable benefits',
          'pensions',
          'income from property, savings and dividends.',
        ])}
        <Text style={styles.text}>
          {'\n'}Money raised from income tax pays for government services such
          as roads, education, police and the armed forces.
          {'\n'}
          {'\n'}
          For most people, the right amount of income tax is automatically taken
          from their income from employment by their employer and paid directly
          to HM Revenue & Customs (HMRC), the government department that
          collects taxes. This system is called 'Pay As You Earn' (PAYE). If
          you are self-employed, you need to pay your own tax through a system
          called 'self-assessment', which includes completing a tax return.
          Other people may also need to complete a tax return. If HMRC sends you
          a tax return, it is important to complete and return the form as soon
          as you have all the necessary information.
          {'\n'}
          {'\n'}
          You can find out more about income tax at www.hmrc.gov.uk/incometax.
          You can get help and advice about taxes and completing tax forms from
          the HMRC self-assessment helpline, on 0845 300 0627, and the HMRC
          website at www.hmrc.gov.uk.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>National insurance</Text>
        <Text style={styles.text}>
          {'\n'}Almost everybody in the UK who is in paid work, including
          self-employed people, must pay National Insurance Contributions. The
          money raised from National Insurance Contributions is used to pay for
          state benefits and services such as the state retirement pension and
          the National Health Service (NHS).
          {'\n'} {'\n'}
          Employees have their National Insurance Contributions deducted from
          their pay by their employer. People who are self-employed need to pay
          National Insurance Contributions themselves. Anyone who does not pay
          enough National Insurance Contributions will not be able to receive
          certain contributory benefits such as Jobseeker's Allowance or a
          full state retirement pension. Some workers, such as part-time
          workers, may not qualify for statutory payments such as maternity pay
          if they do not earn enough.
          {'\n'} {'\n'}
          Further guidance about National Insurance Contributions is available
          on HMRC's website at www.hmrc.gov.uk/ni.{'\n'}
        </Text>
        <Text style={styles.subtitle2}>
          Getting a National Insurance number
        </Text>
        <Text style={styles.text}>
          {'\n'}A National Insurance number is a unique personal account number.
          It makes sure that the National Insurance Contributions and tax you
          pay are properly recorded against your name. All young people in the
          UK are sent a National Insurance number just before their 16th
          birthday.
          {'\n'} {'\n'}A non-UK national living in the UK and looking for work,
          starting work or setting up as self-employed will need a National
          Insurance number. However, you can start work without one. If you have
          permission to work in the UK, you will need to telephone the
          Department for Work and Pensions (DWP) to arrange to get a National
          Insurance number. You may be required to attend an interview. The DWP
          will advise you of the appropriate application process and tell you
          which documents you will need to bring to an interview if one is
          necessary. You will usually need documents that prove your identity
          and that you have permission to work in the UK. A National Insurance
          number does not on its own prove to an employer that you have the
          right to work in the UK.
          {'\n'} {'\n'}
          You can find out more information about how to apply for a National
          Insurance number at www.gov.uk.{'\n'}
        </Text>

        <Text style={styles.title}>Driving</Text>
        <Text style={styles.text}>
          {'\n'}In the UK, you must be at least 17 years old to drive a car or
          motor cycle and you must have a driving licence to drive on public
          roads. To get a UK driving licence you must pass a driving test, which
          tests both your knowledge and your practical skills. You need to be at
          least 16 years old to ride a moped, and there are other age
          requirements and special tests for driving large vehicles.
          {'\n'}
          {'\n'}
          Drivers can use their driving licence until they are 70 years old.
          After that, the licence is valid for three years at a time.
          {'\n'}
          {'\n'}
          In Northern Ireland, a newly qualified driver must display an 'R'
          place (for restricted driver) for one year after passing the test.
          {'\n'}
          {'\n'}
          If your driving licence is from a country in the European Union (EU),
          Iceland, Liechtenstein or Norway, you can drive in the UK for as long
          as your licence is valid. If you have a licence from any other
          country, you may use it in the UK for up to 12 months. To continue
          driving after that, you must get a UK full driving licence.
          {'\n'}
          {'\n'}
          If you are resident in the UK, your car or motor cycle must be
          registered at the Driver and Vehicle Licensing Agency (DVLA). You must
          pay an annual road tax and display the tax disc, which shows that the
          tax has been paid, on the windscreen. You must also have valid motor
          insurance. It is a serious criminal offence to drive without
          insurance. If your vehicle is over three years old, you must take it
          for a Ministry of Transport (MOT) test every year. It is an offence
          not to have an MOT certificate if your vehicle is more than three
          years old. You can find out more about vehicle tax and MOT
          requirements from www.gov.uk.
        </Text>
        <GreenCard
          list={[
            'The fundamental principles of UK law',
            'That domestic violence, FGM and forced marriage are illegal in the UK',
            'The system of income tax and National Insurance',
            'The requirements for driving a car',
          ]}
        />
      </View>
    );
  }
}
