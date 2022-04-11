import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getProduct } from '../../db/ProductData';
import {CartContext} from "../../CartContext";

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
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={product.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>£ {product.price}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Button onPress={onAddToCart} title="Add To Cart" />
            </View>
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
      width: '25%',
      height: "100%",
      aspectRatio: 1
    },
    infoContainer: {
      padding: 16,
      backgroundColor: "#121212"
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
      color: '#121212',
      marginBottom: 16,
    },
  });