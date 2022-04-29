import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, FlatList, StyleSheet, ScrollView} from "react-native";
import {CartContext} from "../CartContext.js";
import AppButton from "../components/input/AppButton.js";
import AppText from "../components/info/AppText.js";
import * as AppNavigation from '../components/nav/Navigator.js';

export default function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals(){
        
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        if (items.length > 0) { 
            return(
                <ScrollView>                    
                    <View style={styles.cartLineTotal}>
                        <Text style={[styles.lineLeft, styles.lineTotal]}>Total:</Text>
                        <Text style={styles.mainTotal}>£ {total}</Text>                        
                    </View>
                    <AppButton text="Buy Now" onPress={() => AppNavigation.navigate("Purchase")}/>
                </ScrollView>
            )
        } else {
            return <AppText text="No products in your cart"/>;
        }
    }
    //console.log(`${items[0].product.name} added to cart`) 

    function renderItem({item}){
        return(
            <View>
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>{item.qty}</Text>
                    </View>
                    <View style={styles.cartInfo}>
                        <Text style={styles.lineLeft}>{item.product.name}</Text>
                        <Text style={styles.productTotal}> £{item.totalPrice}</Text>
                    </View>
                    
                </View>
                
            </View>
        )
    }

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
        backgroundColor: "#121212"
    },   
	cartLine: {
        display: "flex",
		flexDirection: 'row',
		width: '100%',
		padding: 10,
        borderRadius: 10,
        backgroundColor: "#121212",
        marginBottom: "2%"
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
        display: "flex",
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
		marginHorizontal: 8
	}
})