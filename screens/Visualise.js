// Three.js Utilities
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';

// Model loading
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Useful custom components
import Header from '../components/info/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

// React Utilities
import { StyleSheet, Text, View, TouchableOpacity }  from 'react-native';
import * as React from 'react';
import { DirectionalLight } from 'three';

// GET CART DATA
import {CartContext} from "../CartContext.js"
import AppButton from '../components/input/AppButton';
import Visual from '../scripts/visual/Visual';


function cycleItems (direction, counter, countOfProducts) {
  var value;
  direction == "n" 
  ? value = counter++
  : value = counter--
  
  return counter < countOfProducts - 1 || counter >=0
    ? value
    : counter=0
  
}

function FitCheck (props) {
  const {items, getItemsCount, getTotalPrice} = React.useContext(CartContext);
  const [ready, setReady] = React.useState(false);

  var productNames = [];
  items.map(function (item) {productNames.push(item.product.name)})

  var productSizes = [];
  items.map(function (item) {productSizes.push(item.product.width * item.product.height * item.product.depth)})
  var roomSize = 10; // get roomSize in state from app settings
  var objectFit = Math.round((productSizes[0]/roomSize)*100); // productSize[productNo]

  return items.length > 0  
    ? <Text style={styles.info}>Prod: {productNames[0]}: {objectFit}% space in your room.</Text>
    : <Text style={styles.info}>Please add products to your cart</Text>
  
}

export default function Visualise({navigation}) {
  //const [counter, setCounter] = React.useState(0);
  const {items, getItemsCount, getTotalPrice} = React.useContext(CartContext);  
  var productNames = [];
  items.map(function (item) {productNames.push(item.product.name)})

  
  
  // const [productNo, setProductNo] = React.useState(0); // incremented up to items.length by the selector
  // //   setProduct { 
  // //     if productNo != productNames.length -1 {
  // //       productNo++;   
  // //     }
  // // }

  // var productSizes = [];
  // //volume = arr.reduce((prevValue,curValue) => {
  // //                    return prevValue * curValue },1);
  // //items.map(function (item) {roductSizes.push(volume)}  
  // //
  // items.map(function (item) {productSizes.push(item.product.width * item.product.height * item.product.depth)})
  // var roomSize = 10; // get roomSize in state from app settings
  // var objectFit = Math.round((productSizes[0]/roomSize)*100); // productSize[productNo]

  return (
    <View style={styles.container}>
      
      <FitCheck/>
   
        <View style={styles.main}>
          <View style={styles.selector}>
            <TouchableOpacity style={styles.navButton} >
              <Ionicons name={"caret-up"} size={15} color={"#c4c4c4"}/>
              <Text style={styles.text}> Prev </Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.text}> Next </Text>
              <Ionicons name={"caret-down"} size={15} color={"#c4c4c4"}/>
            </TouchableOpacity>
          </View>
          <Visual object={productNames[0]}/>         
          {/* <Text style={styles.info}>The {productNames[0]} takes up x% space in your room.</Text> onPress={setCounter(cycleItems("p", counter,items.length))} */}
          <View style={styles.controls}>
            <TouchableOpacity>
              <Ionicons name={"expand"} size={20} color={"#976A35"}/>
            </TouchableOpacity>
            <Ionicons name={"refresh"} size={20} color={"#976A35"}/>
            <Ionicons name={"bulb"} size={20} color={"#976A35"}/>
            <Ionicons name={"caret-up"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-down"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-back"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-forward"} size={15} color={"#c4c4c4"}/>
          </View>        
        </View>
      </View>
    );
  }

