import React from 'react';
import {View, StyleSheet, Image, Button, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductImages from "./ProductImages";

export default function ProductCartItem (props) {
    var imageID = ProductImages[props.img];
    return (
        <View style={styles.cartItem}>
            <Image
            style={styles.productImg}
            source={imageID}
            />
            <TouchableOpacity style={styles.quantity}>
                <Text style={styles.quantText}>1</Text>
            </TouchableOpacity>
            <View style={styles.productText}>
            <Text style={styles.productDetails}>
                {props.name} - {props.material}
            </Text>
            
            <Text style={styles.productPrice}>{props.price}</Text>
            </View>
            <TouchableOpacity style={styles.removeBtn}>
                <Ionicons name={"close"} size={20} color={"red"}/>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({ 

    cartItem : {
        display: 'flex',
        flexDirection: "row",
        marginLeft: 20
    },
    productImg :{
        width: 75,
        height: 60
    }, 
    quantity : {
        backgroundColor: "#121212",
        borderRadius: 100000000,        
        height: "55%",
        marginLeft: "-2%"
    },
    quantText : {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        padding: 10,
        alignSelf: "center"
    },
    productText : {
        display: "flex",
        margin: 10,
        flexDirection: "column"
    },
    productDetails : {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: '200'
    },
    productPrice : {
        color: "#72B93A",
        fontSize: 14,
        fontWeight: '200'
    }, 
    removeBtn : {
        margin: 10
    }

});