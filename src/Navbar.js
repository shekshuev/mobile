import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: '70',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        
    }
})