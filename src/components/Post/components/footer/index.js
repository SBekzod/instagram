import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({caption, likedCounts, postedAt}) => {
  const [isLiked, toggleLikeState] = useState(false);

  return (
    <React.Fragment style={styles.mainContainer}>
      <View style={styles.groupFooterHeader}>
        <View style={styles.groupRight}>
          <Icon name={isLiked ? "heart" : "heart-o"} size={17} color={'#545454'} onPress={() => {toggleLikeState(!isLiked)}} />
          <Icon name="comment-o" size={17} color={'#545454'} />
          <Icon name="send-o" size={17} color={'#545454'} />
        </View>
        <Icon
          name="save"
          size={17}
          onPress={() => alert('you pressed')}
          color={'#545454'}
        />
      </View>

      <Text style={styles.likedCounts}>{likedCounts} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </React.Fragment>
  );
};

export default Footer;
