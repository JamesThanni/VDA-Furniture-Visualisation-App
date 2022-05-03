import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getProduct } from '../data/ProductData';
import {CartContext} from "../CartContext";
import AppButton from '../components/input/AppButton';
import SectionMain from '../components/wrappers/SectionMain';
import SectionSecondary from '../components/wrappers/SectionSecondary';
import AppText from '../components/info/AppText';
import globalStyles from '../styles/GlobalStyles';
export function ProductInfo({route}) {

    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(product.id)
    }


  return (
    
        <View style={styles.container}>
                <Image style={styles.image} source={product.image}/>
                <View style={styles.infoContainer}>
                  <View style={globalStyles.row}>
                  <Text style={styles.name}>{product.title}</Text>
                  <Text style={styles.price}>£{product.price}</Text> 
                  </View>       
                                 
                  <AppText text={product.description}/> 
                </View>
                <View style={{marginBottom: "auto"}}>
                  <AppButton onPress={onAddToCart} text="Add To Cart" />       
                </View>     
          
        </View>
    
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