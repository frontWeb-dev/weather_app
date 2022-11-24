import React from 'react';
import { View, Text, Image } from 'react-native';
import { icons } from '../../mocks/icons';
import { styles } from './Daily.styles';

const Daily = ({ data }) => {
  return (
    <View style={styles.daily}>
      <Text style={styles.date}>{new Date(data.dt * 1000).toString().substring(4, 10)}</Text>
      <View style={styles.dailyDetail}>
        <Image
          source={{ uri: `${icons[data.weather[0].main]}` }}
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.temp}>{parseFloat(data.temp.day).toFixed(1)}℃</Text>
      </View>
    </View>
  );
};

export default Daily;
