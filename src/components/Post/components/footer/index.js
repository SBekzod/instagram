import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({caption, likedCounts, postedAt}) => {
  const [isLiked, toggleLikeState] = useState(false);
  const [likesCounts, setLikesCount] = useState(likedCounts);

  // useEffect(() => {
  // setLikesCount(likedCounts);
  // }, []);

  function likeProccessMethod() {
    let amount = isLiked ? -1 : 1;
    setLikesCount(likesCounts + amount);
    toggleLikeState(!isLiked);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.groupFooterHeader}>
        <View style={styles.groupRight}>
          <TouchableWithoutFeedback onPress={likeProccessMethod}>
            {isLiked ? (
              <Icon name="heart" size={17} color={'#e73838'} />
            ) : (
              <Icon name="heart-o" size={17} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
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

      <Text style={styles.likedCounts}>{likesCounts} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
