import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { CartContext } from "../CartContext";

export function CartButton({navigation}){
    const {getItemQuantity} = useContext(CartContext);
    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate('Cart')}}>
                Cart ({getItemQuantity()})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: 'orange',
		height: 39,
		padding: 12,
		borderRadius: 32,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 13
	}
})