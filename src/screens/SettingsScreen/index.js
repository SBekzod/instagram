import React from 'react';
import {Text, View} from 'react-native';

const SettingsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Settings</Text>
    </View>
  );
};

export default SettingsScreen;
