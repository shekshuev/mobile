import React from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native'
//mport { increase, q_number } from '../Question';


export const Prev_next = (currNum, currNumChanged) => {

    // для изменения currNum
    const changeCurrNum = newVal => {
        currNumChanged(newVal)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
            <Image style={styles.arrow} source={require('../../img/arrownav_left.png')}/>
            </TouchableOpacity>
            <View>
                <Button
                style={styles.button}
                color="#000"
                title="Ответить" 
                accessibilityLabel="BUTTONANSWER"
                onPress={() => Alert.alert('Simple Button pressed')}
                >
                </Button>
            </View>
            <TouchableOpacity 
            onPress={increase}
            >
            <Image style={styles.arrow} source={require('../../img/arrownav_right.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        width:'100%',
        bottom:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize:24
    },
    arrow: {
        width:60,
        height:60,
        resizeMode:'stretch',
        marginRight:30,
        marginLeft:30,
        
    },
    button: {
        
    }
})