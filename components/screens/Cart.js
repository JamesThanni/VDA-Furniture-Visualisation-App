import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../info/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductListItem from '../info/ProductListItem';
import ProductImages from '../info/ProductImages';

export default function Cart({navigation}) {
    
    var cart = ProductListItem.cart;
    function removeFromCart(product){
        ProductListItem.cart.pop(product); //ERROR CHECK FOR IF CONTAINS PRODUCT
    }

    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Header headerText="Your cart"/>
                <View>
                    <Image>

                    </Image>
                    <TouchableOpacity style={styles.quantity}>
                        <Text style={styles.quantText}>1</Text>
                    </TouchableOpacity>
                    <Text>

                    </Text>
                    <Ionicons name={"close"} size={20} color={"red"}/>

                </View>
            </View>
            
        </View>
    );
}

// Placeholder page for cart list and price totaling. Will have option to add to visual. Extended functionality to add checkout section.
const styles = StyleSheet.create({

    container : {
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    cart : {
         flex: 1, 
         display: "flex", 
         alignItems: 'flex-start', 
         justifyContent: 'flex-start', 
         width: "90%", 
         backgroundColor: '#1e1e1e'
    },
    quantity : {
        backgroundColor: "#121212",
        borderRadius: 1000000,
        padding: 2, 
        fontSize: 12
    },
    quantText : {
        color: "white",
        padding: 2,
        alignSelf: "center"
    }


});