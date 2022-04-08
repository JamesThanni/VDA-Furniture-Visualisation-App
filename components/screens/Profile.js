import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import Header from '../info/Header';
export default function Profile({navigation}) {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>
            <View style={styles.options}>
                <Header headerText="Account Settings"/>
                <Text style={styles.hintText}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                    keyboardType={"default"}
                />
                <Text style={styles.hintText}>Current Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                />
                <Text style={styles.hintText}>New Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                />


                <Header headerText="Visual Settings"/>
                <Text style={styles.hintText}>Room Height and Width</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                />                
                <Text style={styles.hintText}>Wall Material</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                />
                <Text style={styles.hintText}>Floor Material</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                />
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
    input: {
        color: "white",
        height: "6%",
        width: "90%",
        marginLeft: "6%",
        marginBottom: "5%",
        backgroundColor: "#121212",
        padding: 10,
      },
});
/*
  
            <Text style={{fontSize: 26, fontWeight: 'bold', color:'#ffffff'}}>Profile Screen</Text>
            <Text style={styles.hintText}>Username</Text>
            <Text style={styles.hintText}>Current Password</Text>
            <Text style={styles.hintText}>New Password</Text>
            <Text>Notifications</Text>
*/