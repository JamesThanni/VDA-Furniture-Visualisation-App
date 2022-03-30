import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.function}>
                <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#72B93A',
        borderRadius: 10,
        margin: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default AppButton;
