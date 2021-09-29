import React from "react";
import { Text } from "react-native";
import ProfilePicture from "../../components/ProfilePicture";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Text>Hello World</Text>
      <ProfilePicture uri="https://i.ibb.co/TgdzD7H/8.jpg"/>
    </React.Fragment>
  );
};

export default HomeScreen;
