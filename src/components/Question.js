import React, {useState, useEffect} from 'react'
import {View,StyleSheet, Text, FlatList, TouchableHighlight} from 'react-native'
import { Prev_next } from './service/Prev_next';
//экспортируем заготовку названия вопроса
export var q_number ="Вопрос №"  + (currNum + 1);

export var increase =function() {
    this.setState({currNum: (currNum+1)})
};

// const [postCode, setPostCode] = useState();

//   const addPostCode = (data) => {
//     setPostCode(data)
//     console.log(postCode)
//   };


export const Question = props => {
    state = {currNum:1};
    const [currNum, setCurrNum] = useState();

    const changeCurrNum = (currNum) => {
      setPostCode(currNum+1)
      console.log(currNum)
    };

//изменение состояния по нажатию на кнопку вопроса
[ isPress, setIsPress ] = React.useState(false);
touchProps = { 
    activeOpacity: 1,
    underlayColor: 'lightgray',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('Нажал, что дальше, чел?'),                 // <-- "onPress" is apparently required
};

//потом это станет JSONом
    const [listOfQuestions, setListOfQuestions] = useState ([
        {index:"1",text:"Текст вопроса будет здесь, он будет примерно такой длины, в конце вопроса обычно ставится знак ?", answers:["The sdgdhgerhrhbdehtdnjrtfirst variant", "gkdfngskj456457536457663464567","Third var here dude"]},
        {index:"2",text:"Длина вопроса может быть и такой", answers:["Escho variant", "And one more","Vsyo, posledniy"]},
        {index:"3",text:"А теперь вместо вариантов ответа нужно будет дать свой, то есть вариков нет в принципе", answers:[]}
        
    ])

    return (
<View style={styles.main}>
    <View style={styles.container}>
        <Text style={styles.text}>{listOfQuestions[currNum].text}</Text>
        <View style={styles.flex_ans}>
        <FlatList data ={listOfQuestions[currNum].answers} renderItem={({ item }) => (
            <TouchableHighlight {...touchProps} 
            >
            <Text style={styles.ans_text}>{item}</Text>
            </TouchableHighlight> 
        )}>
        </FlatList>
        </View>
    </View>
    <Prev_next></Prev_next>
</View>
    );
}

const styles = StyleSheet.create({
    main: {
        position:'relative',
        height:'100%',
        width:'100%',
        color:'#000',
    },
    container: {
        flex:1,
        width:'100%'

    },
    text: {
        fontSize:24,
        textAlign:'center',
        paddingTop:40,
        marginBottom:60
    },
    btnNormal: {
        width:'100%',
        borderWidth:4,
        borderRadius:15,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        maxWidth:'100%'
    },
    flex_ans: {
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:'95%',   
    },
    ans_text: {
        fontSize:20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        textAlign:'center'
      },
      btnPress: {
        width:'100%',
        borderWidth:4,
        borderRadius:15,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
        maxWidth:'100%'
      }
// borderColor:'black',
//         borderWidth:4    
    })

