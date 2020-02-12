import React from 'react'
import {View, Text, ScrollView,TouchableWithoutFeedback} from 'react-native'
import Chapter1Part1 from '../components/book/chapter1/1'
import Chapter1Part2 from '../components/book/chapter1/2'
import Chapter1Part3 from '../components/book/chapter1/3'
import Chapter1Part4 from '../components/book/chapter1/4'
import Chapter2Part1 from '../components/book/chapter2/1'
import Chapter2Part2 from '../components/book/chapter2/2'
import Chapter3Part1 from '../components/book/chapter3/1'
import Chapter3Part2 from '../components/book/chapter3/2'
import Chapter3Part3 from '../components/book/chapter3/3'
import Chapter3Part4 from '../components/book/chapter3/4'
import Chapter3Part5 from '../components/book/chapter3/5'
import Chapter3Part6 from '../components/book/chapter3/6'
import Chapter3Part7 from '../components/book/chapter3/7'
import Chapter4Part1 from '../components/book/chapter4/1'
import Chapter4Part2 from '../components/book/chapter4/2'
import Chapter4Part3 from '../components/book/chapter4/3'
import Chapter4Part4 from '../components/book/chapter4/4'
import Chapter4Part5 from '../components/book/chapter4/5'
import Chapter4Part6 from '../components/book/chapter4/6'
import Chapter4Part7 from '../components/book/chapter4/7'
import Chapter4Part8 from '../components/book/chapter4/8'
import Chapter5Part1 from '../components/book/chapter5/1'
import Chapter5Part2 from '../components/book/chapter5/2'
import Chapter5Part3 from '../components/book/chapter5/3'
import Chapter5Part4 from '../components/book/chapter5/4'
import Chapter5Part5 from '../components/book/chapter5/5'
import Chapter5Part6 from '../components/book/chapter5/6'
import Chapter5Part7 from '../components/book/chapter5/7'
import { NavigationEvents } from 'react-navigation';
import {CustomHeader} from '../components/book/bookcomponents'
import EStyleSheet from 'react-native-extended-stylesheet';


export default class Chapter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page_number: this.props.navigation.getParam('page_number', 1),
        }
    }

    open_chapter(){
        let n = this.state.page_number
        if(this.scrollView){
            this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
        }
        if(n===1){
            return ({chapter: <Chapter1Part1 />, title: 'Chapter 1: Introduction'})
        }
        else if(n===2){
            return ({chapter: <Chapter1Part2 />, title: 'Chapter 1: The values and principles of the UK'})
        }
        else if(n===3){
            return ({chapter: <Chapter1Part3 />, title: 'Chapter 1: Becoming a permanent resident'})
        }
        else if(n===4){
            return ({chapter: <Chapter1Part4 />, title: 'Chapter 1: Taking the Life in the UK test'})
        }
        else if(n===5){
            return ({chapter: <Chapter2Part1 />, title: 'Chapter 2: Introduction'})
        }
        else if(n===6){
            return ({chapter: <Chapter2Part2 />, title: 'Chapter 2: What is the UK?'})
        }
        else if(n===7){
            return ({chapter: <Chapter3Part1 />, title: 'Chapter 3: Introduction'})
        }
        else if(n===8){
            return ({chapter: <Chapter3Part2 />, title: 'Chapter 3: Early Britain'})
        }
        else if(n===9){
            return ({chapter: <Chapter3Part3 />, title: 'Chapter 3: The Middle Ages'})
        }
        else if(n===10){
            return ({chapter: <Chapter3Part4 />, title: 'Chapter 3: The Tudors and Stuarts'})
        }
        else if(n===11){
            return ({chapter: <Chapter3Part5 />, title: 'Chapter 3: A global power'})
        }
        else if(n===12){
            return ({chapter: <Chapter3Part6 />, title: 'Chapter 3: The 20th century'})
        }
        else if(n===13){
            return ({chapter: <Chapter3Part7 />, title: 'Chapter 3: Britain since 1945'})
        }
        else if(n===14){
            return ({chapter: <Chapter4Part1 />, title: 'Chapter 4: Introduction'})
        }
        else if(n===15){
            return ({chapter: <Chapter4Part2 />, title: 'Chapter 4: The UK today'})
        }
        else if(n===16){
            return ({chapter: <Chapter4Part3 />, title: 'Chapter 4: Religion'})
        }
        else if(n===17){
            return ({chapter: <Chapter4Part4 />, title: 'Chapter 4: Customs and Traditions'})
        }
        else if(n===18){
            return ({chapter: <Chapter4Part5 />, title: 'Chapter 4: Sports'})
        }
        else if(n===19){
            return ({chapter: <Chapter4Part6 />, title: 'Chapter 4: Arts and culture'})
        }
        else if(n===20){
            return ({chapter: <Chapter4Part7 />, title: 'Chapter 4: Leisure'})
        }
        else if(n===21){
            return ({chapter: <Chapter4Part8 />, title: 'Chapter 4: Places of interest'})
        }
        else if(n===22){
            return ({chapter: <Chapter5Part1 />, title: 'Chapter 5: Introduction'})
        }
        else if(n===23){
            return ({chapter: <Chapter5Part2 />, title: 'Chapter 5: The British constitution'})
        }
        else if(n===24){
            return ({chapter: <Chapter5Part3 />, title: 'Chapter 5: The government'})
        }
        else if(n===25){
            return ({chapter: <Chapter5Part4 />, title: 'Chapter 5: The UK and international institutions'})
        }
        else if(n===26){
            return ({chapter: <Chapter5Part5 />, title: 'Chapter 5: Respecting the law'})
        }
        else if(n===27){
            return ({chapter: <Chapter5Part6 />, title: 'Chapter 5: Fundamental principles'})
        }
        else if(n===28){
            return ({chapter: <Chapter5Part7 />, title: 'Chapter 5: Your role in the community'})
        }
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null,
            headerLeft: null,
        };
    };
    render(){
        return(
            <View style={{flex: 1, }}>
                <CustomHeader title={this.open_chapter().title || null} navigation={this.props.navigation} />
                <ScrollView ref={ref => (this.scrollView = ref)} style={{padding:EStyleSheet.value('20rem')}} contentContainerStyle={{paddingBottom: EStyleSheet.value('40rem')}}>

                {this.open_chapter().chapter || null}

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: EStyleSheet.value('20rem'),}}>
                {this.state.page_number !== 1 ?
                <TouchableWithoutFeedback onPress={() => this.setState({page_number: this.state.page_number - 1})}>
                <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding:EStyleSheet.value('20rem'),marginRight:EStyleSheet.value('5rem'), borderColor: '#6495ed', borderWidth: EStyleSheet.value('1rem'), borderRadius: EStyleSheet.value('10rem'), backgroundColor: '#f0f8ff' }}><Text style={{fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Bold', color: 'black'}}>Previous</Text></View>
                </TouchableWithoutFeedback> : null }
                {this.state.page_number !== 28 ?
                <TouchableWithoutFeedback onPress={() => this.setState({page_number: this.state.page_number + 1})}>
                <View style={{flex:1,justifyContent: 'center', alignItems: 'center', padding:EStyleSheet.value('20rem'),marginLeft:EStyleSheet.value('5rem'), borderColor: '#6495ed', borderWidth: EStyleSheet.value('1rem'), borderRadius: EStyleSheet.value('10rem'), backgroundColor: '#f0f8ff'  }}><Text style={{fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Bold', color: 'black'}}>Next</Text></View>
                </TouchableWithoutFeedback> : null }
                </View>
                </ScrollView>

            </View>
        )
    }
}