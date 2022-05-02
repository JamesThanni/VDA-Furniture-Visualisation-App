import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, BackHandler } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionMain from '../components/wrappers/SectionMain';
import * as AppNavigation from '../components/nav/Navigator.js';

export default function AppSettings({navigation}) {
    function logOut() {
        AppNavigation.navigate("Home");
        BackHandler.exitApp();
    }
    return (
        
        <View style={styles.container}>
            <SectionMain>
                <TouchableOpacity onPress={() => Alert.alert("Virtual Decor", "Pick from a wide range of decor items that fit your space. Add a product to your cart and press the layers icon to generate a visualisation of the chosen furniture in your room!")}>
                    <Text style={styles.hintText}>View Guide <Ionicons name={"caret-forward"} size={15} color={"white"}/></Text>     
                </TouchableOpacity>           
                
                <TouchableOpacity>
                    <Text style={styles.hintText} onPress= {() => logOut()}>
                        Logout 
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
                
            </SectionMain>

        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        paddingTop: "10%",
        flex: 1, 
        display: "flex",    
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
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