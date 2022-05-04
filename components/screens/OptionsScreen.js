import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainContainer from '../containers/MainContainer';


export default function AppSettings({navigation}) {
    function logOut() {
        BackHandler.exitApp();
    }
    return (
        
        <MainContainer>
        
            <TouchableOpacity onPress={() => Alert.alert("Virtual Decor", "Pick from a wide range of decor items that fit your space. Add a product to your cart and press the layers icon to generate a visualisation of the chosen furniture in your room!")}>
                <Text style={styles.hintText}>View Guide <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>     
            </TouchableOpacity>           
            
            <TouchableOpacity>
                <Text style={styles.hintText} onPress= {() => logOut()}>
                    Exit 
                    <Ionicons name={"caret-forward"} size={15} color={"white"}/>
                </Text>
            </TouchableOpacity>
            {
            /* 
            <Text style={styles.hintText}>Linked Accounts   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
            <Text style={styles.hintText}>Privacy   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
            <Text style={styles.hintText}>Notifications   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
            <Text style={styles.hintText}>Terms of Service   <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>
            */
            }
            
            

        </MainContainer>
    );
}
const styles = StyleSheet.create({
    options: {
        flex: 5, 
         display: "flex", 
         alignItems: 'flex-start', 
         justifyContent: 'flex-start', 
         width: "90%", 
         marginBottom: "5%",
         backgroundColor: '#1e1e1e',
         borderRadius: 10
    },
    hintText: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginBottom: "10%",
        justifyContent: "space-between",
        width: "100%"
    }, 
    sectionText: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: "10%"
    },

}
)