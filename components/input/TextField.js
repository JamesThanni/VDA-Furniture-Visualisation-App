import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TextField = ({label, icon, ...props}) => {
    return (
        <View>
            <Ionicons name={props.icon} size={props.size} color={props.color}/>
            <TextInput style={styles.textField} onChangeText={props.onChangeText} value={props.value} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        padding: 10,
        paddingLeft: 55,
        paddingRight: 10,
        fontSize: 14,
        height: 60,
        marginVertical: 3,
        marginBottom: 30,
        color: "white",
        backgroundColor: "#1e1e1e",
    },  

    leftIcon: {
        left: "15px",
        top: "38px",
        position: "absolute",
        zIndex: 1
    }
})

export default TextField;
