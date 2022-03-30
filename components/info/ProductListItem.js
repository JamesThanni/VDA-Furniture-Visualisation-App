import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import ProductImages from "./ProductImages";
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProductListItem = (props) => {
    function addToCart(product){
        //Cart.cart.push(product);
    }
    function removeFromCart(product){
        //Cart.cart.pop(product);
    }
    
    var imageID = ProductImages[props.img]
    
    const [selected, setSelected] = React.useState(false);
    // a useState for the item which will change the selectOption button depending on if a user selects a product or not

    return (
        <View style={styles.objectSection}>
            <Image
                style={styles.object}
                source={imageID}            
            />
            <View style={styles.description}>
                <Text style={styles.objectName}>{props.name}</Text>
                <Text style={styles.objectMaterial}>{props.material}</Text>
                <Text style={styles.objectPrice}>{props.price}</Text>
            </View>
            <TouchableOpacity 
                style = {styles.selectOption} 
                onPress = {
                    selected ? 
                    () => {
                        setSelected(false);
                        removeFromCart([props.objectName, props.objectMaterial, props.objectPrice]);
                    } : 
                    () => {
                        setSelected(true);
                        addToCart([props.objectName, props.objectMaterial, props.objectPrice]);
                    }
                    
                }
            >                
                    {    
                        selected ?
                        <Ionicons name={"close"} size={25} color={"red"}/> : // if an item is selected, the deselect icon will render
                        <Ionicons name={"basket"} size={25} color={"white"}/>  // if an item is not selected, the select icon  will render
                    }
            </TouchableOpacity>
        </View>
    );
}
/* 
Product Image (Image component) - create images by using ProductImages 
object properties to locate file paths relevant to referenced product in
the home page.

Product Description (Text Component) - use referenced product info to 
display text on page. 

Select Option  (TouchableOpacity Component) - create a button that adds
the product to the cart if selected and removes if pressed again. When 
the button is pressed, the  rendered icon is changed from the basket option 
to a cross icon. Also runs the add to cart function or remove to cart option
for respective purposes.

*/

const styles = StyleSheet.create({
    objectSection: {
        display: "flex",
        flexDirection: "row",
        flex: 1, 
        justifyContent: "flex-start",
        width: "95%",
        padding: 5,
        margin: 5,
        backgroundColor: "#1e1e1e",
        borderRadius: 10        
    },
    object: {
        flex: 1,
        margin: 10,
        resizeMode: 'contain',
        alignSelf: 'center'        
    },
    description: {
        display: "flex",
        flex: 4,    
        flexDirection:"column",
        alignSelf: "center",
        margin: 2,
        marginTop: 5
    },
    objectName: { 
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    objectMaterial: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 12,
        color: '#72B93A'
    },
    objectPrice :{
        marginTop: 20,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    selectOption: {
        flex: 1,
        marginRight: -10,
        alignSelf: "center", 
        color: "white"
    }
});

export default ProductListItem;
