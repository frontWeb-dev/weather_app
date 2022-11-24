import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { styles } from './Current.styles';

const CurrentDetail = ({ data }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.detailWrapper}
    >
      <View style={styles.currentDetail}>
        <Fontisto name='cloudy' size={24} color='white' />
        <Text style={styles.detailText}>clouds</Text>
        <Text style={styles.detailText}>{data.clouds}</Text>
      </View>
      <View style={styles.currentDetail}>
        <Fontisto name='wind' size={24} color='white' />
        <Text style={styles.detailText}>wind speed</Text>
        <Text style={styles.detailText}>{data.wind_speed}m/s</Text>
      </View>
      <View style={styles.currentDetail}>
        <Ionicons name='water-outline' size={24} color='white' />
        <Text style={styles.detailText}>humidity</Text>
        <Text style={styles.detailText}>{data.humidity}</Text>
      </View>
    </ScrollView>
  );
};

export default CurrentDetail;
