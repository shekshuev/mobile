import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {color:'#ff0'} }>Hi tedlkam!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    justifyContent : 'center',
    alignItems:'center',
    backgroundColor: '#f00',
  },
});

