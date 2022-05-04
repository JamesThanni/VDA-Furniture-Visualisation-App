
// Useful custom components
import AppText from '../info/AppText';

// React Utilities
import { StyleSheet, Text, View, TouchableOpacity }  from 'react-native';
import * as React from 'react';

// GET CART DATA
import {CartContext} from "../../scripts/context/CartContext.js"
import AppButton from '../input/AppButton';
import Visual from '../../scripts/visual/Visual';

function VisualAnalysis ({name, title, dimensions}) {
  var productSizes = dimensions[1] * dimensions[2]; // floor space taken up the decor object
  var roomSize = 12; // average room floor size in metres
  var objectFit = Math.round((productSizes/roomSize)*100); // calculate the ratio of the roomsize to the space taken up on the floor by the product

  return name != undefined
    ? <View style={styles.info}>
        <AppText text={`The ${title} takes up ${objectFit}% floor space in an average room.`}/>
      </View>
    : <View style={styles.info}><AppText text="Please add products to the visual from your cart. In the meantime, you may generate a visual for an example product."/></View>
  
}

export default function Visualise(props) {
  const { sceneLoaded, setSceneLoaded } = React.useContext(CartContext); 
  const [ sceneTime, setSceneTime ] = React.useState("Morning");

  const decorData = {
    decorObject: props.object.name,
    sceneLoaded: sceneLoaded,
    setSceneLoaded: setSceneLoaded,
    sceneTime: sceneTime,
    setSceneTime: setSceneTime
  }
  // abstraction of the product data that includes extra parameters for lighting effects and scene reloading

  const decorAnalysisData = {
    name: props.object.name,
    title: props.object.title,
    dimensions: [props.object.height, props.object.width, props.object.depth]
  }
  // abstraction of the product data that includes information for comparing the object to a room with an average floor size

  return (
    <View style={styles.visualContainer}>      
      <VisualAnalysis  {...decorAnalysisData}/>  
      {/* We pass the attributes of the visual analysis data as 
      a collection of props to the visual analysis component*/} 

        <View style={styles.main}>            
          {
            sceneLoaded 
            ? 
              <Visual {...decorData}/> /* We pass the attributes of the decor data as 
                                        a collection of props to the visualisation scene component*/
            : 
              <View styles={styles.main}>
                <AppText type="h1" text="Generating visual..."/>
                <AppButton text={"Press to continue"} onPress={() => setSceneLoaded(!sceneLoaded)}/>
              </View>
          }
        </View>
      </View>
    );
  }


// CSS styling for components in the scene that is translated to respective styling code for android and ios
const styles = StyleSheet.create({
    visualContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#121212', 
      alignItems:"center",
      justifyContent: 'center'
    },
    main: {
      flexDirection: "column",
      flex: 1,
      backgroundColor: '#121212', 
      width: '100%',
      alignItems:"center", 
      justifyContent:"center"
    },
    info: {
      display: "flex",
      flexDirection: "column",
      color: "white",
      fontSize: 16,
      marginBottom: -150,
      zIndex: 100000,
      // backgroundColor: "rgba(151,106,53,0.5)",
      padding: 15,
      borderRadius: 15
    },
    text: {
      color: "white",
      fontSize: 16,
      padding: 5
    },
    notifications: {      
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "95%",
      flex: 2,
      margin: 5,
      backgroundColor: "#1e1e1e",
      borderRadius: 10
    },
    selector: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: "space-around",
      alignItems: "center",
      height: "50%",
      alignSelf: "flex-end",
      flex: 1,
      marginRight: -50,
      backgroundColor: "rgba(0.5,0.5,0.5,0.5)",
      borderRadius: 10
    },
    navButton: {
      alignItems: 'center'

    },
    camera: {
        flex: 1,
        width: '100%',
        height: '50%',
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    }
  }
);

