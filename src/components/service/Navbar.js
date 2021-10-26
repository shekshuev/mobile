import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Question } from '../Question';
import { Start } from '../Start';
import {q_number} from '../Question';
const Drawer = createDrawerNavigator();

export const Navbar = props => {
    var index_question = q_number;
    var [ isPress, setIsPress ] = React.useState(false);
var touchProps = {
    activeOpacity: 1,                             // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.navbarPr : styles.navbar, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('Нажал, что дальше, чел?'),                 // <-- "onPress" is apparently required
};
    return (
<View style={styles.container}>
<View style={styles.navbar}>
<NavigationContainer {...touchProps}>
        <Drawer.Navigator initialRouteName="Question" >
            <Drawer.Screen name="Start" component={Start} />
            <Drawer.Screen name={q_number} component={Question} />
        </Drawer.Navigator>
    </NavigationContainer>
</View>
</View>        

    );
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        width:'100%',
        height:'100%',
        borderWidth:4,
        borderColor:'#000'
    },
    navbar: {
        height: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#6495ED'
    },
    text: {
        fontSize:24
    },
    exit: {
        width:30,
        height:30,
        resizeMode: 'stretch',
        
    },
    menu: {
        width:30,
        height:30,
        resizeMode: 'stretch',
    }

})