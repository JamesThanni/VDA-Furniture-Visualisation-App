import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Main from '../components/AppStack';
import AppText from '../components/info/AppText';
import AppButton from '../components/input/AppButton';

const GuidePage = ({onPress}) => (

        <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/guide-image.jpg")}/>
            <View style={styles.instructions}>
            <AppText type="h1" text={'Visualise your Room'}/>
                <Text style={styles.guideText}>
                Pick from a wide range of decor items that fit your space. 
                Add a product to your cart and press the layers icon to 
                generate a visualisation of the chosen furniture in your room!
                </Text>
                <AppButton text="Get Started" onPress={onPress}/>
            </View>
                
        </View>
        
    );
    
// Basic description of the app functionality for new users with nice splash image

export default function Guide({navigation, route}) {
    const VISUALISE_SCREEN = 'Place Furniture';
    const BROWSE_SCREEN = "Select Furniture";
    const SETTINGS_SCREEN = "Settings";

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
            marginTop: 20,
            marginBottom: 30,
            color: '#ffffff',
            width: "95%",
            fontWeight: "200"
        },
        img: {
            width: "100%",
            height: "65%",
        },
        instructions: {
            padding: 20,
            width: "100%",
            textAlign: 'center',
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


