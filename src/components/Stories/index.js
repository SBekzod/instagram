import React from "react";
import { View } from "react-native";
import Story from "../Story";

const data = [
  {
    imageUri: "https://i.ibb.co/TgdzD7H/8.jpg",
    name: "Milana"
  },
  {
    imageUri: "https://i.ibb.co/s2pF3vk/10.jpg",
    name: "Tom"
  },
  {
    imageUri: "https://i.ibb.co/vBrVN65/5.jpg",
    name: "Marry"
  },
  {
    imageUri: "https://i.ibb.co/7WWHFMn/gadi.jpg",
    name: "Gina"
  }
];


const Stories = () => {
    return (<View>
      {data.map(ele => {
        return (
          <React.Fragment>
            <Story imageUri={ele.imageUri} name={ele.name} />
          </React.Fragment>
        );
      })}
    </View>);
};

export default Stories;
