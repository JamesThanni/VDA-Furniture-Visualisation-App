import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import Header from '../components/info/Header';
import AppText from '../components/info/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionMain from '../components/wrappers/SectionMain';

export default function AppSettings({navigation}) {
    return (
        
        <View style={styles.container}>
            <SectionMain>                
                <Text style={styles.hintText}>Linked Accounts   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text style={styles.hintText}>Privacy   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text style={styles.hintText}>Notifications   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text style={styles.hintText}>Terms of Service   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text style={styles.hintText}>Support   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
                <Text style={styles.hintText}>Logout</Text>
            </SectionMain>

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
        fontSize: 16,
        fontWeight: "300",
        marginBottom: "10%",
        justifyContent: "space-between",
        width: "100%"
    }, 
    sectionText: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: "10%"
    },

}
)