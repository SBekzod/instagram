import React from 'react';
import {Text, View} from 'react-native';

const NotificationScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'brown',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Notification</Text>
    </View>
  );
};

export default NotificationScreen;
