import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { getProducts } from "../data/ProductData";
import {Product} from "../components/info/Product";
import Filter from "../components/nav/Filter";
import {getCategories} from '../data/Categories';
import AppText from "../components/info/AppText";

export default function Home({navigation}){

    function renderProduct({item: product}){
        return(
            <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductInfo', {productId: product.id})
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);
    
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setProducts(getProducts())
        setCategories(getCategories())
    })



    return(
        <View style={styles.container}>
            <AppText text="Choose from our wide selection!"/>
            {/* <View style={styles.filters}>
                <Filter category={"All"} status={true}/>
                {
                    categories.map(category => 
                        <Filter key={category.catNo} category={category.cat} status={false}/>
                )
                }
            </View> */}

            <FlatList 
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item, index) => index.toString()}
                data={products}
                renderItem={renderProduct}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#121212",
      width: "100%"
    },
    productsListContainer: {
      backgroundColor: "#121212",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
    container: {
        paddingTop: 20,
        flex: 1,
        display: 'flex',         
        alignItems: "center", 
        justifyContent: 'center',
        backgroundColor: '#121212',
    },
    filters: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
  });
  
