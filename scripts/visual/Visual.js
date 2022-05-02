// React Utilities
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert }  from 'react-native';

// Cart Data for visual
import {CartContext} from "../../CartContext.js"

// Expo utilities
import { GLView } from 'expo-gl';
import { Asset } from 'expo-asset';

// Three.js Utilities
import { Renderer, THREE } from 'expo-three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Scene Components
import { Lighting } from './Lights.js';
import LightControls from './LightControls.js';
import { FloorObject } from './Floor.js';
import { RoomObject } from './Room.js';

export default function Visual({decorObject, sceneTime, setSceneTime, sceneLoaded, setSceneLoaded}) {
  let objPath;
  // a variable that will store path to the specified objects model file
  let matPath;
  // a variable that will store the path to the specified objects model material file

  let timeout; 
  // a variable that will be used to stop rendering components when the animation is removed (eg due to errors)

  let objectMesh;
  // variable for the object mesh that is placed in the scene
  

  const {items, getItemsCount, getTotalPrice} = React.useContext(CartContext);
  
  React.useEffect(() => {
    return () => clearTimeout(timeout); 
    // Clear the animation loop when the component unmounts
  }, []);

  
  function changeTime(time) {
    setSceneLoaded(!sceneLoaded);
    setSceneTime(time);
  }
  
  try {
    switch (decorObject.toLowerCase()) {
      case "armchair":
          objPath = require('./../../assets/models/armchair.obj');
          matPath = require('./../../assets/models/armchair.mtl');
          break;
      case "barchair": 
          objPath = require('./../../assets/models/barchair.obj');
          matPath = require('./../../assets/models/barchair.mtl');   
          break;
      case "sofa": 
          objPath = require('./../../assets/models/sofa.obj');
          matPath = require('./../../assets/models/sofa.mtl');    
          break;
      case "deskchair": 
          objPath = require('./../../assets/models/deskchair.obj');
          matPath = require('./../../assets/models/deskchair.mtl');    
          break;
    }
  } catch { 
          objPath = require('./../../assets/models/example.obj');
          matPath = require('./../../assets/models/example.mtl'); 
         //Alert.alert("Virtual Decor","Example object added to visual as no cart products are being visualised. Please select an item to visualise")
  }
  

  
  
  const onContextCreate = async ( gl ) => {
    const aspectRatio = gl.drawingBufferWidth/gl.drawingBufferHeight;
    // get the aspect ratio of the GLView (view for the Three.js scene)

    const asset = Asset.fromModule(objPath);
    await asset.downloadAsync();
    const matAsset = Asset.fromModule(matPath);
    await matAsset.downloadAsync();
       
    // SCENE
    const scene = new THREE.Scene(); // the environment for objects to be placed in.

    
    // CAMERA 
    var D=1;
    const camera = new THREE.OrthographicCamera(-D*aspectRatio, D*aspectRatio, D, -D, 1, 1000); 
    camera.position.set(20, 20, 20);
    camera.lookAt(scene.position);
    scene.add(camera);   
    // The constant D will be a ratio value for the camera frustum size
    // The camera is an object that allows the scene objects to be viewed
    
   
    //  RENDERING  
    const renderer = new Renderer({gl});    
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);    
    renderer.setClearColor(0x121212, 1);           
    // The renderer is an object that renders the scene to be viewed, 
    //loading objects and lighting in. We use the app dimensions to 
    //size the renderer and we clear the background colour to give 
    //the scene the clean floating look on the app background    

    //LIGHTING
    var randomRGBIndex = 0;
    const rgbHemi = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    const rgbDir = new THREE.DirectionalLight( 0xffffff, 0.75 );
    Lighting(scene, sceneTime, rgbHemi, rgbDir); 
    // we create a variable to hold an incrementing value for the party light
    // we create a atmospheric light and directional light for the colour cyclic lighting
    // we call the lighting function to set up lights in our room based on the time of day chosen
    
    // OBJECTS AND SCENE RENDERING
    RoomObject(scene);
    FloorObject(scene);
    
    
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      matAsset.localUri,  
      function ( materials ) {
        materials.preload();

        const loader = new OBJLoader();
        loader.setMaterials(materials);
        loader.load(
          asset.localUri,
          // this function will load the materials onto specified objects and call the render function
          function ( object ) {
            objectMesh = object;
            var scale;
            
            try {
                switch (decorObject.toLowerCase()) {
                  case "sofa": 
                    scale = 0.1;
                    objectMesh.rotation.x = 1.5 * Math.PI; //sofa
                    objectMesh.rotation.z = 0.5 * Math.PI; //sofa 
                    break;
                  case "armchair":
                    scale = 0.25;  
                    break;
                  case "deskchair": 
                    scale = 0.25;  
                    break;
                  case "barchair": 
                    scale = 0.0025;  
                    break;
                }
            } catch {
              scale = 1;
            }
            objectMesh.scale.set(scale, scale, scale);
            
            objectMesh.position.set(0,0,0);
            objectMesh.castShadow = true;
            scene.add( objectMesh );

            function animatePartyLights() {
              var h = randomRGBIndex * 0.005 % 1;
              var s = 0.5;
              var l = 0.5;
              rgbHemi.color.setHSL( h,s,l);
              rgbHemi.groundColor.setHSL(h,s,l);
              rgbDir.color.setHSL(h,s,l);
              renderer.render(scene, camera);
              randomRGBIndex++;
            }
        
            const render = () => {
              timeout = requestAnimationFrame(render);
        
              if (sceneTime == "Party!") {
                animatePartyLights();
              } else {
                renderer.render(scene, camera);
              }
              gl.endFrameEXP();
            }; 

            render(); // render the scene by getting animation frames
            
          },
          // called when loading is in progresses
          function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

          },
          // called when loading the scene produces has errors
          function ( error ) {

            console.log( 'An error occured in object ' , error );

          }
        );

        
      }, 
      (xhr) => {
        console.log((xhr.loaded/ xhr.total) * 100 + '% loaded')
      }, 
      (error) => {
        console.log('An error occured in material', error)
    }

    );

    

  };
 
    return (
      <>
        <GLView
              onContextCreate={onContextCreate}
              style = {styles.visual}
              key = "v"
        />
        <LightControls changeTime={changeTime}/>
      </>
        
    );
}

const styles = StyleSheet.create({
    visual: {
        width: "95%", 
        flex: 7,
        margin: 5,
        marginTop: 20,
        zIndex: -1
      },
      
    controls: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "75%",
      flex: 1,
      marginTop: -250,
      backgroundColor: "rgba(0,0,0,0.75)",
      borderRadius: 10
    },
})
