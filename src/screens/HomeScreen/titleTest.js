import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TitleTest = () => {
  return <Text style={styles.basic}>THE TEST TITLE</Text>;
};

const styles = StyleSheet.create({
  basic: {
    fontSize: 12,
    color: 'red',
  },
});

export default TitleTest;
