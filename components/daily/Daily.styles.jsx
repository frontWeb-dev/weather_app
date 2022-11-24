import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  daily: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#b2b8ba',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temp: {
    marginLeft: 10,
    color: '#8db0f4',
  },
});
