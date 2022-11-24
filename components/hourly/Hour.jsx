import React from 'react';
import { View, Text, Image } from 'react-native';
import { icons } from '../../mocks/icons';
import { styles } from './Hour.styles';

const Hour = ({ data }) => {
  return (
    <View style={styles.hourDetail}>
      <Text style={styles.time}>{new Date(data.dt * 1000).toString().substring(16, 21)}</Text>
      <Image source={{ uri: `${icons[data.weather[0].main]}` }} style={{ width: 30, height: 30 }} />
      <Text style={styles.temp}>{parseFloat(data.temp).toFixed(1)}℃</Text>
    </View>
  );
};

export default Hour;
