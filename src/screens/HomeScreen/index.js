import React from 'react';
import {Text} from 'react-native';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';


const HomeScreen = () => {
  return (
    <React.Fragment>
      <Stories />
      <Feed />
    </React.Fragment>
  );
};

export default HomeScreen;
