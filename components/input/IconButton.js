import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = (props) => {
    return (
        <TouchableOpacity style={styles.iconButton} onPress={props.function}>                
            <Ionicons name={props.icon} size={props.size} color={"white"} {...props}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton : {
        flex: 1,
        alignSelf: "center", 
        color: "white"
    }
})

export default IconButton;
