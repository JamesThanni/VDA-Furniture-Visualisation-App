import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../info/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductListItem from '../info/ProductListItem';
import ProductImages from '../info/ProductImages';
import ProductCartItem from '../info/ProductCartItem';
import AppButton from './../input/AppButton';
export default function Cart({navigation}) {
    
    const [cart, setCart] = React.useState([
        {id:"6", name:"Painting", material:"Canvas", price:"17.99", img:"painting"}
    ]);

    function removeFromCart(product){
        ProductListItem.cart.pop(product); //ERROR CHECK FOR IF CONTAINS PRODUCT
    }

    function addToVisual(){
        cart.forEach(element => {
            
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Header headerText="Your cart"/> 
                { 
                    cart.map(cartItem => 
                        <ProductCartItem
                        key={cartItem.id} 
                        name={cartItem.name} 
                        material={cartItem.material} 
                        price={cartItem.price} 
                        img={cartItem.img}/>
                )
                }
                
                
                
                
            </View>
            <View style={styles.checkout}>
                <Header headerText={"Checkout"}/>
                <Text style={{fontWeight: "200", marginLeft: 15, marginBottom: 50, color: "white"}}> TOTAL: £17.99</Text>

            </View>
            <View style={{display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "center"}}>
            <AppButton text="Purchase Item" function={addToVisual()}/>
            <AppButton text="Add to Visual"/>
            </View>
        </View>
    );
}

// Placeholder page for cart list and price totaling. Will have option to add to visual. Extended functionality to add checkout section.
const styles = StyleSheet.create({

    container : {
        paddingTop: "10%",
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    cart: {
        flex: 5, 
         display: "flex", 
         alignItems: 'flex-start', 
         justifyContent: 'flex-start', 
         width: "90%", 
         marginBottom: "5%",
         backgroundColor: '#1e1e1e',
         borderRadius: 10
    },
    checkout: {
        flex: 2, 
         display: "flex", 
         alignItems: 'flex-start', 
         justifyContent: 'flex-start', 
         width: "90%", 
         marginBottom: "5%",
         backgroundColor: '#1e1e1e',
         borderRadius: 10
    },
   


});