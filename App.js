import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryTestScreen from './screens/CategoryTests';
import TestScreen from './screens/TestScreen';
import QuizScreen from './screens/QuizScreen';
import ReviewScreen from './screens/ReviewScreen';
import QuestionBankScreen from './screens/QuestionBankScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import BuyProductScreen from './screens/BuyProductScreen';
import SettingsScreen from './screens/SettingsScreen';


class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Categories: CategoriesScreen,
  CategoryTests: CategoryTestScreen,
  Test: TestScreen,
  Quiz: QuizScreen,
  Review: ReviewScreen,
  QuestionBank: QuestionBankScreen,
  Statistics: StatisticsScreen,
  BuyProducts: BuyProductScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack,
});

// const AppContainer = createAppContainer(TabNavigator);

export default createAppContainer(TabNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }