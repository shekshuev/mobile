import React from 'react'
import {View, Text, StyleSheet, Button, Alert, Dimensions} from 'react-native'

export const Start = props => {

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.text}>Нажимая кнопку "начать", 
                вы подтверждаете свою готовность к анкетированию</Text>
                <View style={styles.button}>
                    <Button
                    color="#6495ED"
                    title="Начать" 
                    accessibilityLabel="BUTTON_START"
                    onPress={() => Alert.alert('Simple Button pressed')}></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        position:'relative',
        height:'100%',
        color:'#000'
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:24,
        textAlign:'center',
        padding:30
    },
      button: {
        width:150,
      },  
      
})

// borderColor:'black',
//         borderWidth:4