import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet} from "react-native";
import {CartContext} from "../../CartContext.js";
import AppButton from "../input/AppButton.js";

export default function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Cart Total</Text>
                <Text style={styles.mainTotal}>£ {total}</Text>
            </View>
        )
    }

    function renderItem({item}){
        return(
            <View>
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>{item.qty}</Text>
                    </View>
                    <Text style={styles.lineLeft}>
                        {item.product.name} - 
                        <Text style={styles.productTotal}> £{item.totalPrice}</Text>
                    </Text>
                    
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
		flexDirection: 'row',
        padding: 10
	},
	productTotal: {
        color: 'white',
		fontWeight: 'bold'
	},
	lineTotal: {
        color: 'white',
		fontWeight: '300'
	},
	lineLeft: {
		fontSize: 16,
		lineHeight: 40,
		color: 'white'
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
		textAlign: 'right'
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