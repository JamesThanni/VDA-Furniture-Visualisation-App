import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "600",
        color: "#ffffff",
        textAlign: 'center',
    }
})

export default Header;
