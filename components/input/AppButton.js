import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress} {...props}>
                <Text style={styles.buttonText} {...props}>{props.text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        backgroundColor: "#976A35",
        borderRadius: 10,
        width: "75%",
        alignSelf: "center"
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default AppButton;