// We load the 3D scene in the visual section, controls of objects in the controls section and user info in the visual console.
  

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: '#121212', 
      width: '100%',
      alignItems:"center"
    },
    main: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      backgroundColor: '#121212', 
      width: '100%',
      alignItems:"center"
    },
    info: {
      color: "white",
      fontSize: 16,
      marginBottom: -100,
      zIndex: 100000,
      backgroundColor: "rgba(151,106,53,0.5)",
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
    controls: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: "space-around",
      alignItems: "center",
      height: "50%",
      alignSelf: "flex-end",
      flex: 1,
      marginLeft: -50,
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

// CSS styling for components in the scene that is translated to respective styling code for android and ios

  /*


  <View style={styles.notifications}>
            <Header headerText="Visual Console"/>
            <Text style={styles.info}>No issues with objects</Text>
          </View>

    // const keyLight = new DirectionalLight( new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    // keyLight.position.set(-100, 0, 100);

    // const fillLight = new DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    // fillLight.position.set(100,0,100);

    // const backLight = new DirectionalLight(0xffffff, 1.0);
    // backLight.position.set(100, 0, -100).normalize();

    // scene.add(keyLight);
    // scene.add(fillLight);
    // scene.add(backLight);
    

    
    //gl.canvas = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight}
      
  //const [camera, setCamera] = React.useState<Camera | null>(null);

    // const camera = new PerspectiveCamera(
    //     75, 
    //     gl.drawingBufferWidth/gl.drawingBufferHeight,
    //     0.1,
    //     1000    
    // ); // the object that will allow the scene to be viewed by the device
    // camera.position.z = 5; // position the camera ahead of the objects in the scene

<Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                </View>
            </Camera>

            //camera.lookAt(scene.position);
    // orienting the camera to be above the scene and to look down at the objects in the scene

    /// Magic happens here!
    // loadModelsAsync = async () => {
    //   /// Get all the files in the mesh
    //   const model = {
    //     'sofa.obj': require('./sofa/sofa.obj'),
    //     'sofabase.png': require('./sofa/sofa.png'),
    //   };

    //   /// Load model!
    //   const mesh = await ExpoTHREE.loadAsync(
    //     [model['sofa.obj']],
    //     null,
    //     name => model[name],
    //   );

    //   /// Update size and position
    //   ExpoTHREE.utils.scaleLongestSideToSize(mesh, 5);
    //   ExpoTHREE.utils.alignMesh(mesh, { y: 1 });
    //   /// Smooth mesh
    //   // ExpoTHREE.utils.computeMeshNormals(mesh);

    //   /// Add the mesh to the scene
    //   this.scene.add(mesh);

    //   /// Save it so we can rotate
    //   this.mesh = mesh;
    // };

    // const objloader = new OBJLoader();
    // objloader.setPath('../../assets/models/sofa/');
    // objloader.load('sofa.obj', function(object) {
    //   object.position.y -=60;
    //   scene.add(object);
    // });
    // implementing 3d model  
  */

            

 

  


//const customMaterial = new THREE.MeshBasicMaterial({
      //map: await ExpoTHREE.createTextureAsync({
          //asset: Expo.Asset.fromModule(require('../imageName`.jpg'))
      //})
    //});


    
    // scene.add( object );
    
    // const animate = () => {      
    //   requestAnimationFrame(render);      
    //   mesh.rotation.x += 0.01;      
    //   mesh.rotation.y += 0.01;      
    //   renderer.render(scene, camera);      
    //   gl.endFrameEXP();    
    // };    
    
      
      
    
  // function animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera)
  //   gl.endFrameEXP()
  // }
      

    //mesh = new Mesh(geometry, material);
    //scene.add(mesh);  

  // const floorGeometry = new BoxBufferGeometry(1.75, 0.05, 1);
  // const floorMat = new MeshBasicMaterial({
  //   color: "#5d432c"
  // })

  // const floor = new Mesh(floorGeometry, floorMat);
  // scene.add(floor); // add cube to scene
  // floor.position.y-=0.5;
  // floor.rotation.x+=0.5;
  // floor.rotation.y+=0.5;

  // const boxGeo = new BoxBufferGeometry(0.25, 0.25, 0.25);
  // const boxMat = new MeshBasicMaterial({
  //   color: "white"
  // })

  // const box = new Mesh(boxGeo, boxMat);
  // scene.add(box); // add cube to scene
  // box.position.y=-0.25;
  // box.rotation.x+=0.5;
  // box.rotation.y+=0.5;

  /*
  const loader = new FBXLoader()
  loader.load( '../../assets/models/armchair/armchair.fbx', function ( object ) {

    scene.add( object );

  } );
  */
  /*

  const wallGeometry = new BoxBufferGeometry(1.5,1,0.1)
  const wallMat = new MeshBasicMaterial({color: "white"})
  const wall = new Mesh(geometry, material);
  scene.add(wall); // add cube to scene
  wall.position.y-=1.4;
  wall.position.x+=0.5;
  wall.rotation.x+=0.5;
  wall.rotation.y+=0.5;
  */
 // const loader = new GLTFLoader();
    // loader.load('chair.glb', function(glb) {
    //   console.log(glb)
    //   const root = glb.scene;
    //   scene.add(root);
    // },
    // function (xhr) {
    //     console.log(xhr.loaded/xhr.total * 100 + '% loaded') 
    // }, function (error) {
    //   console.log("An error has occured", error)
    // })

    // const asset = Asset.fromModule(require("../screens/chair.obj"));
    // await asset.downloadAsync();

    // const loader = new OBJLoader();
    // // load a resource
    // loader.load(
    //   // resource URL
    //   asset.localUri,
    //   // called when resource is loaded
    //   function ( object ) {
    //       object.scale.set(0.065, 0.065, 0.065)
    //       scene.add( object );
    //       camera.lookAt(object.position)
    //   //rotate my obj file
    //       function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
    //           object.rotateX(THREE.Math.degToRad(degreeX));
    //           object.rotateY(THREE.Math.degToRad(degreeY));
    //           object.rotateZ(THREE.Math.degToRad(degreeZ));
    //        }
           
    //        // usage:
    //        rotateObject(object, 0, 0, 70);

    //       //animate rotation
    //       function update() {
    //           object.rotation.x += 0.015
    //       }
    //       const render = () => {
    //           timeout = requestAnimationFrame(render);
    //           update();
    //           renderer.render(scene, camera);
    //           gl.endFrameEXP();
    //         };
    //       render();
    //   },
     
    //   // called when loading is in progresses
    //   function ( xhr ) {

    //       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    //   },
    //   // called when loading has errors
    //   function ( error ) {

    //       console.log( error );

    //   }
    // )
      
    // const light = new THREE.DirectionalLight(0xFFD580, 2, 100 ); // switch statement for light colour
    // light.position.set(3,3,3);
    // scene.add(light);
    //camera = new PerspectiveCamera(75, gl.drawingBufferWidth/gl.drawingBufferHeight,      0.1,      1000  );

    // const geometry = new BoxGeometry(0.1, 0.1, 0.1);
    // // tells us the shape and dimensions of the object.
    // const material = new MeshPhongMaterial({color: 0xffffff,});
    // // tells us the material and texture color of the object.
    // const cube = new Mesh(geometry, material);
    // //apply shape and texture of object to a mesh to make it a 3d object
    // //scene.add(cube);
    // //add our mesh to the scene