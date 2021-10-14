import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import DiscoveryScreen from '../DiscoveryScreen';
import PostScreen from '../PostScreen';
import NotificationScreen from '../NotificationScreen';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Route = () => {
  return (
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
  );
};

export default Route;
