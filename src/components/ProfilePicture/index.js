import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View style={[styles.container, {height: size + 6, width: size + 6}]}>
      <Image
        source={{uri: uri}}
        style={([styles.image, {height: size, width: size}])}
      />
    </View>
  );
};

export default ProfilePicture;
