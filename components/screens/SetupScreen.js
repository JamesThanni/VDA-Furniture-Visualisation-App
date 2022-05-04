import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import AppButton from '../input/AppButton';
import TextField from '../input/TextField';
import SectionMain from '../containers/PrimarySection';
import * as AppNavigation from '../nav/Navigator.js'; 
import MainContainer from '../containers/MainContainer';

export default function SetupScreen({navigation}) {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState(null);
    return (
        <MainContainer>
            <SectionMain>
                {/* 
                <AppText type="h1" text="Account Settings"/>
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

                <Text style={styles.hintText}>Visual Settings</Text>                  
                <TextField
                    onChangeText={onChangeNumber}
                    placeholder={"What is the material of your wall?"}
                    value={text}
                />
                <TextField
                    onChangeText={onChangeNumber}
                    placeholder={"What is the material of your floor?"}
                    value={text}
                />
                <AppButton text="Submit" onPress={() => AppNavigation.navigate("Browse")}/>
            </SectionMain>
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212',
        textAlign: "left"
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
        fontSize: 16,
        fontWeight: "500",
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
