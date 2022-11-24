import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import Layout from './components/layout/Layout';
import Current from './components/current/Current';
import Detail from './components/detail/Detail';

const API_KEY = 'aa2e624891b98ef211a0ab4604cad0d0';

export default function App() {
  const [region, setRegion] = useState('');
  const [ok, setOk] = useState(true);
  const [current, setCurrent] = useState([]);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);

  const getWeather = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&units=metric&appid=${API_KEY}`
    );
    const json = await response.json();

    setCurrent(json.current);
    setDays(json.daily);
    setHours(json.hourly);
  };

  const getRegion = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setOk(false);

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setRegion(location[0].region);

    getWeather(latitude, longitude);
  };

  useEffect(() => {
    getRegion();
  }, []);

  return (
    <Layout>
      <Current region={region} data={current} />
      <Detail days={days} hours={hours} />
    </Layout>
  );
}
