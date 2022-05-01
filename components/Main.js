import * as React from 'react';
import { View, Text, Settings } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './../components/nav/Navigator';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Visualise from '../screens/Visualise';
import Home from '../screens/Home.js';
import Cart  from "../screens/Cart.js"
import PurchaseScreen from "../scripts/shop/Purchase.js";
import SetupScreen from '../screens/SetupScreen';
import AppSettings from '../screens/AppSettings';

// Shop pages
import { ProductInfo } from "../screens/Info.js";
import { CartProvider } from "../CartContext.js";
import { CartButton } from "./input/CartButton.js";

// Names of screens
const BROWSE_SCREEN = "Browse";
const CART_SCREEN = "Cart"
const VISUALISE_SCREEN = 'Visualise';
const SETUP_SCREEN = "Setup"
const SETTINGS_SCREEN = "Settings";


const HomeStack = createNativeStackNavigator();
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
};

const CartStack = createNativeStackNavigator();
function CartStackScreen(props) {
    return (
      <CartStack.Navigator
      screenOptions={({route}) => ({
          headerShown: false
      })}>
          <CartStack.Screen name="CartScreen" children={() => <Cart object={props.object} setObject={props.setObject}/>}/>
          <CartStack.Screen name="Purchase" children={() => <PurchaseScreen object={props.object} setObject={props.setObject}/>}/>
      </CartStack.Navigator>
    );
};


const MyTheme = {
...DefaultTheme,
colors: {
    ...DefaultTheme.colors,
    background: '#121212'
},
};

const Tab = createBottomTabNavigator();
export default function Main() {
    const [object, setObject] = React.useState({});
    return (
        <CartProvider>
            <NavigationContainer 
                theme={MyTheme}
                ref={navigationRef}
            >
                
                <Tab.Navigator
                    initialRouteName={SETUP_SCREEN}
                    screenOptions={({route}) => ({
                        "headerStyle" : {
                            "backgroundColor": "#121212", 
                            "borderBottomColor": "transparent",
                            "shadowColor": "transparent",                    
                            "elevation":0,
                        },  
                        "headerTitleStyle" : {
                            "fontSize": 24, 
                            "color": "#ffffff",
                            "paddingBottom": 5,                            
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

                            if (rn === BROWSE_SCREEN) {
                                iconName = focused ? 'home' : 'home-outline';
                            } else if (rn === CART_SCREEN) {
                                iconName = focused ? 'cart' : 'cart-outline'; 
                            } else if (rn === VISUALISE_SCREEN) {
                                iconName = focused ? 'layers' : 'layers-outline';
                            } else if (rn === SETUP_SCREEN) {
                                iconName = focused ? 'person' : 'person-outline';
                            } else if (rn === SETTINGS_SCREEN) { 
                                
                                iconName = focused ? 'cog' : 'cog-outline';
                            }
                            
                            return <Ionicons name={iconName} size={size} color={color}/>
                            
                        },
                        
                    })}
                >  
                    <Tab.Screen name={SETUP_SCREEN} component={SetupScreen}/>
                    <Tab.Screen name={BROWSE_SCREEN} component={HomeStackScreen}/>   
                    <Tab.Screen name={CART_SCREEN} children={() => <CartStackScreen object={object} setObject={setObject}/>} />
                    <Tab.Screen name={SETTINGS_SCREEN} component={AppSettings}/>
                    <Tab.Screen name={VISUALISE_SCREEN} children={()=><Visualise object={object}/>} />                 
                </Tab.Navigator>
            </NavigationContainer>
        </CartProvider>
        /*
        visualObject={visualObject} setVisual={setVisualObject}
        Navigation Container - The main container for the views users will navigate through based on the selected window in the bottom navbar
        Tab Navigator - the controller for selected tab
        Tab Navigator, ScreenOptions - styling customisation for the navbar. We use an if statement to use different icons for different pages.
        Tab Screen - the view displayed when a tab is selected in the navbar.
        */
    );
}



