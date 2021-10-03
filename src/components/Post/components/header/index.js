import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
      <Icon
        name="instagram"
        size={30}
        color="#000"
        style={{alignSelf: 'center', marginLeft: 20}}
      />
    </View>
  );
};

export default Header;
