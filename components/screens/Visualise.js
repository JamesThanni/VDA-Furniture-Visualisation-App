// Three.js Utilities
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';

// Model loading
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Useful custom components
import Header from '../info/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

// React Utilities
import { StyleSheet, Text, View, TouchableOpacity }  from 'react-native';
import * as React from 'react';
import { DirectionalLight } from 'three';

// GET CART DATA
import {CartContext} from "../../CartContext.js"
import AppButton from '../input/AppButton';




export default function Visualise({navigation}) {

  // const items = React.useContext(CartContext);
  // const firstObj = items[0];
  // let [name, setName] = React.useState("");
  

  let timeout; 
  // a variable that will be used for handling the rendering component over a period of time

  let camera;
  //the camera of the Three.js scene declared on a higher level of scope for other uses

  let decor;
  // variable for the object that is placed in the scene

  React.useEffect(() => {
    return () => clearTimeout(timeout); 
    // Clear the animation loop when the component unmounts
  }, []);
     
  const onContextCreate = async ( gl ) => {
    const aspectRatio = gl.drawingBufferWidth/gl.drawingBufferHeight;
    // get the aspect ratio of the GLView (view for the Three.js scene)

    var D=1; 
    // a constant that will affect camera frustum size
    
    // SCENE
    const scene = new Scene(); // the environment for objects to be placed in.

    
    // CAMERA 
    camera = new OrthographicCamera(-D*aspectRatio, D*aspectRatio, D, -D, 1, 1000);// the object that allows the scene objects to be viewed.
    camera.position.set(20, 20, 20);
    camera.lookAt(scene.position);  
    

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
    const grid = new GridHelper(10,100);
    grid.position.set(-1,-1,-1);
    scene.add(grid);
    
    // OBJECTS
    var roomGeo = new BoxGeometry(1, 0.5, 1);
    var roomMat = new MeshPhongMaterial( { 
      color: 0xffffff,
      transparent: false,
      side: BackSide
    } ); // we make the back two sides of the cube transparent to give it a open room look
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

    

    const asset = Asset.fromModule(require("./../../assets/armchair/chair.obj"));
    await asset.downloadAsync();
    //const objAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.obj`));

    const matAsset = Asset.fromModule(require("./../../assets/armchair/chair.mtl"));
    await matAsset.downloadAsync();
    //const matAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.mtl`));

    // const chairAsset = Asset.fromModule(require("./../../assets/armchair/chair.glb"));
    // await chairAsset.downloadAsync();
    
    // const objLoader = new GLTFLoader().load(chairAsset.localUri, )

    
    
    const loader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    var decorNo = 0;
    mtlLoader.load( matAsset.localUri,  function ( materials ) {
        materials.preload();
        //console.log(materials);

        loader.setMaterials(materials);
        loader.load(asset.localUri, 
          
          function ( object ) {
            decor = object;
            decor.scale.set(0.2,0.2,0.2);
            decor.position.set(decorNo, decorNo, decorNo);
            scene.add( decor );
            decorNo++;

            // RENDERER
            const renderer = new Renderer({gl});
            renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
            // an object that renders the scene to be viewed, loading objects and lighting in.
            

            const render = () => {
              timeout = requestAnimationFrame(render);
              const time = clock.getElapsedTime();  
              decor.position.y = Math.cos( time ) * 0.025;
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
        <View style={{backgroundColor: '#121212', width: '100%', flex: 1, alignItems:"center"}}>
          <Text style={styles.info}>Visualising: {}</Text>
            <GLView
                onContextCreate={onContextCreate}
                style = {styles.visual}
                key = "d"
                objects={""}
                materials={""}
              />
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
          {/* <Text style={styles.info}>{firstObj}</Text>  */}
          
          
        </View>
    );
  }

// We load the 3D scene in the visual section, controls of objects in the controls section and user info in the visual console.
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    info: {
      color: "white",
      marginLeft: 20,
      fontSize: 16,
      padding: 10
    },
    visual: {
      width: "95%", 
      flex: 10,
      margin: 5,
      marginTop: 20
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
    controls: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: "space-around",
      alignItems: "center",
      width: "95%",
      flex: 1,
      margin: 5,
      backgroundColor: "#1e1e1e",
      borderRadius: 10
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