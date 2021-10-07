//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Start } from './src/components/Start';
export default function App() {
  return (
    <View style={styles.container}>
      <Start></Start>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
             },
  center: {

  }
});

