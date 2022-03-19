import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



export default function AppSettings({navigation}) {
    return (
        <View style={{backgroundColor: '#121212', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=> navigation.navigate('Place Furniture')}
                style={{fontSize: 26, fontWeight: 'bold', color:'#ffffff'}}>Settings Screen</Text>

        </View>
    );
}
