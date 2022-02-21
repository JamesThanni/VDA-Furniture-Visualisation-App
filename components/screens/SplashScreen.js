import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {View, Text} from 'react-native';
import MainContainer from '../MainContainer';
export default function SplashScreen({navigation, route}) {
    const homeName = 'Place Furniture';
    const detailsName = "Select Furniture";
    const settingsName = "Settings";
    return (
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=> 
                    {navigation.navigate('Main')}}
                style={{fontSize: 26, fontWeight: 'bold'}}>Virtual Decor</Text>
        </View>
        
    );
}


