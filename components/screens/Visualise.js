import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity }  from 'react-native';
import { Camera } from 'expo-camera';
import Expo from 'expo';
import { Scene, Mesh, MeshBasicMaterial, PerspectiveCamera } from 'three';
import ExpoTHREE, {Renderer, DirectionalLight} from 'expo-three';
import { ExpoWebGLRenderingContext, GLView} from 'expo-gl';
import { BoxBufferGeometry, BoxGeometry, MeshPhongMaterial, BackSide, FBX } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import Header from '../info/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Visualise({navigation}) {
     
  const onContextCreate = async ( gl ) => {
   
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75, 
        gl.drawingBufferWidth/gl.drawingBufferHeight,
        0.1,
        1000    
    );
    camera.position.z = 5; 
    
    gl.canvas = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight}
      
    const renderer = new Renderer({gl});
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshPhongMaterial({color: 0xffffff,});
    const cube = new Mesh(geometry, material);
    cube.rotation.x+=0.5;
    scene.add(cube);
  
    const light = new THREE.DirectionalLight(0xFFD580, 2, 100 ); // switch statement for light colour
    light.position.set(3,3,3);
    scene.add(light);

    
    const render = () => {
      requestAnimationFrame(render);
      cube.rotation.y+=0.005;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();

        
  }; 
    // how we create a three.js application
    return (
        <View style={{backgroundColor: '#121212', width: '100%', flex: 1, alignItems:"center"}}>
          <GLView
            onContextCreate={onContextCreate}
            style = {styles.visual}
          />
          <View style={styles.controls}>
            <Ionicons name={"expand"} size={20} color={"#72B93A"}/>
            <Ionicons name={"refresh"} size={20} color={"#72B93A"}/>
            <Ionicons name={"bulb"} size={20} color={"#72B93A"}/>
            <Ionicons name={"caret-up"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-down"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-back"} size={15} color={"#c4c4c4"}/>
            <Ionicons name={"caret-forward"} size={15} color={"#c4c4c4"}/>
          </View>
          <View style={styles.notifications}>
            <Header headerText="Scene Console"/>
            <Text style={styles.info}>No issues with objects</Text>
          </View>
          
        </View>
    );
  }



 

  


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

  

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    info: {
      color: "white",
      marginLeft: 20,
      fontSize: 16
    },
    visual: {
      width: "80%", 
      flex: 6,
      margin: 10,
      backgroundColor: "#1e1e1e"
    },
    notifications: {      
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "80%",
      flex: 2,
      margin: 10,
      backgroundColor: "#1e1e1e",
    },
    controls: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: "space-around",
      alignItems: "center",
      width: "80%",
      flex: 1,
      margin: 10,
      backgroundColor: "#1e1e1e"
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
  });


  /*
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
  */