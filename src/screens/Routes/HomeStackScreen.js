import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Button,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/images/insta.png';

const Stack = createStackNavigator();

function SendMessageScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
      }}>
      <Text>Here you should write your message</Text>
    </View>
  );
}

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerLeft: () => (
            <IconAwesome name={'camera'} size={25} color={'#000'} />
          ),
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 100}} />
          ),
          headerRight: () => (
            <IconAwesome
              name={'send-o'}
              size={25}
              color={'#000'}
              onPress={() => navigation.navigate('SendMessageStackScreen')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="SendMessageStackScreen"
        component={SendMessageScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerTitle: () => <Text>Sent Message</Text>,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
