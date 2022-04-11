import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Filter = (props) => {
    const colorStyles = {
        backgroundColor: props.status ? "#72B93A" : "#1e1e1e"
    };
    
    return (
        <View>
            <TouchableOpacity style={[styles.filter, colorStyles]}>
                <Text style={styles.filterText}>{props.category}</Text>
            </TouchableOpacity>
        </View>
    );
   
}
// Create tags to filter items by category
// Extended functionality for item filtering based on category property of product objects.
// colorStyles function - changes background colour if the status is true or false (selected or not selected)


const styles = StyleSheet.create({
    filter: {
        padding: 10,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 5,
        marginLeft: 2,
        marginRight: 2,
        height: 30,
        alignItems: "center"
    },
    filterText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center"
    }
})


export default Filter;
