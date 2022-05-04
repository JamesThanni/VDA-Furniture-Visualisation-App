import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppButton from '../input/AppButton'
import AppText from '../info/AppText'
import { CartDataContext } from '../../scripts/context/CartDataContext'
import * as AppNavigation from '../nav/Navigator.js'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MainContainer from '../containers/MainContainer'

export default function PurchaseScreen({ object, setObject }) {
  const { items, setItems, sceneLoaded, setSceneLoaded } = React.useContext(CartDataContext)

  //consider use effect to clear cart on page load

  function purchaseItems(action) {
    //clearCart(action);
    if (action) setSceneLoaded(!sceneLoaded)
    if (action) setItems([])
    if (action) setObject([])
    AppNavigation.navigate('CartScreen') //reset cart screen with state
    //AppNavigation.navigate('Home');
    // add to order history
  }

  return (
    <MainContainer>
      <View style={styles.message}>
        <Ionicons styles={styles.center} name={'checkmark'} size={32} color={'white'} />
        <AppText type={'h1'} text={`Purchase Successful!`} />
      </View>
      <AppButton text="Continue Shopping" onPress={() => purchaseItems(true)} />
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  message: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10%',
    marginBottom: '25%',
  },
})
