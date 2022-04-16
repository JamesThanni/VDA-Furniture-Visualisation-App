import * as React from 'react';
import { View, PanResponder, Animated, Text, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Visualise from './screens/Visualise';
import Home from './screens/Home.js';
import Cart  from "./screens/Cart.js";
import Configure from './screens/Configure';
import AppSettings from './screens/AppSettings';
import Filter from "./input/Filter";
// Shop pages
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductInfo } from "./screens/Info.js";
import { CartProvider } from "../CartContext.js";
import { CartButton } from "./input/CartButton.js";

// Names of screens
const homePage = "Products";
const cartPage = "Cart"
const visualPage = 'Visualise';
const configurePage = "Configure"
const settingsPage = "Settings";


const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={({route}) => ({
        headerShown: false
        // "headerStyle" : {
        //     "backgroundColor": "#121212", 
        //     "borderBottomColor": "transparent",
        //     "shadowColor": "transparent",                    
        //     "elevation":0
        // },  
        // "headerTitleStyle" : {
        //     "fontSize": 18, 
        //     "color": "#ffffff",
        // },  
    })}>
        <HomeStack.Screen name="Home" component={Home} options={({navigation}) => ({title: 'Browse Products', headerRight: () => <CartButton navigation={navigation} />})} />
        <HomeStack.Screen name="ProductInfo" component={ProductInfo} options={({navigation}) => ({title: 'Browse Products', headerRight: () => <CartButton navigation={navigation} />})} />
    </HomeStack.Navigator>
  );
}




function Main() {
    return (
        <CartProvider>
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
                    "headerTitleStyle" : {
                        "fontSize": 24, 
                        "color": "#ffffff",
                    },              
                    "tabBarActiveTintColor": '#ffffff',
                    "tabBarInactiveTintColor": '#ffffff',        
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
                        } else if (rn === configurePage) {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (rn === settingsPage) { 
                            
                            iconName = focused ? 'cog' : 'cog-outline';
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color}/>
                        
                    },
                    
                })}
                /*</NavigationContainer>*/
                >  
                <Tab.Screen name={homePage} component={HomeStackScreen}/>   
                <Tab.Screen name={cartPage} component={Cart}/>        
                <Tab.Screen name={visualPage} component={Visualise}/>
                <Tab.Screen name={configurePage} component={Configure}/>
                <Tab.Screen name={settingsPage} component={AppSettings}/>
                
                    

                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
        /*
        Navigation Container - The main container for the views users will navigate through based on the selected window in the bottom navbar
        Tab Navigator - the controller for selected tab
        Tab Navigator, ScreenOptions - styling customisation for the navbar. We use an if statement to use different icons for different pages.
        Tab Screen - the view displayed when a tab is selected in the navbar.
        */
    );
}
export default Main;


