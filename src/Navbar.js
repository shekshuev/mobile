import React from 'react'
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native'

export const Navbar = props => {
    return (
<SafeAreaView style={styles.navbar}>
    <Image style={styles.exit} source={require('./img/exit.png')}/>
    <Text style={styles.text}>{props.title}</Text>
    <Image style={styles.menu} source={require('./img/menu.png')}/>
</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    navbar: {
        paddingTop:30,
        height: 90,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue'
    },
    text: {
        
    },
    exit: {
        width:30,
        height:30,
        resizeMode: 'stretch',
    },
    menu: {
        width:50,
        height:50,
        resizeMode: 'stretch',
    }
})