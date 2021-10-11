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
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import logo from './src/assets/images/insta.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerTitleContainerStyle: {
            paddingLeft: 100,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          }, 
          headerLeft: () => (
            <Ionicons name={'camera-outline'} size={25} color={'#000'} />
          ),
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 100}} />
          ), 
          headerRight: () => (
            <IconAwesome name={'send-o'} size={25} color={'#000'} />
          )
        }}
      />
    </Stack.Navigator>
  );
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let icon_name = '';
            if (route.name === 'Home') {
              icon_name = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Discovery') {
              icon_name = focused ? 'search-circle' : 'search-circle-outline';
            } else if (route.name === 'Post') {
              icon_name = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Notification') {
              icon_name = focused
                ? 'md-notifications-sharp'
                : 'md-notifications-outline';
            } else if (route.name === 'Profile') {
              icon_name = focused ? 'user-circle' : 'user-circle-o';
            } else {
              icon_name = focused ? 'settings' : 'settings-outline';
            }
            if (route.name === 'Profile') {
              return <IconAwesome name={icon_name} size={size} color={color} />;
            } else {
              return <Ionicons name={icon_name} size={size} color={color} />;
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
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
