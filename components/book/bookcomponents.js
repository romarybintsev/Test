import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableWithoutFeedback, Image} from 'react-native';
import { Header } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import {images} from './bookimages';
import AutoHeightImage from 'react-native-auto-height-image';

export const points = (bullet_list) => bullet_list.map(bullet =>{
    return(
        <View style={{flexDirection: 'row',justifyContent:'center', marginBottom: EStyleSheet.value('5rem')}}>
        <Text style={{marginTop: EStyleSheet.value('2rem')}}>{'\u2022'}</Text>
        <Text style={{flex: 1, paddingLeft: EStyleSheet.value('15rem'), fontFamily:'Nunito-Regular', fontSize: EStyleSheet.value('16rem')}}>{bullet}</Text>
        </View>
    )
})
export function BlueCard(props){
    return(
        <View style={{backgroundColor: '#eef8fb',marginTop: EStyleSheet.value('20rem'), marginBottom: EStyleSheet.value('20rem')}}>
            <View style={{borderBottomColor: '#afdfee', borderBottomWidth: 3}}>
            <Text style={{fontFamily: 'Nunito-Bold',padding: EStyleSheet.value('10rem') }}>IN THIS CHAPTER THERE IS INFORMATION ABOUT:</Text>
            </View>
            <View style={{padding: EStyleSheet.value('20rem')}}>
                {points(props.list)}
            </View>
        </View>
    )
}

export function GreyCard(props){
    return(
        <View style={{backgroundColor: 'lightgrey', marginTop: EStyleSheet.value('15rem'),padding: EStyleSheet.value('5rem'), borderRadius: EStyleSheet.value('5rem')}}>
            <Text style={book_styles.text}>
                {props.text}
            </Text>
        </View>
    )
}

export function PinkCard(props){
    return(
        <View style={{backgroundColor: '#ffe4e7', padding: EStyleSheet.value('5rem'), marginTop: EStyleSheet.value('15rem'),borderRadius: EStyleSheet.value('5rem')}}>
            <Text>
    <Text style={{fontFamily: 'Nunito-Bold', fontSize: EStyleSheet.value('16rem')}}>{props.bold}</Text>
            <Text style={book_styles.text}>{props.text}</Text>
            </Text>
        </View>
    )
}

export function GreenCard(props){
    return(
        [<Text style={[book_styles.title, {marginTop: EStyleSheet.value('15rem'),}]}>Check that you understand:</Text>,
        <View style={{backgroundColor: '#a8e4a0', marginTop: EStyleSheet.value('15rem'), padding: EStyleSheet.value('10rem'), borderRadius: EStyleSheet.value('5rem')}}>
            {points(props.list)}
        </View>]
    )
}

export function BoldStart(props){
    return(
        <Text style={{marginTop: EStyleSheet.value('15rem')}}>
            <Text style={{fontFamily:'Nunito-Bold', fontSize: EStyleSheet.value('16rem')}}>{props.bold}</Text>
            <Text style={book_styles.text}>{props.text}</Text>
        </Text>
    )
}

export function YellowCard(props){
    const column_items = (list) => list.map(item => {
        return(
            <Text style={book_styles.text}>{item}</Text>
        )
    })

    const columns = (list) => list.map(item =>{
        return(
            <View style={{flex:1}}>
                <Text style={{fontFamily:'Nunito-Bold', fontSize:EStyleSheet.value('18rem')}}>{item.title}</Text>
                {column_items(item.list)}
            </View>
        )
    })
    return(
        <View style={{backgroundColor: '#FFFACD', marginTop: EStyleSheet.value('15rem'), padding: EStyleSheet.value('10rem'), borderRadius: EStyleSheet.value('5rem'), flexDirection: 'row', justifyContent: 'space-between'}}>
            {columns(props.info)}
        </View>
    )
}
export function ImageCard(props){
    const [wrapperWidth, setWrapperWidth] = React.useState(0)
    return(
        <View onLayout={event => setWrapperWidth(event.nativeEvent.layout.width)}>
            <AutoHeightImage source={images[props.img]} width={wrapperWidth}/>
            <View style={{backgroundColor: '#2a2a2a', padding: EStyleSheet.value('10rem')}}>
                <Text style={[book_styles.text, {color: 'white'}]}>{props.text}</Text>
            </View>
        </View>
    )
}

export function CustomHeader(props){
    return(
        <View style={{backgroundColor: '#396afc',}} >
        <View style={{height: StaticSafeAreaInsets.safeAreaInsetsTop,  }} />
        <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <TouchableWithoutFeedback onPress={() => props.navigation.popToTop()}>
          <View
            style={{
                flex: 1,
              padding: EStyleSheet.value("16rem"),
            }}
          >
            <FontAwesomeIcon
              icon={"chevron-left"}
              size={EStyleSheet.value("16rem")}
              color={'white'}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{flex:9, flexDirection: 'row', alignItems:'center'}}>
            <Text style={{color: 'white',fontSize: EStyleSheet.value('20rem'),fontFamily: 'Nunito-Regular',}}>{props.title}</Text>
            </View>
        </View>
        </View>
    )
}

export const book_styles = EStyleSheet.create({
    text: {
        fontFamily: 'Nunito-Regular',
        fontSize: '16rem',
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: '24rem',
    },
    subtitle:{
        fontFamily: 'Nunito-Bold',
        fontSize: '18rem', 
    },
    subtitle2:{
        fontFamily: 'Nunito-Bold',
        fontSize: '16rem', 
    }
})