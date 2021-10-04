import React from 'react';
import {Text, View} from 'react-native';

const PostScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>Make Post</Text>
    </View>
  );
};

export default PostScreen;
