// REACT UTILITIES
import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

// CUSTOM UTILITIES
import AppButton from '../input/AppButton.js'
import AppText from '../info/AppText.js'
import * as AppNavigation from '../nav/Navigator.js'

//DATA
import { CartDataContext } from '../../scripts/context/CartDataContext.js'

export default function Cart({ object, setObject }) {
  const { items, setItems, getTotalPrice, sceneLoaded, setSceneLoaded } = useContext(CartDataContext)

  /**
   * addDecorToVisual takes in an item from the list of products and adds it to the visual scene
   * @param item - the decor product that was selected from the cart
   */
  function addDecorToVisual(item) {
    setSceneLoaded(!sceneLoaded) // reset the visual scene
    setObject(item.product) // add to visual
    Alert.alert('Virtual Decor', `The ${item.product.title} is being now visualised!`)
  }

  /**
   * The function removes the specified product from the cart by filtering the list of items for all items
   * that are not the specified product to remove
   * @param item - the product to be removed from the cart
   * @returns the list of cart items that are not the specified product to remove.
   */
  function removeFromCart(item) {
    setSceneLoaded(!sceneLoaded) // reset the visual scene
    setObject({}) //reset the product being analysed
    setItems(
      items.filter(function (remainingItems) {
        return remainingItems != item
      })
    ) // filter the list for all items that are not the specified item to remove
    Alert.alert('Virtual Decor', item.product.title + ' Removed') // alert action
  }

  /* A React Component containing cart data on the 
  * quantity and total of one or more of a particular product
  */
  const CartData = ({ item }) => {
    return (
      <ScrollView>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.product.image} />
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>{item.qty}</Text>
          </View>
          <View style={styles.cartInfo}>
            <Text style={styles.lineLeft}>{item.product.title}</Text>
            <Text style={styles.productTotal}> £{item.totalPrice}</Text>
          </View>
          <TouchableOpacity style={styles.cartLineOption} onPress={() => addDecorToVisual(item)}>
            <Ionicons name={'layers-outline'} size={24} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartLineOption} onPress={() => removeFromCart(item)}>
            <Ionicons name={'close'} size={24} color={'red'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  /**
   * A React component that renders the total price of all items in the cart
   * @returns A view with a text prompt and button for checking out 
   * with the desired cart items.
   */
  const CartTotal = () => {
    let [total, setTotal] = useState(0)
    useEffect(() => {
      setTotal(getTotalPrice())
    })

    if (items.length > 0) {
      return (
        <View style={styles.summaryContainer}>
          {/* Cart information summary below all items in cart */}
          <AppText text="Press the layers icon to add a cart item to the visual!" />
          <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total:</Text>
            <Text style={styles.mainTotal}>£ {total}</Text>
          </View>
          <AppButton text="Buy Now" onPress={() => AppNavigation.navigate('Purchase')} />
        </View>
      )
    } else {
      return (
        <View style={{ alignItems: 'center' }}>
          {/*Empty Cart Message */}
          <AppText type="h1" text="Your cart is empty." />
          <AppText text=" Please add a product to your cart." />
        </View>
      )
    }
  }

  // The Cart screen
  return (
    <View style={{ alignItems: 'center' }}>
      {/* List of items and their quantities in the cart */}
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={CartData}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={CartTotal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  summaryContainer: {
    alignItems: 'center',
    width: "100%"
  },
  cartLineOption: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '12.5%',
    marginLeft: 'auto',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
  },
  cartLine: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#121212',
  },
  image: {
    width: '25%',
    aspectRatio: 1,
    marginRight: 5,
    resizeMode: 'contain',
  },
  quantity: {
    backgroundColor: '#976A35',
    borderRadius: 100,
    padding: 5,
    height: '30%',
    width: '7.5%',
    marginLeft: -30,
    marginRight: 10,
    alignItems: 'center',
  },
  quantityText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
  },
  cartLineTotal: {
    marginBottom: 'auto',
    flexDirection: 'row',
    padding: 10,
  },
  productTotal: {
    fontSize: 16,
    color: '#976A35',
    fontWeight: 'bold',
  },
  lineTotal: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 30,
    padding: 10,
  },
  lineLeft: {
    fontSize: 16,
    lineHeight: 40,
    color: 'white',
  },
  lineRight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 40,
    color: 'white',
    textAlign: 'right',
    marginRight: 30,
    fontSize: 20,
    padding: 10,
  },
  itemsList: {
    backgroundColor: '#121212',
  },
  itemsListContainer: {
    backgroundColor: '#121212',
    paddingVertical: 8,
    marginHorizontal: 8,
    flex: 1,
  },
})
