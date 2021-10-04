/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
