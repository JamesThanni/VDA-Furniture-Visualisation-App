import { StyleSheet } from 'react-native'
// a script that stores repetitive styles so they can be used by all components
const globalStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default globalStyles
