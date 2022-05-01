import React from 'react';
import {View, StyleSheet} from 'react-native';
import globalStyles from '../../styles/GlobalStyles';
import { getCategories } from '../../data/Categories';
import Filter from './Filter';

const Filterlist = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(getCategories())
    })
    return (
        <View>
            <Filter category={"All"} status={true}/>
                {
                    categories.map(category => 
                        <Filter key={category.catNo} category={category.cat} status={false}/>
                )
                }
        </View>
    );
}

const styles = StyleSheet.create({
    filters: {
        flexDirection: "row",
        paddingHorizontal: 25,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }
})

export default FilterTabs;