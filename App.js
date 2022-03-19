import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, Image, View, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './components/Main';
import Guide from './components/screens/Guide';
import Splash from './components/screens/Splash';



export default function App({navigation}) {
  
  const [currentView, setCurrentView] = React.useState("Splash");
  
  return(   
      <View style={{backgroundColor: "#121212", flex: 1}}>
        {
          currentView === "Splash" ?
          <Splash onPress={page => setCurrentView(page)}/> :
          <Guide/>
        }
      </View>
  
  );

}

  /*
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  */
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/