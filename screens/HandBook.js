import React from 'react';
import {ScrollView,View,  Text,TouchableWithoutFeedback,} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Header } from 'react-navigation-stack';


function ChapterOption(props){
    return(
        <TouchableWithoutFeedback onPress={props.onclick}>
        <View style={styles.option}>
            <Text style={styles.option_title}>{props.title}</Text>
            <FontAwesomeIcon style={{flex:1}} size={EStyleSheet.value('26rem')} color='#E8E8E8' icon='chevron-right' />
        </View>
        </TouchableWithoutFeedback>
    )
}
export default class HandBook extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            headerTitle: <Text style={styles.header_text}>Handbook</Text>,
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#396afc',
            },
            headerLeft: null,
        };
    };
    render(){
        return(
            <ScrollView contentContainerStyle={{paddingBottom: EStyleSheet.value('20rem')}} style={{ flex: 1, paddingLeft: EStyleSheet.value('20rem'), paddingRight: EStyleSheet.value('20rem'), backgroundColor: '#E8E8E8' }}> 
                <Text style={styles.title}>
                    Chapter 1
                </Text>
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 1})} title='Introduction' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 2})} title='The values and principles of the UK' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 3})} title='Becoming a permanent citizen' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 4})} title='Taking the life in the UK test' />

                <Text style={styles.title}>Chapter 2</Text>
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 5})} title='Introduction' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 6})} title='What is the UK?' />

                <Text style={styles.title}>Chapter 3</Text>
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 7})} title='Introduction' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 8})} title='Early Britain' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 9})} title='The Middle Ages' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 10})} title='The Tudors and the Stuarts' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 11})} title='A global power' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 12})} title='The 20th century' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 13})} title='Britain since 1945' />

                <Text style={styles.title}>Chapter 4</Text>
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 14})} title='Introduction' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 15})} title='The UK today' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 16})} title='Religion' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 17})} title='Customs and traditions' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 18})} title='Sports' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 19})} title='Arts and culture' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 20})} title='Leisure' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 21})} title='Places of interest' />

                <Text style={styles.title}>Chapter 5</Text>
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 22})} title='Introduction' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 23})} title='The British constitution' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 24})} title='The government' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 25})} title='The UK and international institutions' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 26})} title='Respecting the law' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 27})} title='Fundamental principles' />
                <ChapterOption onclick={() => this.props.navigation.navigate('Chapter', {page_number: 28})} title='Your role in the community' />
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
        alignItems: 'center',
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
        flex: 4,
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
