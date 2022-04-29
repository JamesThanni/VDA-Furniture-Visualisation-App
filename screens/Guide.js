import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Main from '../components/Main';
import Header from '../components/info/Header';

const GuidePage = ({onPress}) => (

        <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/guide-image.jpg")}/>
            <Header headerText={'Visualise your Room'}/>
            <Text style={styles.guideText}>
                    Pick from a wide range of decor items that fit your space. 
                    Input the dimensions of your room in the settings page and 
                    use the visualise button to generate a visualisation of the 
                    chosen furniture in your room!
            </Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
                
        </View>
        
    );
    
// Basic description of the app functionality for new users with nice splash image

export default function Guide({navigation, route}) {
    const visualPage = 'Place Furniture';
    const browsePage = "Select Furniture";
    const settingsPage = "Settings";

    const [currentView, setCurrentView] = React.useState("GuidePage");
  
    return(   
        <View style={{backgroundColor: "#121212", flex: 1}}>
            {
                currentView === "GuidePage" ?
                <GuidePage onPress={page => setCurrentView(page)}/> :
                <Main/>
            }
        </View>
    
  );
}        
// moves page to home page when the get started button is selected

const styles = StyleSheet.create({
        container: {
            display: 'flex',            
            alignItems: 'center', 
            justifyContent: 'flex-start',
            backgroundColor: '#121212', 
            flex: 1
        },
        guideText: {
            fontSize: 12, 
            textAlign: 'center',
            marginBottom: 30,
            color: '#ffffff',
            width: "95%",
            fontWeight: "200"
        },
        img: {
            width: "100%",
            height: "65%",
        },
        button: {
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: '#976A35',
            borderRadius: 10
        },
        buttonText: {
            color: '#fff',
            fontSize: 16
        }
    });


