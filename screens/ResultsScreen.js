// Imports

import React from "react";
import { BackHandler,View,Text,TouchableWithoutFeedback } from "react-native";
// import CategoryReview from "../components/category_review";
import ReviewTest from "../components/review_test";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import ResultsComponent from "../components/results";
// Review Page

export default class ResultsScreen extends React.Component {
  score = this.props.navigation.getParam("score", null);
  pass_mark = this.props.navigation.getParam("pass_mark", null);
  data = this.props.navigation.getParam("data", null);
  ans = this.props.navigation.getParam("ans", null);
  challenge_bank = this.props.navigation.getParam("challenge_bank", null);

  constructor(props) {
    super(props);
    this.state = {
      detailed_review: false,
      review_modal: false,
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerTitle: <Text style={styles.header_text}>Review</Text>,
      headerTintColor: 'white',
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#396afc',
        borderBottomWidth: 0,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0 // remove shadow on iOS
      },
      headerRight: <TouchableWithoutFeedback onPress={() => navigation.popToTop()}>
        <View style={{ paddingRight: EStyleSheet.value('15rem') }}>
        <FontAwesomeIcon size={EStyleSheet.value('24rem')} color={'white'} icon={'times-circle'} />
        </View>
      </TouchableWithoutFeedback>,
      tabBarVisible: false,
    };
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
  render() {
    console.log("yayaya");
    console.log(this.score, this.data, this.ans);
    return this.state.detailed_review ? (
      <ResultsComponent score={this.score} data={this.data} ans={this.ans} />
    ) : (
      <ReviewTest detailed_review={() => this.setState({ detailed_review: true })} challenge_bank={this.challenge_bank} score={this.score} pass_mark={this.pass_mark} ans={this.ans} data={this.data} go_back={() => this.props.navigation.popToTop()} />
    );
  }
}

const styles = EStyleSheet.create({
  header_text: {
    color: "white",
    fontSize: "18rem",
    fontFamily: "Nunito-Bold",
    textAlign: "center",
    alignSelf: "center"
  }
});
