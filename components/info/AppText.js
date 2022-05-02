import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AppText = (props) => {
    return props.type === "h1" 
    ? <Text style={styles.header}>{props.text} </Text>
    : <Text style={styles.text}>{props.text}</Text>

}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "300",
        color: "white",
        textAlign: "left",
        lineHeight: 25,
        padding: 10
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
    },
})

export default AppText;
