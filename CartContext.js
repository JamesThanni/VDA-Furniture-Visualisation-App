import React, {createContext, useState} from "react";
import {getProduct} from "./db/ProductData.js";
import {View, Text, FlatList, StyleSheet} from "react-native";

export const CartContext = createContext();

export function CartProvider(props){

    const [items, setItems] = useState([]);

    function addItemToCart(id){
        const product = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if(!item){
                return [...prevItems, {
                    id, 
                    qty: 1,
                    product, 
                    totalPrice: product.price
                }]
            }else{
                return prevItems.map((item) => {
                    if(item.id == id){
                        item.qty++;
                        item.totalPrice += product.price;
                    }
                    return item;
                })
            }
        })
    }

    function getItemsCount(){
        return items.reduce((sum,item) => (sum + item.qty), 0)
    }

    function getCartItems(){
        return items;
    }

    function getTotalPrice(){
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    return(
        <CartContext.Provider style={styles.cart} value={{items, getItemsCount, addItemToCart, getTotalPrice, getCartItems}}>
            {props.children}
        </CartContext.Provider>
    )

}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: "#121212"
    }
})