import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export const Navbar = props => {
    return (
<View style={styles.navbar}>
    <Image style={styles.exit} source={require('../../img/arrow-left.png')}/>
    <Text style={styles.text}>{props.title}</Text>
    <Image style={styles.question} source={require('../../img/question.png')}/>
</View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        paddingTop:40,
        height: 90,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFEFD5'
    },
    text: {
        fontSize:24
    },
    exit: {
        width:30,
        height:30,
        resizeMode: 'stretch',
    },
    question: {
        width:30,
        height:30,
        resizeMode: 'stretch',
    }

})