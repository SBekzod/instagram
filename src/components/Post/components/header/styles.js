import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conLeft: {
    flexDirection: 'row',
  },
  conRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
});

export default styles;
