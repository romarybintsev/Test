import React from 'react';
import {ScrollView,View,  Text,TouchableWithoutFeedback} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Header } from 'react-navigation-stack';

function FactTab(props){
    return(
        <View style={styles.option}>
            <Text>
                {props.text}
            </Text>
        </View>
    )
}

export default class CheatSheet extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            headerTitle: <Text style={styles.header_text}>Cheat Sheet</Text>,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#396afc',
            },
            headerLeft: null,
            tabBarVisible: false,
            headerTransparent: true,
            headerRight: <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={{ paddingRight: EStyleSheet.value('15rem'), }}>
            <FontAwesomeIcon size={EStyleSheet.value('24rem')} color={'white'} icon={'times-circle'} />
            </View>
          </TouchableWithoutFeedback>,
        };
    };
    render(){
        return(
            <ScrollView contentContainerStyle={{paddingBottom: EStyleSheet.value('20rem'), paddingTop: EStyleSheet.value('20rem'),}} style={{ flex: 1, marginTop: Header.HEIGHT,paddingLeft: EStyleSheet.value('20rem'),paddingRight: EStyleSheet.value('20rem'), backgroundColor: '#E8E8E8' }}>

                <Text style={styles.title}>Key Acts</Text>
                <FactTab text='Magna Carta (1215): reduced rights of the king and laid out basic rights of the people.' />
                <FactTab text='Habeas Corpus Act (1679): forbid unlawful imprisonment' />
                <FactTab text='Bill of Rights (1689): confirmed the rights of Parliament and the limits of the king’s power' />
                <FactTab text='Act of Union (1707): united kingdoms of England and Scotland and created Kingdom of GB' />
                <FactTab text='Reform Act (1832): abolished pocket and rotten boroughs and gave more parliamentary seats to towns and cities. Increased number of (male) voters.' />
                <FactTab text='Emancipation Act (1833): abolished slavery throughout British Empire. William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups. More than 2 million migrants came from India and China to replace labour force.' />
                <FactTab text='Women’s suffrage – 1918 (vote at 30+ yrs) and 1928 (vote at 21 yrs, same as men)' />
                <FactTab text='1913: Home Rule proposed in Ireland. Idea was to have a self-governing Ireland with its own parliament that still remained part of the UK. WWI postponed any changes. Irish nationalists didn’t want to wait and the Easter Rising against the British in Dublin took place in 1916. Guerrilla war followed.' />
                <FactTab text='1921: Peace treaty signed splitting Ireland in two' />

                <Text style={styles.title}>Eras</Text>
                <FactTab text='Romans: ruled Britain from 43-410 AD (approximately 400 years). Hadrian’s wall built on orders of Roman Emperor Hadrian to keep out tribes (Picts) who lived in what is now Scotland.' />
                <FactTab text='Middle Ages (1066-1485): period of constant war, including Crusades and Hundred Years’ War.' />
                <FactTab text='Elizabethan period (1500s): known for growing patriotism, expanded trade and rich poetry and drama.' />
                <FactTab text='The Enlightenment (1700s): development of new ideas about politics, philosophy and science. Adam Smith (economics) and David Hume (philosopher) influential Scottish thinkers.' />
                <FactTab text='Industrial Revolution (from mid-1700s to 1800s). Britain produced over half of the world’s supplies of cotton cloth, coal and iron. Machinery and stream power developed.' />
                <FactTab text='Victorian Age (1837-1901): Queen Victoria reigned; Britain increased power and influence abroad. Became largest empire in world history. Middle classes grew significantly and reformers improved conditions for the poor.' />

                <Text style={styles.title}>Modern Era</Text>
                <FactTab text='1900s: jet engine and radar invented. TV & World Wide Web (Tim Berners-Lee) invented. Hovercraft invented (Sir Christopher Cockrell) and penicillin discovered (Sir Alexander Flemming). ATM invented. Cloned sheep Dolly. Developed Concorde (supersonic jet) with the French. Co-discovered insulin and co-invented the MRI. Structure of DNA molecule discovered. Radio telescope at Jodrell Bank was for many years the world’s largest. Harrier jump jet (takes off vertically). IVF therapy.' />
                <FactTab text='State retirement pension and free school meals introduced before WWI' />
                <FactTab text='1929: Great Depression. Aviation and automobile industries developed. High unemployment, especially in “heavy” industries (e.g. shipbuilding).' />
                <FactTab text='1942: Beveridge Report (William Beveridge) set out ideas which led to foundation of modern welfare state.' />
                <FactTab text='1944: Education Act (R A Butler). Free secondary education and clear distinction between primary and secondary education.' />
                <FactTab text='1945-1950: NHS and social security system established.' />
                <FactTab text='1947: 9 colonies gained independence, including India, Pakistan, and Sri Lanka' />
                <FactTab text='1950s: Post-war labour shortages led to recruitment of workers from India, Pakistan, West Indies and Bangladesh.' />
                <FactTab text='1960s: Increased wealth and liberalisation of social laws (e.g. abortion and divorce).' />
                <FactTab text='1973: UK joined the EEC' />
                <FactTab text='1998: Good Friday Agreement led to establishment of Northern Irish parliament' />
                <FactTab text='1999: Scottish parliament & Welsh assembly established' />

                <Text style={styles.title}>Battles & Wars</Text>
                <FactTab text='1066: William of Normandy conquered England at Battle of Hastings (Bayeux Tapestry)' />
                <FactTab text='1314: Battle of Bannockburn. Scottish King Robert the Bruce defeated the English.' />
                <FactTab text='1455: War of the Roses. Civil war between House of Lancaster (red rose) and House of York (white rose) to determine who should be king of England. Ended at Battle of Bosworth Field (1485). Henry Tudor of House of Lancaster became King Henry VII and married Elizabeth of York, uniting the two families as the House of Tudor (red rose with a white rose inside).' />
                <FactTab text='Last of the Welsh rebellions had been defeated by mid-15th century.' />
                <FactTab text='1588: Spanish Armada was defeated under Elizabeth I' />
                <FactTab text='1640: Beginning of English Civil War. Parliament (supporters: Roundheads) vs the King (Cavaliers). Charles I introduced Prayer Book; Parliament, made of Puritans, didn’t back him. King’s army defeated at Battles of Marston Moor and Naseby. King Charles I executed.' />
                <FactTab text='1776: American colonies declare independence over taxation.' />
                <FactTab text='1805: Battle of Trafalgar. Lord Horatio Nelson (of Nelson’s Column) defeated French (Napoleon) + Spanish fleet.' />
                <FactTab text='1815: Battle of Waterloo. Lord Wellington defeated Napoleon.' />
                <FactTab text='1889-1902: Boer War in South Africa.' />
                <FactTab text='1916: Battle of the Somme WW1. British forces suffered 60,000 causalities on the first day.' />
                <FactTab text='1918: WWI ended at 11.00 on 11/11.' />
                <FactTab text='1939: German invasion of Poland led UK and France to declare war on Germany' />
                <FactTab text='1940 (WWII): Evacuation of Dunkirk. Rescue of 300,000 men by volunteers and small boats.' />
                <FactTab text='1940 (WWII): Battle of Britain. German/British aerial battle.' />
                <FactTab text='1982: Argentina invaded Falkland Islands' />
                
                <Text style={styles.title}>Key Events</Text>
                <FactTab text='1348: Black Death. Killed over 1/3 of Britain. Fewer people meant less need for cereal crops as well as labour shortages, then increased wages. Movement into cities and towns. Gentry (landowners of large plots) and middle class developed.' />
                <FactTab text='1400: English became preferred language of courts and official documents.' />
                <FactTab text='1660: The Restoration (of the monarchy). Charles (King of Scotland) invited to come back as King Charles II after Oliver Cromwell’s death.' />
                <FactTab text='1665: Great Plague' />
                <FactTab text='Glorious Revolution (1688): English Protestants asked Mary’s husband William of Orange (of the Netherlands) to proclaim himself king, as didn’t want a Catholic king. He faced no resistance.' />
                <FactTab text='During Queen Elizabeth I’s reign, English settlers began to move to North American colonies.' />

                <Text style={styles.title}>People</Text>
                <FactTab text='Sir Robert Walpole: first PM (1721-1742) as King George I (a German) relied heavily on ministers because of his poor English' />
                <FactTab text='Oliver Cromwell: titled Lord Protector (circa 1640s-1650s) and led Britain whilst it was without a monarch' />
                <FactTab text='King Alfred the Great united the Anglo-Saxon kingdoms of England and defeated the Vikings.' />
                <FactTab text='Isambard Kingdom Brunel: engineer (bridges, trains, tunnels, ships)' />
                <FactTab text='Dylan Thomas: Welsh poet (“Under Milk Wood” & “Do Not Go Gentle into that Good Night”)' />
                <FactTab text='Robert Burns: Scottish poet (“The Bard”), Auld Lang Syne' />
                <FactTab text='Richard Arkwright: Efficient and profitable factory owner during Industrial Revolution' />
                <FactTab text='Sake Dean Mahomet: set up first curry house in Britain and introduced shampooing' />
                <FactTab text='Florence Nightingale: founder of modern nursing' />
                <FactTab text='Emmeline Pankhurst: Suffrage leader' />
                <FactTab text='Rudyard Kipling: Indian-born author and poet. Work reflected idea that British empire was a force for good.' />
                <FactTab text='George and Robert Stevenson: famous pioneers of railway engines' />
                <FactTab text='St Columba & St Augustine: led missionaries from Rome.' />
                <FactTab text='Sir Francis Drake: Elizabethan sailor who helped defeat Spanish Armada and who later sailed around the world.' />
                <FactTab text='Hugunots: French Protestants feeling prosecution settled in England pre-1720' />
                <FactTab text='Henry VIII: famous for marrying 6 times and breaking away from Church of Rome so he could get a divorce. Wales was united with England under his rule. Wives (in order):
(1) Catherine of Aragon
(2) Anne Boleyn
(3) Jane Seymour
(4) Anne of Cleves
(5) Catherine Howard
(6) Catherine Parr' />
                <FactTab text='Margaret Thatcher was first female PM and the longest serving PM of the 20th century.' />
                <FactTab text='Alexander Fleming: Scottish doctor who discovered penicillin (1928)' />
                <FactTab text='Clement Attlee: Churchill’s Deputy PM. Became PM in 1945. Nationalised major industries and created NHS.' />
                <FactTab text='Mary Peters: Olympic athlete who promoted sport and tourism in Northern Ireland.' />
                <FactTab text='Roald Dahl: Welsh author (“Charlie and the Chocolate Factory” & “George’s Marvellous Medicine”).' />
                <FactTab text='Sir Arthur Conan Doyle: Scottish author (“Sherlock Holmes”)' />

            </ScrollView>
        )
    }
}

const styles = EStyleSheet.create({
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: '16rem',
        color: '#777777',
        marginBottom: '10rem',
        marginTop: '20rem',
    },
    option: {
        justifyContent: 'space-between',
        // flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginTop: '5rem',
        borderRadius: 10,
        paddingLeft: '15rem',
        paddingRight: '22rem',
        paddingTop: '16rem',
        paddingBottom: '16rem',
    },
    option_title: {
        fontFamily: 'Nunito-Regular',
        fontSize: '18rem',
    },
    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
    },
    header_text: {
        color: 'white',
        fontSize: '20rem',
        fontFamily: 'Nunito-Regular',
    }
})
