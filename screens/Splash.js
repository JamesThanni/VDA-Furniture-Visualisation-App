import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Main from '../components/Main';

export default function Splash({navigation, route, onPress}) {
    const visualPage = 'Place Furniture';
    const browsePage = "Select Furniture";
    const settingsPage = "Settings";
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=> {onPress('Guide')}}>
            <Image
                style={styles.logo}
                source={require('../../assets/sofa-icon.png')}
                onPress={()=> {onPress('Guide')}}
            />
            <Text 
            style={{color: '#ffffff', fontSize: 32, fontWeight: 'bold'}} 
            onPress={()=> {onPress('Guide')}}>
                Virtual Decor
            </Text>
            
        </View>
        
    );
}
// Basic page with logo and app title. Press page, icon or logo to take you to guide page.

const styles = StyleSheet.create({
    logo: {
      width: 66,
      height: 58,
    },
  });
  


