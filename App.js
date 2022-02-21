import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, Image, View, Settings } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from './components/MainContainer';
import SplashScreen from './components/screens/SplashScreen';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
});
const Splash = ({onPress}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Image
        style={styles.logo}
        source={require('./assets/sofa.png')}
        onPress={()=> {onPress("Main")}}
      />
    <Text style={{fontSize: 32, fontWeight: 'bold'}} onPress={()=> {onPress("Main")}}>Virtual Decor</Text>
  </View>
);

const Main = <MainContainer/>;

export default function App({navigation}) {
  
  const [currentView, setCurrentView] = React.useState("Splash");
  
  return(   
      <View style={{flex: 1}}>
        {
          currentView === "Splash" ?
          <Splash onPress={page => setCurrentView(page)}/> :
          <MainContainer/>
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