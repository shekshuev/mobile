import React, { useState } from 'react';
import { GetDerivedStateFromProps } from 'react';
import { StyleSheet, View, Fragment} from 'react-native';
import { Navbar } from './src/components/service/Navbar';
import { CurrNumContext } from "./src/context/index";

export default function App() {
  const [currNum, setCurrNum] = useState(3);
  return (

    <View>
      <CurrNumContext.Provider value={{currNum, setCurrNum}}>
      <Navbar></Navbar>
      </CurrNumContext.Provider>
      
    </View>
  )

}

const styles = StyleSheet.create({
 
});