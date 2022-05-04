import * as React from 'react'
import { View, Text, StyleSheet, Image, Button, KeyboardAvoidingView, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import AppText from '../info/AppText'
import AppButton from '../input/AppButton'
import TextField from '../input/TextField'
import Guide from './GuideScreen'

const LoginPage = ({ navigation }) => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  // state variables that update on entry of text

  /**
   * A function logs a user in if the user's username input is equal to "admin" 
   * and the password's input is equal to "admin", then navigate to the next screen. 
   * Otherwise, display an alert that the inputs are invalid
   * @returns  navigation action or an error alert
   */
  function handleSignUp() {
    return user.toLowerCase() == 'admin' && pass.toLowerCase() == 'admin'
      ? navigation
      : () =>
          Alert.alert('Virtual Decor', 'Incorrect details. Please use `admin` for both entries.')
  }

  // The main login page
  return (
    <KeyboardAvoidingView style={styles.loginContainer} behaviour="padding">
        {/* Logo */}
        <View style={styles.center}>
          <Ionicons name={'bed'} size={48} color={'white'} />
          <AppText type="h1" text="Virtual Decor" fontSize={32} />
        </View>

        {/* Input section */}
        <View style={styles.formArea}>
          <TextField placeholder="Username" onChangeText={(text) => setUser(text)} value={user} />
          <TextField
            placeholder="Password"
            onChangeText={(text) => setPass(text)}
            value={pass}
            secureTextEntry={true}
          />
          <View style={styles.centerTwo}>
            <AppButton text="Log In" onPress={handleSignUp()} />
          </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default function Login({ navigation, route }) {
  const [currentView, setCurrentView] = React.useState('LoginPage')

  return (
    <View style={{ backgroundColor: '#121212', flex: 1 }}>
      {currentView === 'LoginPage' ? (
        <LoginPage navigation={(page) => setCurrentView(page)} />
      ) : (
        <Guide />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "10%",
    backgroundColor: '#121212',
  },
  formArea: {
    width: '90%',
    alignSelf: 'center',
  },
  msgBox: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },

  seperator: {
    marginTop: 20,
    marginBottom: 20,
    height: 1,
    width: '90%',
    backgroundColor: '#1e1e1e',
  },

  center: {
    paddingTop: 125,
    alignItems: 'center',
    paddingBottom: 25,
  },
  centerTwo: {
    alignItems: 'center',
    padding: 10,
  },
  hintText: {
    color: 'white',
    fontSize: 12,
    margin: 10,
  },
  input: {
    color: 'white',
    height: '5%',
    width: '90%',
    marginBottom: 5,
    backgroundColor: '#121212',
    padding: 5,
  },
})
