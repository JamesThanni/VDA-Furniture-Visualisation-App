import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { CartContext } from "../../CartContext";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function CartButton({navigation}){
    const {getItemsCount} = useContext(CartContext);
    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate('Cart')}}>
			<Ionicons name={"cart"} size={12} color={"white"}/> ({getItemsCount()})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: '#72B93A',
		padding: 12,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontWeight: '500',
		fontSize: 12
		
	}
})