import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './Detail.styles';
import Hour from '../hourly/Hour';
import Daily from '../daily/Daily';

const Detail = ({ days, hours }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.dailyWrapper}>
      {days.length === 0 ? (
        <View>
          <ActivityIndicator color='whtie' size='large' />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Time To Weather</Text>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.detailContainer}
          >
            {hours.slice(0, 16).map((hour, index) => (
              <Hour data={hour} key={index} />
            ))}
          </ScrollView>

          <View style={styles.daysContainer}>
            {days.slice(1, 8).map((day, index) => (
              <Daily data={day} key={index} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Detail;
