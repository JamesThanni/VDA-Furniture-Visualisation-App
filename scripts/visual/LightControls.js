import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import AppText from '../../components/info/AppText';
import IconButton from '../../components/input/IconButton';

export default function LightControls({changeTime}) {
    return (
        <View style={styles.controls}>
            <View style={styles.column}>
                <AppText type="h1" text="Select a room lighting style!"/>
                <View style={styles.row}>
                    <IconButton name="sunny" size={30} onPress={() => changeTime("Morning")}/>
                    <IconButton name="moon" size={30} onPress={() => changeTime("Night")}/>
                    <IconButton name="musical-notes" size={30} onPress={() => changeTime("Party!")}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        flex: 1,
        marginTop: -250,
        backgroundColor: "rgba(0,0,0,0.75)",
        borderRadius: 10
      },
      column: {
          flexDirection: 'column',
          alignItems: "center",
          paddingTop: 20
      },
      row: {
        flexDirection: 'row'
      }
})


