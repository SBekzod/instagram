/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TitleTest from './src/screens/HomeScreen/titleTest';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ContentTest from './src/screens/HomeScreen/contentTest';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};


export default App;
