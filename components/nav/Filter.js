import React from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'

// Unused component that would be used to render multiple filter buttons
const Filter = (props) => {
  const colorStyles = {
    backgroundColor: props.status ? '#976A35' : '#1e1e1e',
  }

  return (
    <View>
      <TouchableOpacity style={[styles.filter, colorStyles]} {...props}>
        <Text style={styles.filterText}>{props.category}</Text>
      </TouchableOpacity>
    </View>
  )
}
// Create tags to filter items by category
// Extended functionality for item filtering based on category property of product objects.
// colorStyles function - changes background colour if the status is true or false (selected or not selected)

const styles = StyleSheet.create({
  filter: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    marginRight: 10,
    alignItems: 'center',
  },
  filterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '100',
    textAlign: 'center',
  },
})

export default Filter
