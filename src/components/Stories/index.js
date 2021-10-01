import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri: 'https://i.ibb.co/vBrVN65/5.jpg',
    name: 'Marry',
  },
  {
    imageUri: 'https://i.ibb.co/HPhFLht/rachel.jpg',
    name: 'Rachel',
  },
  {
    imageUri: 'https://i.ibb.co/s2pF3vk/10.jpg',
    name: 'Tom',
  },
  {
    imageUri: 'https://i.ibb.co/B4Hytg8/7.jpg',
    name: 'Nicky',
  },
  {
    imageUri: 'https://i.ibb.co/cCnrGSz/2.jpg',
    name: 'Jose',
  },
  {
    imageUri: 'https://i.ibb.co/7WWHFMn/gadi.jpg',
    name: 'Gina',
  },
];

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Stories;
