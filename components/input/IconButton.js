import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

// A button that will contain an icon and will handle functions
const IconButton = (props) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={props.function}>
      <Ionicons name={props.name} size={props.size} color={'white'} {...props} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    margin: '10%',
  },
})

export default IconButton
