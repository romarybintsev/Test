// Imports

import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';

// HomeCard Option

export class HomeCard extends React.Component {
    render() {
        navigate_to = this.props.navigate_to
        title = this.props.title
        second_text = this.props.second_text
        question_bank = this.props.question_bank

        return (
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={question_bank == 0 ? null : navigate_to}>
                <View style={[styles.option, { opacity: question_bank == 0 ? 0.4 : 1 }]}>
                    <Text style={{ fontFamily: 'Nunito-Regular', fontSize: EStyleSheet.value('20rem'), textAlign: 'center', color: '#396afc' }}>{title}</Text>
                    <Text style={{ fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('12rem'), textAlign: 'center' }}>{second_text}</Text>
                    {question_bank > 0 ? <View style={{ position: 'absolute', top: 0, right: EStyleSheet.value('15rem'), bottom: 0, justifyContent: 'center', }}>
                        <FontAwesomeIcon size={EStyleSheet.value('34rem')} color='#FCCB39' icon='exclamation-circle' />
                    </View> : null}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = EStyleSheet.create({
    option: {
        padding: '10rem',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        marginLeft: '20rem',
        marginRight: '20rem',
        marginTop: '20rem',
    }
})