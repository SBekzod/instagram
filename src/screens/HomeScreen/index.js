import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
const post = {
  imageUri: 'https://i.ibb.co/vBrVN65/5.jpg',
  name: 'Merry',
};

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Stories />
      <Post post={post} />
    </React.Fragment>
  );
};

export default HomeScreen;
