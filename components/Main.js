import * as React from 'react';
import { View, PanResponder, Animated, Text, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Visualise from './screens/Visualise';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import AppSettings from './screens/AppSettings';


// Names of screens
const homePage = "Browse";
const cartPage = "Cart"
const visualPage = 'Visualise';
const profilePage = "Profile"
const settingsPage = "Settings";


const Tab = createBottomTabNavigator();
export default function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homePage}
            screenOptions={({route}) => ({
                "headerStyle" : {
                    "backgroundColor": "#121212", 
                    "borderBottomColor": "transparent",
                    "shadowColor": "transparent",                    
                    "elevation":0
                },                
                "tabBarActiveTintColor": '#72B93A',
                "tabBarInactiveTintColor": '#ffffff',
                "headerTitleStyle" : {
                    "fontSize": 18, 
                    "color": "#ffffff",
                },
                "tabBarLabelStyle": {                    
                    "paddingBottom": "5%", 
                    "fontSize": 12,
                },
                "tabBarStyle" :{
                    "padding": 10,
                    "height": '12%',
                    "backgroundColor": '#121212',
                    "borderTopWidth": 0,
                                    
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homePage) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === cartPage) {
                        iconName = focused ? 'cart' : 'cart-outline'; 
                    } else if (rn === visualPage) {
                        iconName = focused ? 'layers' : 'layers-outline';
                    } else if (rn === profilePage) {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (rn === settingsPage) { 
                        
                        iconName = focused ? 'cog' : 'cog-outline';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color}/>
                    
                },
                
            })}
            /*</NavigationContainer>*/
            >      
            <Tab.Screen name={homePage} component={Home}/>    
            <Tab.Screen name={cartPage} component={Cart}/>        
            <Tab.Screen name={visualPage} component={Visualise}/>
            <Tab.Screen name={profilePage} component={Profile}/>
            <Tab.Screen name={settingsPage} component={AppSettings}/>
                

            </Tab.Navigator>
            
        </NavigationContainer>
        /*
        Navigation Container - The main container for the views users will navigate through based on the selected window in the bottom navbar
        Tab Navigator - the controller for selected tab
        Tab Navigator, ScreenOptions - styling customisation for the navbar. We use an if statement to use different icons for different pages.
        Tab Screen - the view displayed when a tab is selected in the navbar.
        */
    );
}


