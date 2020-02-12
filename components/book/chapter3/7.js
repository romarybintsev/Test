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

export default class Chapter3Part7 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.title}>The welfare state</Text>
        <Text style={styles.text}>
          {'\n'}Although the UK had won the war, the country was exhausted economically and the people wanted change. During the war, there had been significant reforms to the education system and people now looked for wider social reforms.
          {'\n'}{'\n'}
In 1945 the British people elected a Labour government. The new Prime Minister was Clement Atlee, who promised to introduce the welfare state outlined in the Beveridge Report. In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS), which guaranteed a minimum standard of health care for all, free at the point of use. A national system of benefits was also introduced to provide 'social security', so that the population would be protected from the 'cradle to the grave'. The government took into public ownership (nationalised) the railways, coal mines and gas, water and electricity supplies.
{'\n'}{'\n'}
Another aspect of change was self-government for former colonies. In 1947, independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka). Other colonies in Africa, the Caribbean and the Pacific achieved independence over the next 20 years.
{'\n'}{'\n'}
The UK developed its own atomic bomb and joined the new North Atlantic Treaty Organization (NATO), an alliance of nations set up to resist the perceived threat of invasion by the Soviet Union and its allies.
{'\n'}{'\n'}
Britain had a Conservative government from 1951 to 1964. The 1950s were a period of economic recovery after the war and increasing prosperity for working people. The Prime Minister of the day, Harold Macmillan, was famous for his 'wind of change' speech about decolonisation and independence for the countries of the Empire.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>Clement Attlee (1883 - 1967){'\n'}</Text>
        <ImageCard
          img={'clement'}
          text={'Clement Attlee'}
        />
        <Text style={styles.text}>
          {'\n'}
          Clement Attlee was born in London in 1883. His father was a solicitor and, after studying at Oxford University, Attlee became a barrister. He gave this up to do social work in East London and eventually became a Labour MP. He was Winston Churchill's Deputy Prime Minister in the wartime coalition government and became Prime Minister after the Labour Party won the 1945 election. He was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years. Attlee's government undertook the nationalisation of major industries (like coal and steel), created the National Health Service and implemented many of Beveridge's plans for a stronger welfare state. Attlee also introduced measures to improve the conditions of workers.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>William Beveridge (1879 - 1963)</Text>
        <Text style={styles.text}>
          {'\n'}
          William Beveridge (later Lord Beveridge) was a British economist and social reformer. He served briefly as a Liberal MP and was subsequently the leader of the Liberals in the House of Lords but is best known for the 1942 report Social Insurance and Allied Services (known as the Beveridge Report). The report was commissioned by the wartime government in 1941. It recommended that the government should find ways of fighting the five 'Giant Evils' of Want, Disease, Ignorance, Squalor and Idleness and provided the basis of the modern welfare state.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>R A Butler (1902 - 82)</Text>
        <Text style={styles.text}>
          {'\n'}Richard Austen Butler (later Lord Butler) was born in 1902. He became a Conservative MP in 1923 and held several positions before becoming responsible for education in 1941. In this role, he oversaw the introduction of the Education Act 1944 (often called 'The Butler Act'), which introduced free secondary education in England and Wales. The education system has changed significantly since the Act was introduced, but the division between primary and secondary schools that it enforced still remains in most areas of Britain.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>Dylan Thomas (1914 - 53)</Text>
        <Text style={styles.text}>
          {'\n'}Dylan Thomas was a Welsh poet and writer. He often read and performed his work in public, including for the BBC. His most well-known works include the radio play Under Milk Wood, first performed after his death in 1954, and the poem Do Not Go Gentle into That Good Night, which he wrote for his dying father in 1952. He died at the age of 39 in New York. There are several memorials to him in his birthplace, Swansea, including a statue and the Dylan Thomas Centre.
          {'\n'}
        </Text>
        <Text style={styles.title}>
        Migration in post-war Britain
        </Text>
        <Text style={styles.text}>
          {'\n'}
          Rebuilding Britain after the Second World War was a huge task. There were labour shortages and the British government encouraged workers from Ireland and other parts of Europe to come to the UK and help with the reconstruction. In 1948, people from the West Indies were also invited to come and work.
          {'\n'}{'\n'}
During the 1950s, there was still a shortage of labour in the UK. Further immigration was therefore encouraged for economic reasons, and many industries advertised for workers from overseas. For example, centres were set up in the West Indies to recruit people to drive buses. Textile and engineering firms from the north of England and the Midlands sent agents to India and Pakistan to find workers. For about 25 years, people from the West Indies, India, Pakistan and (later) Bangladesh travelled to work and settle in Britain.
          {'\n'}
        </Text>
        <Text style={styles.title}>
        Social change in the 1960s
        </Text>
        <Text style={styles.text}>
          {'\n'}
          The decade of the 1960s was a period of significant social change. It was known as 'the Swinging Sixties'. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones. People started to become better off and many bought cars and other consumer goods.
          {'\n'}{'\n'}
