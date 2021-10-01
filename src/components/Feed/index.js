import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';

const data = [
  {
    user: {
      imageUri: 'https://i.ibb.co/vBrVN65/5.jpg',
      name: 'Merry',
    },
    bodyImageUri: 'https://i.ibb.co/xq3ZT47/body.jpg',
    caption: 'Beautifull City of New York',
    likedCounts: 123000,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://i.ibb.co/HPhFLht/rachel.jpg',
      name: 'Rachel',
    },
    bodyImageUri: 'https://i.ibb.co/RHCWJ96/rachel.jpg',
    caption: 'The smarted wife has ever been existing',
    likedCounts: 123000,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://i.ibb.co/pd9BNrw/quokka.jpg',
      name: 'Jose',
    },
    bodyImageUri: 'https://i.ibb.co/bmQHKTW/aha.jpg',
    caption: 'The smarted wife has ever been existing',
    likedCounts: 123000,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => <Post post={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Feed;
