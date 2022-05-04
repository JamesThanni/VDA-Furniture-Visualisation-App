import React from 'react';
import Login from './components/screens/LoginScreen';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release.']);
LogBox.ignoreLogs(['THREE.FileLoader: HTTP Status 0 received.']);
export default function App({navigation}) {
  return <Login/>;
}
