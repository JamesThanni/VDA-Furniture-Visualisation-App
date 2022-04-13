import React from 'react';
import {View, StyleSheet} from 'react-native';

const Container = (props) => {
    return <View style={styles.container} {...props}>{props.children}</View>;
} // make take other props such as additional styles

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: "25px",
        paddingTop: "40px",
        backgroundColor: "#121212"
    }
})

export default Container;
