import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Navbar } from './Navbar';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Navbar></Navbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {color:'red'}
});

