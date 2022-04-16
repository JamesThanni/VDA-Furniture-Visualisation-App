import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles(props).header}>
            <Text style={styles(props).text}>{props.headerText}</Text>
        </View>
    );
}

const styles = (props) => StyleSheet.create({
    header: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        color: "#ffffff",
        textAlign: 'center',
        fontSize: props.fontSize
    }
})

export default Header;
 