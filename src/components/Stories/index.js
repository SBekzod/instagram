import React from 'react';
import {View, FlatList} from 'react-native';
import Story from '../Story';

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
    imageUri: 'https://i.ibb.co/TgdzD7H/8.jpg',
    name: 'Milana',
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
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
  // return (<View>
  //   {data.map(ele => {
  //     return (
  //       <React.Fragment>
  //         <Story imageUri={ele.imageUri} name={ele.name} />
  //       </React.Fragment>
  //     );
  //   })}
  // </View>);
};

export default Stories;
