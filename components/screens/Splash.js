import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Main from '../Main';

export default function Splash({navigation, route, onPress}) {
    const visualPage = 'Place Furniture';
    const homePage = "Select Furniture";
    const settingsPage = "Settings";
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
                style={styles.logo}
                source={require('../../assets/sofa.png')}
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

const styles = StyleSheet.create({
    logo: {
      width: 66,
      height: 58,
    },
  });
  


