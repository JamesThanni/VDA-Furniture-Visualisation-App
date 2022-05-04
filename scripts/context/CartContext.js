import React, {createContext, useState} from "react";
import { getProduct } from "../../data/ProductData.js";
import { StyleSheet } from "react-native";

export const CartContext = createContext();
//TODO: rename "item" to "CartData" where necessary for syntax clarity

//Provides the global cart data to the appstack as a Provider component
export function CartProvider(props){

    const [items, setItems] = useState([]);
    const [sceneLoaded, setSceneLoaded] = React.useState(false);



    //SETTERS
    /**
     * If the item is not in the cart, add it to the cart, otherwise, increase the quantity of the item
     * in the cart
     * @param id - The id of the product that is being added to the cart.
     */
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

    /**
     * It takes an id, and returns the product data for the visual.
     * @param id - The id of the product you want to add to the visual.
     * @returns The product data
     */
    function addDecorToVisual(id) {
        return getProduct(id);
    }

    /**
     * Remove the item from the cart by filtering products that match a specified id
     * function.
     * @param id - The id of the product to be removed from the cart
     */
    function removeCartItem(id){
        setItems(items.filter(item => item.product.id != id));
    }

  
    

    //GETTERS
    /**
     * Returns all cart items.
     * @returns The items array.
     */
     function getCartItems(){
        return items;
    }

    /**
     * It takes an array of products, and returns the sum of the qty property of each object
     * @returns the sum of all the items in the array.
     */
    function getItemQuantity(){
        return items.reduce((sum,item) => (sum + item.qty), 0)
    }

    /**
     * It takes the array of items, and for each item, it adds the totalPrice to the sum.
     * @returns The total price of all items in the cart.
     */
    function getTotalPrice(){
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }
    
    // make object -> const cartData = {items, setItems, sceneLoaded, setSceneLoaded, addItemToCart, addDecorToVisual, removeCartItem, getItemQuantity, getTotalPrice, getCartItems}

    return(
        <CartContext.Provider 
        style={styles.cart} 
        value={
                {
                    items, setItems, 
                    sceneLoaded, setSceneLoaded, 
                    addItemToCart, addDecorToVisual, removeCartItem, 
                    getItemQuantity, getTotalPrice, getCartItems
                }
        }>
            {props.children}
        </CartContext.Provider>
    )

}

const styles = StyleSheet.create({
    cart: {
        backgroundColor: "#121212"
    }
})