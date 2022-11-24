import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  hourDetail: {
    width: SCREEN_WIDTH / 4.5,
    height: SCREEN_WIDTH / 3.5,
    marginBottom: 20,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#eaedf3',
    borderRadius: 15,
    overflow: 'hidden',
  },
  time: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#8db0f4',
  },
  temp: {
    marginTop: 5,
    color: '#1c4494',
    fontSize: 18,
  },
});
