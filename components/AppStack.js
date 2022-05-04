import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { navigationRef } from './nav/Navigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import Visualise from './screens/VisualiseScreen'
import Home from './screens/BrowseScreen.js'
import Cart from './screens/CartScreen.js'
import PurchaseScreen from './screens/PurchaseScreen.js'
import SetupScreen from './screens/SetupScreen'
import AppSettings from './screens/OptionsScreen'

// Shop pages
import { ProductInfo } from './screens/InfoScreen.js'
import { CartProvider } from '../scripts/context/CartDataContext.js'
import { CartButton } from './input/CartButton.js'

// Names of screens
const BROWSE_SCREEN = 'Browse'
const CART_SCREEN = 'Cart'
const VISUALISE_SCREEN = 'Visualise'
const SETUP_SCREEN = 'Setup'
const OPTIONS_SCREEN = 'Options'

const HomeStack = createNativeStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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
      })}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Browse Products',
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <HomeStack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={({ navigation }) => ({
          title: 'Browse Products',
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
    </HomeStack.Navigator>
  )
}

const CartStack = createNativeStackNavigator()
function CartStackScreen(props) {
  return (
    <CartStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <CartStack.Screen
        name="CartScreen"
        children={() => <Cart object={props.object} setObject={props.setObject} />}
      />
      <CartStack.Screen
        name="Purchase"
        children={() => <PurchaseScreen object={props.object} setObject={props.setObject} />}
      />
    </CartStack.Navigator>
  )
}

const tabTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
}
const Tab = createBottomTabNavigator()
export default function AppStack() {
  const [object, setObject] = React.useState({})
  return (
    <CartProvider>
      <NavigationContainer theme={tabTheme} ref={navigationRef}>
        <Tab.Navigator
          initialRouteName={BROWSE_SCREEN}
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: '#121212',
              borderBottomColor: 'transparent',
              shadowColor: 'transparent',
              elevation: 0,
              height: 100,
            },
            headerTitleStyle: {
              fontSize: 28,
              color: '#ffffff',
              fontWeight: '800',
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#ffffff',
            tabBarLabelStyle: {
              paddingBottom: '5%',
              fontSize: 12,
            },
            tabBarStyle: {
              padding: 10,
              height: '12%',
              backgroundColor: '#121212',
              borderTopWidth: 0,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              let rn = route.name

              if (rn === BROWSE_SCREEN) {
                iconName = focused ? 'home' : 'home-outline'
              } else if (rn === CART_SCREEN) {
                iconName = focused ? 'cart' : 'cart-outline'
              } else if (rn === VISUALISE_SCREEN) {
                iconName = focused ? 'layers' : 'layers-outline'
              } else if (rn === SETUP_SCREEN) {
                iconName = focused ? 'person' : 'person-outline'
              } else if (rn === OPTIONS_SCREEN) {
                iconName = focused ? 'cog' : 'cog-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name={BROWSE_SCREEN} component={HomeStackScreen} />
          <Tab.Screen
            name={CART_SCREEN}
            children={() => <CartStackScreen object={object} setObject={setObject} />}
          />
          <Tab.Screen name={VISUALISE_SCREEN} children={() => <Visualise object={object} />} />
          <Tab.Screen name={OPTIONS_SCREEN} component={AppSettings} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
    /*
        Navigation Container - The main container for the views users will navigate through based on the selected window in the bottom navbar
        Tab Navigator - the controller for selected tab
        Tab Navigator, ScreenOptions - styling customisation for the navbar. We use an if statement to use different icons for different pages.
        Tab Screen - the view displayed when a tab is selected in the navbar.
        */
  )
}
