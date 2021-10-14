/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import Route from './src/screens/Routes';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
