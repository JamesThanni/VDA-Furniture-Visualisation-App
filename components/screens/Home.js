import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProductListItem from '../info/ProductListItem';
import Header from '../info/Header';
import Filter from '../input/Filter';

//import {uuid} from 'uuidv4';
export default function Home({navigation}) {
    const [products, setProducts] = React.useState([
        {id: "1", dcName:'Classic Sofa', dcMaterial:'Brown Leather', img: 'sofa', category: "Chair", price: "£299.99"},
        {id: "2", dcName:'Chic Armchair', dcMaterial:'Grey Fabric', img: 'armchair', category: "Chair", price: "£299.99"},
        {id: "3", dcName:'Simple Foldable', dcMaterial:'Black Plastic', img: 'foldable', category: "Chair", price: "£299.99"},
        {id: "4", dcName:'Modern Stool', dcMaterial:'Blue Suede', img: 'stool', category: "Chair", price: "£299.99"}
        ]); // object array where each product is an object with various properties for display info

    const categories = [
        {catNo: 2, cat: "Desk"},
        {catNo: 3, cat: "Art"}, 
        {catNo: 4, cat: "Lighting"}, 
        {catNo: 5, cat: "Shelving"}
    ];

    return (
        <View style={styles.container}>
            
            <View style={styles.filters}>   
            
            <Filter category={"Chair"} status={true}/>

            {
                categories.map(category => 
                    <Filter key={category.catNo} category={category.cat} status={false}/>
            )
            }             
            
            </View>

            {
                products.map(product => 
                    <ProductListItem key={product.id} name={product.dcName} material={product.dcMaterial} price={product.price} img={product.img}/>
                )
            }

        </View>
    );
}
// products - list of product objects with ids, names, material types, images etc
// categories - tags to filter the list of products displayed by the category property
// Filters View - List of filters for filtering. Map categories list to display all filters as seperate components.
// Products View - List of Products with info. Map products list to display all products as seperate components.

const styles = StyleSheet.create({
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
})
