import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import Header from '../info/Header';
import AppButton from '../input/AppButton';
import TextField from '../input/TextField';
import SectionMain from '../wrappers/SectionMain';
export default function Configure({navigation}) {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>
            <SectionMain>
                {/* 
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
                */}

                <Header headerText="Visual Settings"/>          
                <Text style={styles.hintText}>Wall Material</Text>                
                <TextField
                    onChangeText={onChangeNumber}
                    value={text}
                />
                <Text style={styles.hintText}>Floor Material</Text>
                <TextField
                    onChangeText={onChangeNumber}
                    value={text}
                />
                <AppButton text="Submit"/>
            </SectionMain>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    options: {
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
        marginBottom: "2.5%"
    },
    input: {
        color: "white",
        height: "10%",
        width: "90%",
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