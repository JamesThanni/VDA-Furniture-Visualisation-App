import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// A boilerplate text component with custom styling for a header and plain text
const AppText = (props) => {
  return props.type === 'h1' ? (
    <Text style={[styles.header, { textAlign: props.align }]} {...props}>
      {props.text}{' '}
    </Text>
  ) : (
    <Text style={styles.text}>{props.text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    textAlign: 'left',
    lineHeight: 25,
    padding: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'left',
    padding: 10,
  },
})

export default AppText
