import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post';
const post = {
  user: {
    imageUri: 'https://i.ibb.co/vBrVN65/5.jpg',
    name: 'Merry',
  },
  bodyImageUri: 'https://i.ibb.co/xq3ZT47/body.jpg'
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
