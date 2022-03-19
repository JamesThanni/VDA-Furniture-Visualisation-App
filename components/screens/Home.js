import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProductListItem from '../info/ProductListItem';
import { FlatList } from 'react-native-gesture-handler';

//import {uuid} from 'uuidv4';
import Header from '../info/Header';

export default function Home({navigation}) {
    const [products, setProducts] = React.useState([
        {id: "1", dcName:'Classic Sofa', dcMaterial:'Brown Leather', img: 'sofa'},
        {id: "2", dcName:'Modern Armchair', dcMaterial:'Grey Fabric', img: 'armchair'},
        {id: "3", dcName:'Simple Foldable', dcMaterial:'Black Plastic', img: 'foldable'},
        {id: "4", dcName:'Kitchen Stool', dcMaterial:'Blue Suede', img: 'stool'}
    ]); // object array

    return (
        <View style={styles.container}>
            <View>
                <Header headerText={"Filter by category"}/>
            </View>           
                {
                    products.map(product => 
                     <ProductListItem name={product.dcName} material={product.dcMaterial}/>
                    )
                }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#121212', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})


/*
<FlatList 
                data={products} 
                renderItem={({product}) => 
                                        <ProductListItem   
                                            text={dcName}
                                            secondText={dcMaterial}
                                        />
                                    
                            }
            />

*/