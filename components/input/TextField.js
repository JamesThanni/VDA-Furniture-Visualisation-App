import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

/**
 * This React Component takes in a label, icon, and other props and 
 * 
 * @returns a TextInput component with style, placeholder text and boilerplate for state handling.
 */
const TextField = ({ label, ...props }) => {
  return (
    <>
      <TextInput
        style={styles.textField}
        placeholderTextColor="grey"
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        {...props}
      />
    </>
  )
}

const styles = StyleSheet.create({
  textField: {
    padding: 10,
    paddingRight: 10,
    fontSize: 14,
    height: 60,
    marginVertical: 3,
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2e2e2e',
  },

  leftIcon: {
    left: '15px',
    top: '38px',
    position: 'absolute',
    zIndex: 1,
  },
})

export default TextField;

// <Ionicons name={props.icon} size={props.size} color={props.color}/>
