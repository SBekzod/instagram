import React from 'react';
import {View} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Post = ({post: user}) => {
  return (
    <View >
      <Header imageUri={user.imageUri} name={user.name}/>
      <Body />
      <Footer />
    </View>
  );
};

export default Post;