It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved. It was quite common at the time for employers to ask women to leave their jobs when they got married, but Parliament passed new laws giving women the right to equal pay and made it illegal for employers to discriminate against women because of their gender.
{'\n'}{'\n'}
The 1960s was also a time of technological progress. Britain and France developed the world's only supersonic commercial airliner, Concorde. New styles of architecture, including high-rise buildings and the use of concrete and steel, became common.
{'\n'}{'\n'}
The number of people migrating from the West Indies, India, Pakistan and what is now Bangladesh fell in the late 1960s because the government passed new laws to restrict immigration to Britain. Immigrants were required to have a strong connection to Britain through birth or ancestry. Even so, during the early 1970s, Britain admitted 28,000 people of Indian origin who had been forced to leave Uganda.
        </Text>
        <Text style={styles.subtitle}>
        Some great British inventions of the 20th century
        </Text>
        <Text style={styles.text}>
        {'\n'}
        Britain has given the world some wonderful inventions. Examples from the 20th century include:
        </Text>
        <PinkCard text={"The television was developed by Scotsman John Logie Baird (1888 - 1946) in the 1920s. In 1932 he made the first television broadcast between London and Glasgow."} />
        <PinkCard text={"Radar was developed by Scotsman Sir Robert Watson-Watt (1892 - 1973), who proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935."} />
        <PinkCard text={"Working with radar led Sir Bernard Lovell (1913 - 2012) to make new discoveries in astronomy. The radio telescope he built at Jodrell Bank in Cheshire was for many years the biggest in the world and continues to operate today."} />
        <PinkCard text={"A Turing machine is a theoretical mathematical device invented by Alan Turing (1912 - 54), a British mathematician, in the 1930s. The theory was influential in the development of computer science and the modern-day computer."} />
        <PinkCard text={"The Scottish physician and researcher John MacLeod (1876 - 1935) was the co-discoverer of insulin, used to treat diabetes."} />
        <PinkCard text={"The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916 - 2004), one of those awarded the Nobel Prize for this discovery, was British."} />
        <PinkCard text={"The jet engine was developed in Britain in the 1930s by Sir Frank Whittle (1907 - 96), a British Royal Air Force engineer Officer."} />
        <PinkCard text={"Sir Christopher Cockerell (1910 - 99), a British inventor, invented the hovercraft in the 1950s."} />
        <PinkCard text={"Britain and France developed Concorde, the world's only supersonic passenger aircraft. It first flew in 1969 and began carrying passengers in 1976. Concorde was retired from service in 2003."} />
        <PinkCard text={"The Harrier jump jet, an aircraft capable of taking off vertically, was also designed and developed in the UK."} />
        <PinkCard text={"In the 1960s, James Goodfellow (1937 - ) invented the cash-dispensing ATM (automatic teller machine) or 'cashpoint'. The first of these was put into use by Barclays Bank in Enfield, north London in 1967."} />
        <PinkCard text={"IVF (in-vitro fertilisation) therapy for the treatment of infertility was pioneered in Britain by physiologist Sir Robert Edwards (1925 - ) and gynaecologist Patrick Steptoe (1913 - 88). The world's first 'test-tube baby' was born in Oldham, Lancashire in 1978."} />
        <PinkCard text={"In 1996, two British scientists, Sir Ian Wilmot (1944 - ) and Keith Campbell (1954 - 2012), led a team which was the first to succeed in cloning a mammal, Dolly the sheep. This has led to further research into the possible use of cloning to preserve endangered species and for medical purposes."} />
        <PinkCard text={"Sir Peter Mansfield (1933 - ), a British scientist, is the co-inventor of the MRI (magnetic resonance imaging) scanner. This enables doctors and researchers to obtain exact and non-invasive images of human internal organs and has revolutionised diagnostic medicine."} />
        <PinkCard text={"The inventor of the World Wide Web, Sir Tim Berners-Lee (1955 - ), is British. Information was successfully transferred via the web for the first time on 25 December 1990."} />

        <Text style={styles.title}>{'\n'}
        Problems in the economy in the 1970s
        </Text>
        <Text style={styles.text}>
          {'\n'}
          In the late 1970s, the post-war economic boom came to an end. Prices of goods and raw materials began to rise sharply and the exchange rate between the pound and other currencies was unstable. This caused problems with the 'balance of payments': imports of goods were valued at more than the price paid for exports.
          {'\n'}{'\n'}
