import React from 'react';
import {View, StyleSheet} from 'react-native';

const SectionPrimary = (props) => {
    return <View style={styles.container} {...props}>{props.children}</View>;
} // make take other props such as additional styles

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 3,
        padding: 10,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        margin: 10
    }
})

export default SectionPrimary;
