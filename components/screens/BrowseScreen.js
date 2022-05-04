import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getProducts } from '../../data/ProductData'
import { Product } from '../info/Product'
import { getCategories } from '../../data/Categories'
import AppText from '../info/AppText'
import MainContainer from '../containers/MainContainer'

export default function Home({ navigation }) {
  

  const [products, setProducts] = useState([])
  //const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(getProducts())
    //setCategories(getCategories())
  })

  // UI Component to display brief product information
  const ProductCard = ({ item: product }) => {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductInfo', { productId: product.id })
        }}
      />
    )
  }

  // The Browse Screen
  return (
    <MainContainer>
      <AppText text="Select a product to view its details!" />
      {/* List of products */}
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item, index) => index.toString()}
        data={products}
        renderItem={ProductCard}
      />
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#121212',
    width: '100%',
  },
  productsListContainer: {
    backgroundColor: '#121212',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})
