import React from 'react'
import {View, Text, StyleSheet, Button, Alert, Image, ImageBackground} from 'react-native'
import { Navbar } from './service/Navbar';
export const Start = props => {
    return (
<View>
    <Navbar title="Стартовая страница"></Navbar>
    <View style={styles.main}>
    <ImageBackground
    source={require('../img/getting_started.png')}>
    <Button 
    title="Начать" 
    style={styles.button}
    accessibilityLabel="BUTTON_START"
    color="green"
    onPress={() => Alert.alert('Simple Button pressed')}
    >
    
    </Button>
    </ImageBackground>
    <Text style={styles.text}>Нажимая кнопку "начать", 
    вы подтверждаете свою готовность к анкетированию</Text>
    
    </View>
</View>
    );
}

const styles = StyleSheet.create({
    main: {
        width:'100%',
        height:'90%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgreen'
    },
    text: {
        fontSize:24,
        textAlign:'center',
        padding:20
    },
})