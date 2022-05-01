import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import globalStyles from '../../styles/GlobalStyles';
import AppButton from '../../components/input/AppButton';
import AppText from '../../components/info/AppText';
import { CartContext } from '../../CartContext';
import * as AppNavigation from '../../components/nav/Navigator.js';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PurchaseScreen ({object, setObject}) {
    const {items, setItems} = React.useContext(CartContext);
    
    //consider use effect to clear cart on page load

    function purchaseItems(action) {
        //clearCart(action);
        if (action) setItems([]);
        if (action) setObject([]);
        AppNavigation.navigate('Cart'); //reset cart screen with state
        AppNavigation.navigate('Home');
        // add to order history
    }

    return (
        <View styles={[globalStyles.container]}>
            
            <View style={styles.message}>
                <Ionicons styles={styles.center} name={"checkmark"} size={32} color={"white"}/>
                <AppText type={"h1"} text={`Purchase Successful!`}/>
            </View>
            <AppButton text="Continue Shopping" onPress={() => purchaseItems(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        height: "50%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10%",
        marginBottom: "25%"
    }
})

