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
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Discovery') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'search-circle'
                      : 'search-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              ); 
            } else if (route.name === 'Post') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'add-circle'
                      : 'add-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Notification') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'md-notifications-sharp'
                      : 'md-notifications-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <IconAwesome
                  name={
                    focused
                      ? 'user-circle'
                      : 'user-circle-o'
                  }
                  size={size}
                  color={color}
                />
              );
            } else {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'settings'
                      : 'settings-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
