import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

// A boilerplate wrapper for the application with custom styling
export default MainContainer = (props) => {
  return (
    <View style={styles.container} {...props}>
      {props.children}
    </View>
  )
} // make take other props such as additional styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#121212',
  },
})
