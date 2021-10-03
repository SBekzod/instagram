import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.conLeft}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.conRight}>
        <Icon style={styles.conRight} name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default Header;
