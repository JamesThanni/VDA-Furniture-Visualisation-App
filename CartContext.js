import React, {createContext, useState} from "react";
import {getProduct} from "./data/ProductData.js";
import {View, Text, FlatList, StyleSheet} from "react-native";

export const CartContext = createContext();

export function CartProvider(props){

    const [items, setItems] = useState([]);

    //GETTERS
    function getCartItems(){
        return items;
    }

    function getItemsCount(){
        return items.reduce((sum,item) => (sum + item.qty), 0)
    }

    function getTotalPrice(){
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    //SETTERS
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

    function removeItemFromCart(id){}


    function completePurchase(){ 
        setItems([]);
        console.log('Items have been purchased or removed', items); // not cleared
    }
    
    return(
        <CartContext.Provider style={styles.cart} value={{items, setItems, completePurchase, getItemsCount, addItemToCart, getTotalPrice, getCartItems}}>
            {props.children}
        </CartContext.Provider>
    )

}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: "#121212"
    }
})