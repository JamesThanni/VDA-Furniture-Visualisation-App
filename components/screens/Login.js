import * as React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import Header from '../info/Header';

import SectionMain from '../wrappers/SectionMain';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'expo-status-bar';


import { Formik } from 'formik';


import AppButton from '../input/AppButton';
import TextField from '../input/TextField';
import Guide from './Guide';
import { TouchableOpacity } from 'react-native-gesture-handler';
//formik is used to handle form data


const LoginPage = ({navigation}) => {

    
    // const submitForm = async(valuesToSubmit) =>    {
    //     console.log("Email", valuesToSubmit.user, valuesToSubmit.pass);
    //     navigation;
    // } 
    const [currentView, setCurrentView] = React.useState("GuidePage");
    return (
        <View style={styles.container}>
            <SectionMain>
                <StatusBar style="dark" />
                <View style={styles.center}>
                    <Ionicons name={"bed"} size={48} color={"white"}/>
                    <Header headerText="Visual Decor" fontSize={32}/>
                </View> 
                
                    <Formik
                        initialValues={{user: '', pass: ''}}
                        onSubmit={navigation}
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
                                {/* <AppButton 
                                text="Sign In With Google"
                                //onPress={handleSubmit} />*/}
                                {/* <Text style={styles.hintText}>Don't have an account already?</Text>
                                <TouchableOpacity>
                                    <Text style={styles.hintText}>Sign up</Text>
                                </TouchableOpacity> */}
                            </View>

                            </View>
                            )}
                    </Formik>   
                   
            </SectionMain>
        </View>
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
  // if ( values.user == "admin" && values.pass == "admin"){
                            //     console.log("Login succesful");
                            //     navigation
                            // }  else {
                            //     console.log("Incorrect details")
                            // }