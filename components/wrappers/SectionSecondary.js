import React from 'react';
import {View, StyleSheet} from 'react-native';

const SectionSecondary = (props) => {
    return <View style={styles.container} {...props}>{props.children}</View>;
} // make take other props such as additional styles

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        flex: 1,
        padding: 20,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#1e1e1e",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 10,
        margin: 10
    }
})

export default SectionSecondary;
