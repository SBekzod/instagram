import React from 'react';
import {StyleSheet, Text} from 'react-native';

const ContentTest = () => {
  return <Text style={styles.basic}>THIS IS TEST CONTENT</Text>;
};

const styles = StyleSheet.create({
  basic: {
    fontSize: 8,
    color: 'orange',
  },
});

export default ContentTest;
