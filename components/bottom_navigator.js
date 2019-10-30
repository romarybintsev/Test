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
  QuestionBank: QuestionBankScreen,
}, {
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
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: navigation.state.routes[navigation.state.index].routeName != 'Quiz',
  })
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});


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