import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { icons } from '../../mocks/icons';
import { styles } from './Current.styles';
import CurrentDetail from './CurrentDetail';

export default function Current({ data, region }) {
  return (
    <View style={styles.wrapper}>
      {data.length === 0 ? (
        <View>
          <ActivityIndicator color='whtie' size='large' />
        </View>
      ) : (
        <>
          <Text style={styles.city}>{region}</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{parseFloat(data.temp).toFixed(1)}</Text>
            <Image
              source={{ uri: `${icons[data.weather[0].main]}` }}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <CurrentDetail data={data} />
        </>
      )}
    </View>
  );
}
