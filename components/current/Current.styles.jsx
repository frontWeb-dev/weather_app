import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 80,
    paddingLeft: 25,
    paddingBottom: 30,
  },
  city: {
    color: '#fff',
    fontSize: 20,
  },
  tempContainer: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    marginRight: 20,
    color: '#fff',
    fontSize: 80,
    fontWeight: '800',
  },
  detailWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  currentDetail: {
    width: SCREEN_WIDTH / 3,
    marginRight: 10,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#5682D7',
    borderRadius: 15,
  },
  detailText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 14,
  },
});
