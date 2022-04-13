import React from 'react';
import {View, StyleSheet} from 'react-native';

const SectionMain = (props) => {
    return <View style={styles.container} {...props}>{props.children}</View>;
} // make take other props such as additional styles

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 15,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#121212",
        borderRadius: 10,
        margin: 10,
        width: "95%"
    }
})

export default SectionMain;
