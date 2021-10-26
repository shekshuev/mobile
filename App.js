import React from 'react';
import { GetDerivedStateFromProps } from 'react';
import { StyleSheet, View, Fragment} from 'react-native';
import { Navbar } from './src/components/service/Navbar';

export default function App() {

  return (
    <View>
     <Navbar></Navbar>
    </View>
  )

}

const styles = StyleSheet.create({
 
});