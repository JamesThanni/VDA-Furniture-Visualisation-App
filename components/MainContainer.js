import * as React from 'react';
import { View, Text, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Placement from './screens/Placement';
import Selection from './screens/Selection';
import SettingsScreen from './screens/SettingsScreen';


// Names of screens
const homeName = 'Place Furniture';
const detailsName = "Select Furniture";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                "headerStyle" : {"backgroundColor": "white"},                
                "tabBarActiveTintColor": '#77DD77',
                "tabBarInactiveTintColor": 'black',
                "tabBarLabelStyle": {                    
                    "paddingBottom": 20, 
                    "fontSize": 10
                },
                "tabBarStyle" :{
                    "padding": 10,
                    "height": '15%',
                    "backgroundColor": '#white',  
                                    
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === detailsName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'; 
                    } else if (rn === settingsName) {
                        iconName = focused ? 'cog' : 'cog-outline';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color}/>
                    
                },
                
            })}
            /*</NavigationContainer>*/
            >            
            <Tab.Screen name={detailsName} component={Selection}/>
            <Tab.Screen name={homeName} component={Placement}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>
                

            </Tab.Navigator>
        </NavigationContainer>
        /*
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Hello!</Text>
        </View>
        */
    );
}


