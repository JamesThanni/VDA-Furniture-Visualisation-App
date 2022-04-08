import React from 'react';
import {View, StyleSheet} from 'react-native';

const IconButton = (props) => {
    return (
        <TouchableOpacity style={styles.iconButton} onPress={props.function}>                
            <Ionicons name={props.icon} size={20} color={"white"}/>
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
