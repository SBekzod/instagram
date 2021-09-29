import React from "react";
import ProfilePicture from "../ProfilePicture";
import { View, Text } from "react-native";

const Story = ({ imageUri, name }) => {
  return (
      <View>
        <ProfilePicture uri={imageUri}></ProfilePicture>
        <Text>{name}</Text>
      </View>
  );
};

export default Story;
