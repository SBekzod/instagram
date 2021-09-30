import React from 'react';
import {View} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Post = () => {
  return (
    <View>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default Post;
