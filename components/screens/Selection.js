import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FurnitureChoice = (props) => {
    return (
        <View style={styles.objectSection}>
            <Image
                style={styles.object}
                source={require('../../assets/sofa.png')}
                onPress={()=> {onPress("Main")}}
            />
            <Text style={styles.objectName} >Chair</Text>
        </View>
    );
}

export default function Selection({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={()=> navigation.navigate('Place Furniture')}
                style={{fontSize: 12, padding: 10, fontWeight: 'bold'}}>Return to View</Text>
            <FurnitureChoice/>
            <FurnitureChoice/>
            <FurnitureChoice/>
            <FurnitureChoice/>
        </View>
    );
}


const styles = StyleSheet.create({
    objectSection: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center", 
        justifyContent: "flex-start",
        width: "100%",
        padding: 50,
    },
    objectName: {
        padding: 10,
    },
    object: {
        width: 66,
        height: 58,
    },
});