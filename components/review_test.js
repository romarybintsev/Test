// Imports

import React from 'react';
import { StatusBar, Dimensions, TouchableWithoutFeedback, Text, View, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
import { VictoryContainer, VictoryPie, VictoryLabel } from "victory-native";
import { Defs, Stop } from "react-native-svg";
import { LinearGradient as LinGrad } from 'react-native-svg';
import EStyleSheet from 'react-native-extended-stylesheet';

// Variables

var { height, width } = Dimensions.get('window');
if (height > 736) {
  REVIEW_MAX_HEIGHT = height / 2
}
else if (height > 667 && height <= 736){
  REVIEW_MAX_HEIGHT = height / 1.8
}
else {
  REVIEW_MAX_HEIGHT = height / 1.9
}
REVIEW_MIN_HEIGHT = height / 8


// Review Page

export class ReviewTest extends React.Component {
  constructor(props) {
    super(props);

    score = this.props.score
    pass_mark = this.props.pass_mark
    data = this.props.data
    ans = this.props.ans
    incorrect_data = []

    this.state = {
      scrollY: new Animated.Value(0),
      score: score,
      data: this.getData(0, 1),
      len: data.length,
      all_questions: true,
      first_load: true,
    }
    var len = data.length
    for (let i = 0; i < len; i++) {
      data[i]['question_num'] = i + 1
      if (ans[i].length > 1) {
        data[i]['user_ans'] = ans[i].sort()
        data[i]['correct'] = data[i].correct.split(",").sort()
        for (l = 0; l < data[i]['user_ans'].length; l++) {
          if (data[i]['user_ans'][l] !== data[i]['correct'][l]) {
            incorrect_data.push(data[i])
            break
          }
        }
      } else {
        data[i]['user_ans'] = [ans[i]]
        data[i]['correct'] = [data[i].correct]
        for (l = 0; l < data[i]['user_ans'].length; l++) {
          if (data[i]['user_ans'][l] !== data[i]['correct'][l]) {
            incorrect_data.push(data[i])
          }
        }
      }
    }


  }
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.setState({
        data: this.getData(this.state.score, this.state.len)
      });
    }, 500);
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  getData(score, total) {
    return [{ x: 1, y: score }, { x: 2, y: total - score }];
  }

  choice_check(answer, correct) {
    for (i = 0; i < correct.length; i++) {
      if (answer[i] !== correct[i]) {
        return false
      }
    }
    return true
  }
  render() {
    var len = data.length
    var text = this.state.score.toString() + '/' + len.toString() + '\n' + (this.state.score >= pass_mark ? 'WELL DONE' : 'TRY AGAIN')
    const defaultData = [{ x: 1, y: 1 }];
    const sharedProps = {
      standalone: false,
      width: EStyleSheet.value('250rem'),
      height: EStyleSheet.value('250rem'),
      labels: () => null
    };
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, REVIEW_MAX_HEIGHT - REVIEW_MIN_HEIGHT],
      outputRange: [REVIEW_MAX_HEIGHT, REVIEW_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const tabsHeight = this.state.scrollY.interpolate({
      inputRange: [0, REVIEW_MAX_HEIGHT - REVIEW_MIN_HEIGHT],
      outputRange: [REVIEW_MAX_HEIGHT + 15, REVIEW_MIN_HEIGHT + 15],
      extrapolate: 'clamp'
    })
    const listHeight = this.state.scrollY.interpolate({
      inputRange: [0, REVIEW_MAX_HEIGHT - REVIEW_MIN_HEIGHT],
      outputRange: [REVIEW_MAX_HEIGHT + 70, REVIEW_MIN_HEIGHT + 35],
      extrapolate: 'clamp'
    })

    const user_answer = (item) => item.user_ans.map(function (k) {
      return (
        <Text key={k} style={{ fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Regular' }}>{item.options[k]}</Text>
      )
    })
    const correct_answer = (item) => item.correct.map(function (k) {
      return (
        <Text key={k} style={{ fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Regular' }}>{item.options[k]}</Text>
      )
    })

    return (
      <View style={{ flex: 1, backgroundColor: '#E8E8E8', padding: 20, }}>
        <StatusBar barStyle="light-content" />
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
          zIndex: 5,
        }}>

          <LinearGradient colors={['#396afc', '#2948ff']} style={{ flex: 1 }}>
            <View style={{ marginTop: REVIEW_MIN_HEIGHT }}>
              <Text style={{ textAlign: 'center', fontFamily: 'Nunito-Light', fontSize: EStyleSheet.value('16rem'), color: 'white' }}>Test Result</Text>
              <VictoryContainer width={EStyleSheet.value('250rem')} height={EStyleSheet.value('250rem')} style={{ alignSelf: 'center', marginTop: -35 }}>
                <Defs>
                  <LinGrad id="gradient1"
                    x1="0%" y1="0%" x2="0%" y2="100%"
                  >
                    <Stop offset="0%" stopColor="rgba(217,238,150,1)" />
                    <Stop offset="100%" stopColor="rgba(167,237,104,1)" />
                  </LinGrad>
                </Defs>
                <VictoryPie
                  {...sharedProps}
                  data={defaultData}
                  innerRadius={EStyleSheet.value('69rem')}
                  style={{
                    data: { fill: "gray", opacity: d => 0.3 }
                  }}
                />
                <VictoryPie
                  {...sharedProps}
                  animate={{ duration: 1000 }}
                  data={this.state.data}
                  innerRadius={EStyleSheet.value('69rem')}
                  cornerRadius={({ datum }) => {
                    if (datum.x == 1) {
                      return 25
                    }
                    else {
                      return 0
                    }
                  }}
                  style={{
                    data: {
                      fill: ({ datum }) => {
                        return datum.x === 1 ? "url(#gradient1)" : "transparent";
                      }
                    }
                  }}
                />
                <VictoryContainer style={{ marginTop: EStyleSheet.value('7rem') }}>
                  <VictoryLabel
                    textAnchor="middle" verticalAnchor='middle'
                    x={EStyleSheet.value('125rem')} y={EStyleSheet.value('125rem')}
                    text={text}
                    style={[{ fontSize: EStyleSheet.value('36rem'), fill: 'white', fontFamily: 'Roboto-Regular', fontWeight: '600', }, { fill: 'white', fontFamily: 'Roboto-Regular', fontWeight: '300', }]}
                  />
                </VictoryContainer>
              </VictoryContainer>
              <View style={{ marginLeft: EStyleSheet.value('30rem'), marginRight: EStyleSheet.value('30rem'), marginTop: EStyleSheet.value('-35rem'), alignSelf: 'center' }}>
                <Text style={{ fontSize: EStyleSheet.value('18rem'), color: 'white', fontFamily: 'Nunito-Bold', textAlign: 'center' }}>{this.state.score >= pass_mark ? 'Congratulations, you passed!' : 'You did not pass this time.'}</Text>
                <Text style={{ fontSize: EStyleSheet.value('16rem'), color: 'white', fontFamily: 'Nunito-Light', textAlign: 'center' }}>All incorrectly answered questions have been added to your Challenge Bank.</Text>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
        <Animated.View style={{
          marginTop: tabsHeight,
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginLeft: EStyleSheet.value('10rem'),
          marginRight: EStyleSheet.value('10rem'),
          borderColor: '#396afc',
          borderWidth: 2,
          borderRadius: 12,
          zIndex: 1,
        }}>
          <TouchableWithoutFeedback onPress={() => { this.setState({ all_questions: true }) }}>
            <View style={[styles.view_tab_both, { backgroundColor: this.state.all_questions ? '#396afc' : '#E8E8E8', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }]}><Text style={[{ color: this.state.all_questions ? 'white' : '#396afc', }, styles.view_tab_text]}>All Questions</Text></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => { this.setState({ all_questions: false }) }}>
            <View style={[styles.view_tab_both, { backgroundColor: !this.state.all_questions ? '#396afc' : '#E8E8E8', borderTopRightRadius: 10, borderBottomRightRadius: 10, }]}><Text style={[{ color: !this.state.all_questions ? 'white' : '#396afc' }, styles.view_tab_text]}>Incorrect</Text></View>
          </TouchableWithoutFeedback>
        </Animated.View>
        <Animated.FlatList
          overScrollMode={'never'}
          style={{ flex: 1, marginTop: listHeight, zIndex: 0, }}
          contentContainerStyle={{ paddingBottom: EStyleSheet.value('20rem') }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
          )}
          data={this.state.all_questions ? data : incorrect_data}
          renderItem={({ item }) =>

            <View style={styles.list_title_view}>
              <View style={{ flex: 1 }}>
                <View style={{ paddingLeft: EStyleSheet.value('22rem'), paddingRight: EStyleSheet.value('22rem'), }}>
                  <Text style={styles.list_title}>Question {item.question_num} of {len}</Text>
                  <Text style={{ fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Regular', paddingBottom: EStyleSheet.value('12rem'), }}>{item.question}</Text>
                </View>
                {this.choice_check(item.user_ans, item.correct) ? null :
                  <View style={{ paddingLeft: EStyleSheet.value('22rem'), paddingRight: EStyleSheet.value('22rem'), backgroundColor: '#feebf0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: 1, paddingBottom: EStyleSheet.value('12rem') }}>
                      <Text style={styles.list_title}>Your Answer</Text>
                      {user_answer(item)}
                    </View>
                    <View style={{ paddingLeft: EStyleSheet.value('5rem') }}>
                      <FontAwesomeIcon size={EStyleSheet.value('28rem')} color={'#EA2557'} icon={'times-circle'} />
                    </View>
                  </View>
                }
                <View style={{ paddingLeft: EStyleSheet.value('22rem'), paddingRight: EStyleSheet.value('22rem'), backgroundColor: '#f0feeb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flex: 1, paddingBottom: EStyleSheet.value('12rem') }}>
                    <Text style={styles.list_title}>{this.choice_check(item.user_ans, item.correct) ? 'Your Answer' : 'Correct Answer'}</Text>
                    {correct_answer(item)}
                  </View>
                  <View style={{ paddingLeft: EStyleSheet.value('5rem') }}>
                    <FontAwesomeIcon size={EStyleSheet.value('28rem')} color={'#4AB027'} icon={'check-circle'} />
                  </View>
                </View>
                <View style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingLeft: EStyleSheet.value('22rem'), paddingRight: EStyleSheet.value('22rem'), paddingBottom: EStyleSheet.value('22rem'), backgroundColor: '#f0feeb' }}>
                  <Text style={{
                    fontFamily: 'Nunito-Light',
                    color: 'gray',
                    fontSize: EStyleSheet.value('14rem'),
                  }}>Explanation</Text>
                  <Text style={{ fontSize: EStyleSheet.value('16rem'), fontFamily: 'Nunito-Regular' }}>{item.explanation}</Text>
                </View>
              </View>
            </View>}
        />
      </View>
    )
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
    elevation: 5,
    marginTop: '5rem',
    marginLeft: '10rem',
    marginRight: '10rem',
    borderRadius: '10rem',
  },
  list_title: {
    fontFamily: 'Nunito-Light',
    color: 'gray',
    fontSize: '14rem',
    paddingTop: '12rem',
  },
  view_tab_both: {
    flex: 1,
    paddingLeft: '15rem',
    paddingRight: '22rem',
    paddingTop: '12rem',
    paddingBottom: '12rem',
  },
  view_tab_text: {
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  }
})