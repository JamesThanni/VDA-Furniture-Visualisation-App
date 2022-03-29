import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Header from '../info/Header';
export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.options}>
                <Header headerText="Your profile settings"/>
                <Text style={styles.hintText}>Email</Text>
                <Text style={styles.hintText}>Current Password</Text>
                <Text style={styles.hintText}>New Password</Text>
                <Text style={styles.hintText}>Notifications</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop: "10%",
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    options: {
        flex: 5, 
         display: "flex", 
         alignItems: 'flex-start', 
         justifyContent: 'flex-start', 
         width: "90%", 
         marginBottom: "5%",
         backgroundColor: '#1e1e1e',
         borderRadius: 10
    },
    hintText: {
        color: "white",
        fontSize: 12,
        paddingBottom: 5,
        marginLeft: 20
    }
});
/*
  
            <Text style={{fontSize: 26, fontWeight: 'bold', color:'#ffffff'}}>Profile Screen</Text>
            <Text style={styles.hintText}>Username</Text>
            <Text style={styles.hintText}>Current Password</Text>
            <Text style={styles.hintText}>New Password</Text>
            <Text>Notifications</Text>
*/