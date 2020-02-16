// Imports 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CategoryTestScreen from '../screens/CategoryTests';
import TestScreen from '../screens/TestScreen';
import QuizScreen from '../screens/QuizScreen';
import QuestionBankScreen from '../screens/QuestionBankScreen';
import BuyProductScreen from '../screens/BuyProductScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CheatSheet from '../screens/CheatSheet';
import BookScreen from '../screens/HandBook';
import ChapterScreen from '../screens/Chapter';
import ResultsScreen from '../screens/ResultsScreen';
// Stacks

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'none',
    navigationOptions: () => ({
      headerTransparent: true,
    }),
  },
  BuyProducts: {
    screen: BuyProductScreen,
  },
  CheatSheet:{
    screen: CheatSheet,
  }
}, {
  headerLayoutPreset: 'center',
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.index < 1,
    //   tabBarVisible: navigation.state.routes[navigation.state.index].routeName == 'Home'
    //   ^^ Possibly useful for the future ^^
  })
});
const TestsStack = createStackNavigator({
  CategoryTests: {
    screen: CategoryTestScreen,
    headerMode: 'none',
    navigationOptions: () => ({
      headerTransparent: true,
    }),
  },
  Test: {
    screen: TestScreen,
  },
  Quiz: {
    screen: QuizScreen,
  },
  QuestionBank: {
    screen: QuestionBankScreen,
  },
  ResultsScreen: {
    screen: ResultsScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName == 'CategoryTests',
  }),
  headerLayoutPreset: 'center',
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
}, {
  headerLayoutPreset: 'center',
});

const BookStack = createStackNavigator({
  Book: {
    screen: BookScreen,
  },
  Chapter: {
    screen: ChapterScreen,
    headerMode: 'none',
    navigationOptions: () => ({
      headerTransparent: true,
    }),
  }
}, {headerLayoutPreset: 'center'})


const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon='home' size={25} fill={tintColor} />
      )
    }
  },
  Tests: {
    screen: TestsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon='layer-group' size={25} fill={tintColor} />
      )
    }
  },
  Book: {
    screen: BookStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon='book' size={25} fill={tintColor} />
      )
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon='cog' size={25} fill={tintColor} />
      )
    }
  },
}, {
  initialRouteName: 'Home',
});

export const AppMain = createAppContainer(BottomTabNavigator);