Many industries and services were affected by strikes and this caused problems between the trade unions and the government. People began to argue that the unions were too powerful and that their activities were harming the UK.
{'\n'}{'\n'}
The 1970s were also a time of serious unrest in Northern Ireland. In 1972, the Northern Ireland Parliament was suspended and Northern Ireland was directly ruled by the UK government. Some 3,000 people lost their lives in the decades after 1969 in the violence in Northern Ireland.
          {'\n'}
        </Text>
        <Text style={styles.subtitle}>
        Mary Peters (1939 - )
        </Text>
        <Text style={styles.text}>
        {'\n'}
        Born in Manchester, Mary Peters moved to Northern Ireland as a child. She was a talented athlete who won an Olympic gold medal in the pentathlon in 1972. After this, she raised money for local athletics and became the team manager for the women's British Olympic team. She continues to promote sport and tourism in Northern Ireland and was made a Dame of the British Empire in 2000 in recognition of her work.
        {'\n'}
        </Text>
        <Text style={styles.title}>
        Europe and the Common Market
        </Text>
        <Text style={styles.text}>
        {'\n'}
        West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the European Economic Community (EEC) in 1957. At first the UK did not wish to join the EEC but it eventually did so in 1973. The UK is a full member of the European Union but does not use the Euro currency.
        {'\n'}</Text>
        <Text style={styles.title}>
        Conservative government from 1979 to1997
        </Text>
        <Text style={styles.subtitle}>{'\n'}
        Margaret Thatcher (1925 - 2013){'\n'}
        </Text>
        <ImageCard
          img={'margaret'}
          text={'Margaret Thatcher'}
        />
        <Text style={styles.text}>
        {'\n'}
        Margaret Thatcher was the daughter of a grocer from Grantham in Lincolnshire. She trained as a chemist and lawyer. She was elected as a Conservative MP in 1959 and became a cabinet minister in 1970 as the Secretary of State for Education and Science. In 1975 she was elected as Leader of the Conservative Party and so became Leader of the Opposition.
        {'\n'}{'\n'}
Following the Conservative victory in the General Election in 1979, Margaret Thatcher became the first woman Prime Minister of the UK. She was the longest-serving Prime Minister of the 20th century, remaining in Office until 1990. During her premiership, there were a number of important economic reforms within the UK. She worked closely with the United States President, Ronald Reagan, and was one of the first Western leaders to recognise and welcome the changes in the leadership of the Soviet Union which eventually led to the end of the Cold War.
{'\n'}{'\n'}
Margaret Thatcher, Britain's first woman Prime Minister, led the Conservative government from 1979 to 1990. The government made structural changes to the economy through the privatisation of nationalised industries and imposed legal controls on trade union powers. Deregulation saw a great increase in the role of the City of London as an international centre for investments, insurance and other financial services. Traditional industries, such as shipbuilding and coal mining, declined. In 1982, Argentina invaded the Falkland Islands, a British overseas territory in the South Atlantic. A naval taskforce was sent from the UK and military action led to the recovery of the islands. John Major was Prime Minister after Mrs Thatcher, and helped establish the Northern Ireland peace process.{'\n'}</Text>
<Text style={styles.subtitle}>
Roald Dahl (1916 - 90)
        </Text>
        <Text style={styles.text}>
        {'\n'}
        Roald Dahl was born in Wales to Norwegian parents. He served in the Royal Air Force during the Second World War. It was during the 1940s that he began to publish books and short stories. He is most well known for his children's books, although he also wrote for adults. His best-known works include Charlie and the Chocolate Factory and George's Marvellous Medicine. Several of his books have been made into films. {'\n'}</Text>
        <Text style={styles.title}>
        Labour government from 1997-2010
        </Text>
        <Text style={styles.text}>
        {'\n'}
        In 1997 the Labour Party led by Tony Blair was elected. The Blair government introduced a Scottish Parliament and a Welsh Assembly. The Scottish Parliament has substantial powers to legislate. The Welsh Assembly was given fewer legislative powers but considerable control over public services. In Northern Ireland, the Blair government was able to build on the peace process, resulting in the Good Friday Agreement signed in 1998. The Northern Ireland Assembly was elected in 1999 but suspended in 2002. It was not reinstated until 2007. Most paramilitary groups in Northern Ireland have decommissioned their arms and are inactive. Gordon Brown took over as Prime Minister in 2007.{'\n'}</Text>
        <Text style={styles.title}>
        Conflicts in Afghanistan and Iraq
        </Text>
        <Text style={styles.text}>
        {'\n'}
        Throughout the 1990s, Britain played a leading role in coalition forces involved in the liberation of Kuwait, following the Iraqi invasion in 1990, and the conflict in the Former Republic of Yugoslavia. Since 2000, British armed forces have been engaged in the global fight against international terrorism and against the proliferation of weapons of mass destruction, including operations in Afghanistan and Iraq. British combat troops left Iraq in 2009. The UK now operates in Afghanistan as part of the United Nations (UN) mandated 50-nation International Security Assistance Force
(ISAF) coalition and at the invitation of the Afghan government. ISAF is working to ensure that Afghan territory can never again be used as a safe haven for international terrorism, where groups such as Al Qa'ida could plan attacks on the international community. As part of this, ISAF is building up the Afghan National Security Forces and is helping to create a secure environment in which governance and development can be extended. International forces are gradually handing over responsibility for security to the Afghans, who will have full security responsibility in all provinces by the end of 2014. {'\n'}</Text>
        <Text style={styles.title}>
        Coalition government from 2010 onwards
        </Text>
        <Text style={styles.text}>
        {'\n'}
        In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party, David Cameron, became Prime Minister.  {'\n'}</Text>
        <GreenCard
          list={[
            'The establishment of the welfare state',
            'How life in Britain changed in the 1960s and 1970s',
            'British inventions of the 20th century (you do not need to remember dates of births and deaths)',
            'Events since 1979',
          ]}
        />
      </View>
    );
  }
}
