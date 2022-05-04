import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../../components/info/AppText'
import IconButton from '../../components/input/IconButton'

/**
 * A Light controls menu with three icon buttons that call the 
 * change the time by calling the change time function 
 * function to update the state of teh sceneTime.
 */
export default function LightControls({ changeTime }) {
  return (
    <View style={styles.controls}>
      <View style={styles.column}>
        <AppText type="h1" text="Lighting Effects" />
        <View style={styles.row}>
          <IconButton name="sunny" size={30} onPress={() => changeTime('Morning')} />
          <IconButton name="moon" size={30} onPress={() => changeTime('Night')} />
          <IconButton name="musical-notes" size={30} onPress={() => changeTime('Party!')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    flex: 1,
    marginTop: -250,
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderRadius: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: -10,
  },
})
