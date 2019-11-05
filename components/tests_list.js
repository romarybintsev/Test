// Imports

import React, { Component } from 'react';
import { ProgressBarAndroid, StatusBar, Image, Dimensions, ProgressViewIOS, TouchableWithoutFeedback, FlatList, StyleSheet, Text, View, Button, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var { height, width } = Dimensions.get('window');
if (height > 667) {
  HEADER_MAX_HEIGHT = height / 3
  HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? height / 8 : height/10
}
else {
  HEADER_MAX_HEIGHT = height / 2.5
  HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? height / 8 : height/10
}

// Tests List

export class TestsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      tests_stats: [],
    }

  }
  render() {
    that = this;
    data = this.props.data;
    number_completed = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].result != null) {
        number_completed += 1
      }
    }
    if (data.length) {
      number_completed_percent = (number_completed / data.length)
    }
    else {
      number_completed_percent = 0
    }
    console.log('percent', number_completed, data.length, number_completed_percent)
    avg_pct_mark = this.props.tests_stats.avg_pct_mark != null ? Number((this.props.tests_stats.avg_pct_mark).toFixed(0)) : 0
    avg_pass_rate = this.props.tests_stats.avg_pass_rate != null ? Number((this.props.tests_stats.avg_pass_rate * 100).toFixed(0)) : 0

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const testcompletedHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT / 2.2, HEADER_MAX_HEIGHT],
      extrapolate: 'clamp'
    })

    const tabHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - EStyleSheet.value('50rem'), -EStyleSheet.value('100rem')],
      extrapolate: 'clamp'
    })
    const tabOpacity = this.state.scrollY.interpolate({
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT) / 3],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    const listHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT + EStyleSheet.value('60rem'), HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    function icon_check(score, pass_mark, test_id) {
      if (test_id <= free_tests || premium == 1) {
        if (score != null) {
          if (score >= pass_mark) {
            icon_name = 'check-circle'
            icon_color = '#4AB027'
          }
          else {
            icon_name = 'times-circle'
            icon_color = '#EA2557'
          }
        }
        else {
          icon_name = 'chevron-right'
          icon_color = '#E8E8E8'
        }
      } else {
        icon_name = 'lock'
        icon_color = '#E8E8E8'
      }
      return {
        icon_name: icon_name,
        icon_color: icon_color,
      }
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header_title}>All Tests</Text>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
        }}>

          <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View style={[styles.test_completed_view, { marginTop: testcompletedHeight }]}>
              <Image style={styles.image} source={require('../assets/img/medal.png')} />
              <Animated.View style={{ marginTop: EStyleSheet.value('-10rem') }}>
                <Text style={styles.main_view_text}>Tests Completed</Text>
                <View style={{ alignItems:'center' }}>
                  <Text style={styles.bar_text}>{number_completed} of {data.length} completed</Text>
                </View>
                {Platform.OS === 'ios' ?
                <ProgressViewIOS style={{ transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }], }} progress={number_completed_percent} progressTintColor={'orange'} trackTintColor={'gray'} />
                :
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color={'orange'} progress={number_completed_percent} /> }


              </Animated.View>
            </Animated.View>
          </LinearGradient>
        </Animated.View>
        <Animated.View style={[styles.percent_tab, { marginTop: tabHeight, opacity: tabOpacity, }]}>
          <View style={styles.tab_view}><Text style={styles.tab_view_text}>PASS RATE</Text><Text style={styles.tab_view_text2}>{avg_pass_rate}%</Text></View>
          <View style={styles.tab_view}><Text style={styles.tab_view_text}>AVERAGE MARK</Text><Text style={styles.tab_view_text2}>{avg_pct_mark}%</Text></View>

        </Animated.View>
        <Animated.FlatList
          overScrollMode={'never'}
          style={{ flex: 1, marginTop: listHeight, backgroundColor:'#E8E8E8' }}
          contentContainerStyle={{ paddingBottom: EStyleSheet.value('20rem') }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
          )}
          data={data}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback style={styles.list_item} onPress={() => item.id <= free_tests || premium == 1 ? this.props.navigation.navigate('Quiz', { test_id: item.id, test_name: item.name }) : this.props.navigation.navigate('Rewards')}>
              <View style={styles.list_title_view}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.list_title}>{item.name}</Text>
                  {item.id <= free_tests || premium == 1 ?
                    item.result != null ? <Text style={{ fontSize: EStyleSheet.value('14rem'), fontFamily: 'Nunito-Light' }}>{item.result} of {item.num_questions} answered correctly </Text> : <Text style={{ fontSize: EStyleSheet.value('14rem'), fontFamily: 'Nunito-Light' }}>Test not attempted</Text> : <Text style={{ fontSize: EStyleSheet.value('14rem'), fontFamily: 'Nunito-Light' }}>Premium required</Text>}
                </View>
                <View style={{ flex: 0, alignSelf: 'center' }}>
                  {/* <Button title='help' color={icon_check(item.result, item.pass_mark).icon_color} /> */}
                  <FontAwesomeIcon size={EStyleSheet.value('28rem')} color={icon_check(item.result, item.pass_mark, item.id).icon_color} icon={icon_check(item.result, item.pass_mark, item.id).icon_name} />
                </View>
              </View>
            </TouchableWithoutFeedback>}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  list_title_view: {
    justifyContent: 'space-between',
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: '5rem',
    marginLeft: '15rem',
    marginRight: '15rem',
    borderRadius: 10,
    paddingLeft: '15rem',
    paddingRight: '22rem',
    paddingTop: '22rem',
    paddingBottom: '22rem',
  },
  list_title: {
    fontSize: '22rem',
    color: 'rgb(64,64,64)',
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
  },
  main_view_text: {
    color: 'white',
    fontSize: '30rem',
    fontFamily: 'Nunito-Bold',
  },
  header_title: {
    position: 'absolute',
    fontFamily: 'Nunito-Regular',
    zIndex: 10,
    color: 'white',
    marginTop: HEADER_MIN_HEIGHT - 40,
    fontSize: '20rem',
    alignSelf: 'center',
  },
  bar_text: {
    color: 'white',
    fontFamily: 'Nunito-Light',
    fontSize: '12rem',
    marginBottom: '5rem',
  },
  tab_view: {
    alignSelf: 'center',
  },
  tab_view_text: {
    textAlign: 'center',
    fontSize: '14rem',
    color: 'gray',
    fontFamily: 'Nunito-Light',
    marginBottom: '10rem',
  },
  tab_view_text2: {
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: '18rem',
    color: '#4AB027'
  },
  image: {
    alignSelf: 'center',
    width: '60rem',
    height: '60rem',
    marginRight: '20rem'
  },
  percent_tab: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: '100rem',
    width: '100% - 60rem',
    marginLeft: '30rem',
    marginRight: '30rem',
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: 'rgba(0,0,0, 0.2)', // IOS
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
  },
  test_completed_view: {
    flexDirection: 'row',
    marginLeft: '30rem',
    marginRight: '30rem',
  }
})