import {StyleSheet, Dimensions} from 'react-native';
const dist = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: dist,
    height: dist
  },
});

export default styles;
