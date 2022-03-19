import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#121212',
        display: "flex",
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'}
    ,
    hintText: {
        color: "white",
        fontSize: 16,
        paddingBottom: 5
    }
});
/*
  
            <Text style={{fontSize: 26, fontWeight: 'bold', color:'#ffffff'}}>Profile Screen</Text>
            <Text style={styles.hintText}>Username</Text>
            <Text style={styles.hintText}>Current Password</Text>
            <Text style={styles.hintText}>New Password</Text>
            <Text>Notifications</Text>
*/