// Three.js Utilities
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer, THREE} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, DoubleSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';
import { gsap } from 'gsap';

// Model loading
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';


// React Utilities
import { StyleSheet, Text, View, TouchableOpacity, Alert }  from 'react-native';
import * as React from 'react';

// GET CART DATA
import {CartContext} from "../../CartContext.js"

// UI Components
import IconButton from '../../components/input/IconButton.js';

export default function Visual({decorObject}) {
  const {items, getItemsCount, getTotalPrice} = React.useContext(CartContext);
  let objPath;
  let matPath;

  // if (decorObject) {
  // } else {
  //   objPath = require('./../../assets/models/sofa.obj');
  //   matPath = require('./../../assets/models/sofa.mtl');
  // }
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
  
  

  var products = [];
  items.map(function (item) {products.push(item.product.name)})

  var objectToRender = decorObject;
  
  let timeout; 
  // a variable that will be used for handling the rendering component over a period of time

  let camera;
  //the camera of the Three.js scene declared on a higher level of scope for other uses

  let objectMesh;
  // variable for the object mesh that is placed in the scene

  React.useEffect(() => {
    return () => clearTimeout(timeout); 
    // Clear the animation loop when the component unmounts
  }, []);
 
 
  const onContextCreate = async ( gl ) => {
    const aspectRatio = gl.drawingBufferWidth/gl.drawingBufferHeight;
    // get the aspect ratio of the GLView (view for the Three.js scene)

    const asset = Asset.fromModule(objPath);
    await asset.downloadAsync();
  
    const matAsset = Asset.fromModule(matPath);
    await matAsset.downloadAsync();
    // ASSETS 
    // try {
    //     switch (objectToRender.toLowerCase()){
    //       case undefined: 
    //         asset = Asset.fromModule(sofa);
    //         await asset.downloadAsync();
          
    //         matAsset = Asset.fromModule(sofaMtl);
    //         await matAsset.downloadAsync();
        
    //       case "armchair":
    //         asset = Asset.fromModule(armchair);
    //         await asset.downloadAsync();
            
    //         matAsset = Asset.fromModule(armchairMtl);
    //         await matAsset.downloadAsync();
    //       case "barChair": 
    //         asset = Asset.fromModule(barChair);
    //         await asset.downloadAsync();
            
    //         matAsset = Asset.fromModule(barChairMtl);
    //         await matAsset.downloadAsync();
    //       default: 
    //         asset = Asset.fromModule(sofa);
    //         await asset.downloadAsync();
          
    //         matAsset = Asset.fromModule(sofaMtl);
    //         await matAsset.downloadAsync();
    //     }
    // } catch {
    //   asset = Asset.fromModule(sofa);
    //   await asset.downloadAsync();
    
    //   matAsset = Asset.fromModule(sofaMtl);
    //   await matAsset.downloadAsync();
    // }

    // if  (objectToRender.toLowerCase() == "armchair") {
    //   asset = Asset.fromModule(armchair);
    //   await asset.downloadAsync();
      
    //   matAsset = Asset.fromModule(armchairMtl);
    //   await matAsset.downloadAsync();
    // } else {
    //   asset = Asset.fromModule(sofa);
    //   await asset.downloadAsync();
      
    //   matAsset = Asset.fromModule(sofaMtl);
    //   await matAsset.downloadAsync();
    // }
   
    // SCENE
    const scene = new Scene(); // the environment for objects to be placed in.

    
    // CAMERA 
    var D=1; // a constant that will affect camera frustum size
    camera = new OrthographicCamera(-D*aspectRatio, D*aspectRatio, D, -D, 1, 1000);// the object that allows the scene objects to be viewed.
    camera.position.set(20, 20, 20);
    camera.lookAt(scene.position);
    scene.add(camera);   
    

    // LIGHTING
    const clock = new THREE.Clock();
      
    const ambience = new AmbientLight(0xffe4b8, 0.7);
    ambience.position.set(10,10,10)
    scene.add( ambience ); 
    // light that gives the room a tinted warm glow

    const light = new PointLight(0xffffff, 1.45, 40)
    light.position.set(15, 20, 10);
    scene.add(light);
    // light that adds brightness to the scene making objects visible

    //GRID 
    // const grid = new GridHelper(10,100);
    // grid.position.set(-0.5,-0.5,-0.5);
    //scene.add(grid);
    
    // OBJECTS

    //THREE.ImageUtils.crossOrigin = '';
    var wallTexture = new THREE.TextureLoader().load("./../../assets/textres/oakFloor.jpg");
    var roomGeo = new BoxGeometry(1, 0.5, 1);
    var roomMat = new MeshPhongMaterial( { 
      color: 0xffffff, transparent: false, side: BackSide,
    },
    {
      map: wallTexture, side: DoubleSide
    } 
    ); // we make the back two sides of the cube transparent to give it a open room look
    /* 
    }, {image: `{profileWall}-texture.jpg`,
      side: LeftSide
    },
    {image: `{profileWall}-texture.jpg`,
      side: RightSide
    }
    {image: `{profileFloor}-texture.jpg`,
      side: BottomSide
    });
    */

    
    var roomMesh = new Mesh(roomGeo, roomMat);
    scene.add( roomMesh );
    //do the same as the cube for the room


    
    
    const loader = new OBJLoader();
    const mtlLoader = new MTLLoader();

    


    mtlLoader.load( 
      matAsset.localUri,  
      function ( materials ) {
        materials.preload();
        loader.setMaterials(materials);

        loader.load(
          asset.localUri, 
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
            scene.add( objectMesh );

            

            // RENDERER
            const renderer = new Renderer({gl});
            renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
            renderer.setClearColor(0x121212, 1);
            // an object that renders the scene to be viewed, loading objects and lighting in.
            

            const render = () => {
              timeout = requestAnimationFrame(render);
              //const time = clock.getElapsedTime();   //testing animations
              //objectMesh.position.y = Math.cos( time ) * 0.025; //test animation
              renderer.render(scene, camera);
              gl.endFrameEXP();
              
            }; 
            render();
            // render the scene by getting animation frames
            
          },
          // called when loading is in progresses
          function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

          },
          // called when loading has errors
          function ( error ) {

            console.log( 'An error occured ' , error );

          }
        );

        
      }, 
      (xhr) => {
        console.log((xhr.loaded/ xhr.total) * 100 + '% loaded')
      }, 
      (error) => {
        console.log('An error occured.', error)
    }

    );


  };// the main threejs application
 
    return (
      <>
        <GLView
              onContextCreate={onContextCreate}
              style = {styles.visual}
              key = "v"
        />
        <View style={styles.controls}>
            <IconButton name="sunny" size={20}/>
            <IconButton name="moon" size={20}/>
            <IconButton name="beer" size={20}/>            
        </View>
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



// {/* <IconButton name="bulb" size={20}/>     
// <AppText type="h1" text="||"/>        */}
 
    
    // if (!objectToRender) {
    //   var objectPath = `./../../assets/models/sofa.obj`;
    //   var objectMaterialPath = `./../../assets/models/sofa.mtl`;

    //   const asset = Asset.fromModule(require(objectPath));
    //   await asset.downloadAsync();
      
    //   const matAsset = Asset.fromModule(require(objectMaterialPath));
    //   await matAsset.downloadAsync();

    // } else {
    //   var objectPath = `./../../assets/models/${objectToRender}.obj`;
    //   var objectMaterialPath = `./../../assets/models/${objectToRender}.mtl`;

    //   const asset = Asset.fromModule(require(objectPath));
    //   await asset.downloadAsync();

    //   const matAsset = Asset.fromModule(require(objectMaterialPath));
    //   await matAsset.downloadAsync();
    // }
    //const objAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.obj`));
    // armchair = 0.2
    // barchair = 0.002
    // sofa scale = 0.1
    // eames = 0.2

    
    //const matAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.mtl`));

    // const sofaAsset = Asset.fromModule(require("./../../assets/sofa/sofa.obj"));
    // await sofaAsset.downloadAsync();

    // const sofaMatAsset = Asset.fromModule(require("./../../assets/sofa/sofa.mtl"));
    // await sofaMatAsset.downloadAsync();
    
 
    // const wallAsset = Asset.fromModule(require("./../../assets/wallAsset/walls.jpg"));
    // await wallAsset.downloadAsync();

    // const stoolAsset = Asset.fromModule(require("./../../assets/stoolAsset/walls.jpg"));
    // await stoolAsset.downloadAsync();

    // const stoolMatAsset = Asset.fromModule(require("./../../assets/stoolAsset/stool.mtl"));
    // await stoolMatAsset.downloadAsync();
    