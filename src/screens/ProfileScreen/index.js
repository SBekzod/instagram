import React from 'react';
import {Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'purple',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
