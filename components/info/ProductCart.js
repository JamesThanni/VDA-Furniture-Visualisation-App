import React from 'react';
import {View, StyleSheet, Image, Button, Text} from 'react-native';

const ProductCart = () => {
    return (
        <View style={styles.objectSection}>
            <View style={{display: "flex", flexDirection:"column"}}>
                <Text style={styles.objectName}>Classic Chair</Text>
                <Text style={styles.objectMaterial}>Brown Leather</Text>
                <Button color="red" title="x"></Button>
            </View>
        </View>
    )
}