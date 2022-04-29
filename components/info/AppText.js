import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AppText = (props) => {
    return props.type === "h1" 
    ? <Text style={styles.header}>{props.text} </Text>
    : <Text style={styles.text}>{props.text}</Text>

}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "white",
        textAlign: "left",
        padding: 10
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#ffffff',
        textAlign: 'center',
    },
})

export default AppText;
