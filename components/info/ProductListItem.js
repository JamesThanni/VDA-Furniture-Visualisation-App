import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ProductListItem = (props) => {
    var filepath  = `../../assets/${props.img}.jpg`;
    return (
        <View style={styles.objectSection}>
            <Image
                style={styles.object}
                source={require(filepath)}
                onPress={()=> {onPress("Main")}}
            />
            <View style={styles.description}>
                <Text style={styles.objectName}>{props.name}</Text>
                <Text style={styles.objectMaterial}>{props.material}</Text>
            </View>
            <Text style={{flex: 1, justifySelf: "flex-end", alignSelf: "center", color: "white"}}>
                Select 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    objectSection: {
        display: "flex",
        flexDirection: "row",
        flex: 1, 
        justifyContent: "flex-start",
        width: "95%",
        padding: 7.5,
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        margin: 10
    },
    object: {
        flex: 2,
        width: 106,
        height: 87,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 5
    },
    objectName: { 
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    objectMaterial: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        color: '#72B93A'
    },
    description: {
        display: "flex",
        flex: 3, 
        flexDirection:"column",
        alignSelf: "flex-start",
        margin: 5,
        marginTop: 10
    }
});

export default ProductListItem;
