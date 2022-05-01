import React, {createContext, useState} from "react";
import {getProduct} from "./data/ProductData.js";
import {View, Text, FlatList, StyleSheet} from "react-native";

export const VisualContext = createContext();

export function VisualProvider(props){
    const [object, setObject] = useState();

    //GETTERS
    function getCartItems(){
        return object;
    }

    //SETTERS
    function addToVisual(id){
        const object = getProduct(id);
        setItems((prevItems) => {
            const item = prevItems.find((item) => (item.id == id));
            if(!item){
                return [...prevItems, {
                    id,
                    object, 
                    h: product.height,
                    w: product.width,
                    d: product.depth
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

    return(
        <CartContext.Provider style={styles.cart} value={{object, setObject, addToVisual}}>
            {props.children}
        </CartContext.Provider>
    )

}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: "#121212"
    }
})