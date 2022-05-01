import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Alert} from "react-native";
import {CartContext} from "../CartContext.js";
import AppButton from "../components/input/AppButton.js";
import AppText from "../components/info/AppText.js";
import * as AppNavigation from '../components/nav/Navigator.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

//TODO: rename "item" to "cartProduct" where necessary for syntax clarity

export default function Cart({object, setObject}){
    const {items, getItemsCount, getTotalPrice, removeCartItem} = useContext(CartContext);
    var objectName = object.name;

    
    
    const Totals = () => {
        
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        if (items.length > 0) { 
            return(
                <View style={styles.cartSummary}>                    
                    <View style={styles.cartLineTotal}>
                        <Text style={[styles.lineLeft, styles.lineTotal]}>Total:</Text>
                        <Text style={styles.mainTotal}>£ {total}</Text>                        
                    </View>
                    <AppButton text="Buy Now" onPress={() => AppNavigation.navigate("Purchase")}/>
                </View>
            )
        } else {
            return <AppText text="No products in your cart"/>;
        }
    }

    const createVisualAlert = (product) => {
        Alert.alert(
            "Virtual Decor",
            `Visualising ${product}`,
            [
                {text:"Continue", onPress: () => console.log("Continue Pressed")}                
            ]
        )
    };    

    function addToVisual(item) {
        setObject(item.product); // add to visual
        createVisualAlert(item.product.name); // alert action
    }

    function renderItem({item}){
        return(
            <ScrollView>
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>{item.qty}</Text>
                    </View>
                    <View style={styles.cartInfo}>
                        <Text style={styles.lineLeft}>{item.product.name}</Text>
                        <Text style={styles.productTotal}> £{item.totalPrice}</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.cartLineOption} onPress={() => addToVisual(item) }>
                        <Ionicons name={"layers-outline"} size={24} color={"white"}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartLineOption} onPress={() => console.log(`Removing item ${item.product.name}`)}>
                        <Ionicons name={"close"} size={24} color={"red"}/> 
                    </TouchableOpacity>
                    
                </View>                
            </ScrollView>
        )
    }
    //onPress={() => removeItem(item.product.name)}>

    return(
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={Totals}
        />
        
        
    )

}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#121212",
        flex: 1
    },   
    cartSummary: {
        marginBottom: "auto",
    },
    cartLineOption: {
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        width: "12.5%",
        marginLeft: "auto",        
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
    },
	cartLine: {
        display: "flex",
		flexDirection: 'row',
		width: '100%',
		padding: 10,
        borderRadius: 10,
        backgroundColor: "#121212",
        marginBottom: "auto"
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5,
        resizeMode: 'contain',
	},
    quantity: {
        backgroundColor: "#976A35",
        borderRadius: 100,
        padding: 5,
        height: "30%",
        width:"7.5%",
        marginLeft: -30,
        marginRight: 10,
        alignItems: "center"
    },
    quantityText: {
        color: "white",
        fontWeight: "800",
        fontSize: 12
    },
	cartLineTotal: {        
        marginBottom: "auto",
		flexDirection: 'row',
        padding: 10,
	},
	productTotal: {
        fontSize: 16,
        color: '#976A35',
		fontWeight: 'bold'
	},
	lineTotal: {
        color: 'white',
        fontSize: 20,        
		fontWeight: '300',
        marginLeft: 30,        
        padding: 10
	},
	lineLeft: {
		fontSize: 16,
		lineHeight: 40,
		color: 'white',
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: '300',
		lineHeight: 40,
		color: 'white',
		textAlign: 'right',
        marginRight: 30,        
        fontSize: 20,
        padding: 10,
	},
	itemsList: {
		backgroundColor: '#121212'
	},
	itemsListContainer: {
		backgroundColor: '#121212',
		paddingVertical: 8,
		marginHorizontal: 8,
        flex: 1
	}
})