import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  dailyWrapper: {
    paddingTop: 30,
    paddingLeft: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 10,
  },
  daysContainer: {
    paddingRight: 30,
  },
});
