import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8db0f4',
  },
});

export default Layout;
