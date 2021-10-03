import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column'
  },
  groupFooterHeader: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  groupRight: {
    marginLeft: 10,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  groupLeft: {
    flexDirection: 'row',
    marginRight: 5
  },
  container: {
    margin: 5,
  },
  likedCounts: {
    margin: 3,
    paddingLeft: 7
  },
  caption: {
    margin: 3,
    paddingLeft: 7,
    fontWeight: 'bold',
  },
  postedAt: {
    margin: 3,
    paddingLeft: 7,
    color: '#8c8c8c',
  },
});

export default styles;
