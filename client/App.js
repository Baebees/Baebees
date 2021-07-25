import React from 'react';
import { View, StyleSheet } from 'react-native'
import Auth from './scenes'

export default function App() {
  return (
    <View style={styles.body}>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F0F2F5',
    height: '100%',
    width: '100vw'
  }
})
