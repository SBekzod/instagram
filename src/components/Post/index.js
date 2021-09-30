import React from 'react';
import {View} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const Post = ({post}) => {
  return (
    <View >
      <Header imageUri={post.user.imageUri} name={post.user.name}/>
      <Body imageUri={post.bodyImageUri} />
      <Footer />
    </View>
  );
};

export default Post;



