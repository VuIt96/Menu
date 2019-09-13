import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import ChangeInfo from './src/components/changeinfo/Changeinfo';
import InputScreen from './src/screens/InputScreen';
import BoxScreen from './src/screens/BoxScreen';
import AlignItemScreen from './src/screens/AlignItemScreen';
import KeyBoardPc from './src/screens/KeyBoardPc';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import FlexScreen from './src/screens/FlexScreen';
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ChangeInfo: { screen: ChangeInfo },
  InputScreen: { screen: InputScreen },
  BoxScreen: { screen: BoxScreen },
  AlignItemScreen: { screen: AlignItemScreen },
  KeyBoardPc: { screen: KeyBoardPc },
  Login: { screen: Login },
  Registration: { screen: Registration },
  FlexScreen: { screen: FlexScreen }
});

const App = createAppContainer(MainNavigator);

export default App;