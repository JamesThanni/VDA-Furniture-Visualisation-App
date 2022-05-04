// Third party utilities
import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button, Alert} from "react-native";

// Custom utilities
import { getProduct } from '../../data/ProductData';
import {CartContext} from "../../scripts/context/CartContext";
import AppButton from '../input/AppButton';
import AppText from '../info/AppText';
import globalStyles from '../../scripts/styles/GlobalStyles';
import MainContainer from '../containers/MainContainer';


export function ProductInfo({route}) {

    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    const {addItemToCart, getItemQuantity} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(product.id);
      Alert.alert(`You have added the ${product.title} to your cart.`);
    }


  return (
    
        <MainContainer>
                <Image style={styles.image} source={product.image}/>
                <View style={styles.infoContainer}>
                  <View style={globalStyles.row}>
                  <Text style={styles.name}>{product.title}</Text>
                  <Text style={styles.price}>£{product.price}</Text> 
                  </View>       
                  <AppText text={product.material}/> 
                  <AppText text={product.description}/> 
                </View>
                <View style={{marginBottom: "auto"}}>
                  <AppButton onPress={onAddToCart} text="Add To Cart" />       
                </View>     
          
        </MainContainer>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      height: "100%",
      padding: 20
    },
    image: {
      flex: 1,
      width: "45%",
      height: "auto",
      aspectRatio: 2/3,
      marginVertical: 20,      
      alignSelf: "center",
      resizeMode: "contain"
    },
    infoContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
    name: {
      fontSize: 25,
      padding: 10,
      fontWeight: '600',
      color: "white"
    },
    price: {
      fontSize: 20,
      padding: 10,
      fontWeight: '600',
      marginBottom: 8,
      color: "white"
    },
  });