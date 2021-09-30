import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Stories></Stories>
      <Post />
    </React.Fragment>
  );
};

export default HomeScreen;
