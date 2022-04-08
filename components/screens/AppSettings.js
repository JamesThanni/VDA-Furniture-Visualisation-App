import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import Header from '../info/Header';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AppSettings({navigation}) {
    return (
        
        <View style={styles.container}>
            <View style={styles.options}>
                <Header headerText="App Settings"/>
                <Text style={styles.hintText}>Linked Accounts   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Privacy   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Residential Details   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Notifications   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Terms of Service   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Support   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text></Text>
                <Text style={styles.hintText}>Logout</Text>
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
        marginLeft: "6%",
        marginBottom: "2.5%"
    },

}
)