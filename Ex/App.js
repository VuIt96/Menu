import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import ReducerScreen from './src/screens/ReducerScreen';
import ReducerEx2Screen from './src/screens/ReducerEx2Screen';
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  ReducerScreen: { screen: ReducerScreen },
  ReducerEx2Screen: { screen: ReducerEx2Screen }

});

const App = createAppContainer(MainNavigator);

export default App;
