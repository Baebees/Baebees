import React from 'react';
import { View, StyleSheet } from 'react-native'
import Main from './src/index'
import { Dimensions } from 'react-native';
export default function App() {
  return (
    <View style={styles.body}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F0F2F5',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
})
