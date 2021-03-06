import React from "react";
import ProfilePicture from "../ProfilePicture";
import { View, Text} from "react-native";
import styles from './styles';

const Story = ({ imageUri, name }) => {
  return (
      <View>
        <ProfilePicture uri={imageUri}></ProfilePicture>
        <Text style={styles.name}>{name}</Text>
      </View>
  );
};

export default Story;
