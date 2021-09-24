import React from "react";
import { Image } from "react-native";
import  styles  from "./styles";

const ProfilePicture = () => {
  return <Image source={{ uri: "https://i.ibb.co/TgdzD7H/8.jpg" }} style={styles.image}/>;
};

export default ProfilePicture;
