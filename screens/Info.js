import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getProduct } from '../data/ProductData';
import {CartContext} from "../CartContext";
import AppButton from '../components/input/AppButton';
import SectionMain from '../components/wrappers/SectionMain';
import SectionSecondary from '../components/wrappers/SectionSecondary';
import Header from '../components/info/Header';

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
    <SafeAreaView  style={styles.container}>
        <ScrollView style={styles.container}>
          <SectionMain>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={product.image} />
            </View>
            <View style={styles.infoContainer}>
                <Header headerText={product.name}/>
                <Text style={styles.price}>£ {product.price}</Text>                
                <Text style={styles.description}>{product.description}</Text>
            </View>
          </SectionMain>
            
            <AppButton onPress={onAddToCart} text="Add To Cart" />  
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        height: "100%"
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: "contain"
    },
    infoContainer: {
      padding: 16,
      backgroundColor: "#1e1e1e"
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: "white"
    },
    price: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
      color: "white"
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      color: 'white',
      marginBottom: 16,
    },
  });