import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, KeyboardAvoidingView, Alert } from 'react-native';

import AppText from '../components/info/AppText';

import SectionMain from '../components/wrappers/SectionMain';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'expo-status-bar';


import { Formik } from 'formik';
//formik is used to handle form data

import AppButton from '../components/input/AppButton';
import TextField from '../components/input/TextField';
import Guide from './Guide';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../scripts/auth/firebase';



const LoginPage = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, pass) // creates user with email and password in entries
        .then(userCredentials =>
            {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => Alert(error.message))
    }
    return (
        <KeyboardAvoidingView style={styles.container} behaviour="padding">
            <SectionMain>
                {/* Logo */}
                <View style={styles.center}>
                    <Ionicons name={"bed"} size={48} color={"white"}/>
                    <AppText type="h1" text="Visual Decor" fontSize={32}/>
                </View> 

                {/* Input section */}
                <View style={styles.formArea}>          
                    <TextField
                        placeholder="Email"
                        onChangeText={text=> setEmail(text)}
                        value={email}
                    />
                    <TextField
                        placeholder="Password"
                        onChangeText={text=> setPass(text)}
                        value={pass}
                        secureTextEntry={true}
                    />
                    <Text style={styles.msgBox}>...</Text>
                    <View style={styles.centerTwo}>
                        <AppButton text="Log In" onPress={navigation}/>
                        <View style={styles.seperator}></View>
                        <AppButton 
                        text="Sign In With Google"/>
                        <Text style={styles.hintText}>
                            Don't have an account already?
                        </Text>
                        <TouchableOpacity onPress={() => handleSignUp}>
                            <Text style={styles.hintText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                    
                   
            </SectionMain>
        </KeyboardAvoidingView>
    );
}

export default function Login({navigation, route}) {
    const [currentView, setCurrentView] = React.useState("LoginPage");
  
    return(   
        <View style={{backgroundColor: "#121212", flex: 1}}>
            {
                currentView === "LoginPage" ?
                <LoginPage navigation={page => setCurrentView(page)}/> :
                <Guide/>
            }
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
    formArea : {
        width: "90%",
        alignSelf: "center"
    },
    msgBox: {
        color: "white",
        textAlign: "center",
        fontSize: 12
    },

    seperator: {
        marginTop: 20,
        marginBottom: 20,
        height: 1,
        width: "90%",
        backgroundColor: "#1e1e1e"
    },

    center: {
        paddingTop: 125,
        alignItems: "center",
        paddingBottom: 25
    },
    centerTwo: {
        alignItems: "center",
        padding: 10
    },
    hintText: {
        color: "white",
        fontSize: 12,
        margin: 10
    },
    input: {
        color: "white",
        height: "5%",
        width: "90%",
        marginBottom: 5,
        backgroundColor: "#121212",
        padding: 5,
      },
});


    // const submitForm = async(valuesToSubmit) =>    {
    //     console.log("Email", valuesToSubmit.user, valuesToSubmit.pass);
    //     navigation;
    // } 
    // handleLogin = async (values, navigation) => {
       
    // }
  // if ( values.user == "admin" && values.pass == "admin"){
                            //     console.log("Login succesful");
                            //     navigation
                            // }  else {
                            //     console.log("Incorrect details")
                            // }

/* 
 <Formik
                        initialValues={{user: '', pass: ''}}
                        onSubmit={navigation}
                        // (values) => {
                            // const {user, pass} = values;

                            // if (user == "admin" && pass == "admin") {
                            //     navigation;
                            // } else {
                            //     console.log("Incorrect details!")
                            // }
                        //}
                    >
                        {({ handleChange, handleBlur, submitForm, values }) => (
                            //  {({ handleChange, handleBlur, handleSubmit, values }) => ( 
                            // handleChange happens whenever the input fields change
                            // handleBlur happens when the input fields are not selected by the user
                            // handleSubmit runs when the form is submitted
                            // values is the values of the input field
                            <View style={styles.formArea}>
                            <Text style={styles.hintText}>Username</Text>            
                            <TextField
                                onChangeText={handleChange('user')}
                                onBlur={handleBlur('user')}
                                value={values.user}
                            />
                            <Text style={styles.hintText}>Password</Text>
                            <TextField
                                onChangeText={handleChange('pass')}
                                onBlur={handleBlur('pass')}
                                value={values.pass}
                                secureTextEntry={true}
                            />
                            <Text style={styles.msgBox}>...</Text>
                            <View style={styles.centerTwo}>
                                <AppButton text="Log In" onPress={submitForm}/>
                                <View style={styles.seperator}></View>
                                <AppButton 
                                text="Sign In With Google"
                                onPress={submitForm} />
                                <Text style={styles.hintText}>Don't have an account already?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.hintText}>Sign up</Text>
                                </TouchableOpacity>
                            </View>

                            </View>
                            )}
                    </Formik>    
*/