// Three.js Utilities
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer, THREE} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, DoubleSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';

// Model loading
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
// React Utilities
import { StyleSheet, Text, View, TouchableOpacity }  from 'react-native';
import * as React from 'react';

// GET CART DATA
import {CartContext} from "../../CartContext.js"

export default function Visual(props) {
const {items, getItemsCount, getTotalPrice} = React.useContext(CartContext);
  // const items = React.useContext(CartContext);
  // const firstObj = items[0];
  // let [name, setName] = React.useState("");
  
  var products = [];
  items.map(function (item) {products.push(item.product.name)})


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
    // ASSETS 
    
    

    const asset = Asset.fromModule(require("./../../assets/armchair/chair.obj"));
    await asset.downloadAsync();
    //const objAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.obj`));

    const matAsset = Asset.fromModule(require("./../../assets/armchair/chair.mtl"));
    await matAsset.downloadAsync();
    //const matAsset = Asset.fromModule(require(`./../../assets/${props.name}/${props.name}.mtl`));

    const sofaAsset = Asset.fromModule(require("./../../assets/sofa/sofa.obj"));
    await sofaAsset.downloadAsync();

    const sofaMatAsset = Asset.fromModule(require("./../../assets/sofa/sofa.mtl"));
    await sofaMatAsset.downloadAsync();
    
 
    const wallAsset = Asset.fromModule(require("./../../assets/textures/walls.jpg"));
    await wallAsset.downloadAsync();
    
    // SCENE
    const scene = new Scene(); // the environment for objects to be placed in.

    
    // CAMERA 
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
            renderer.setClearColor(0x121212, 1);
            // an object that renders the scene to be viewed, loading objects and lighting in.
            

            const render = () => {
              timeout = requestAnimationFrame(render);
              //const time = clock.getElapsedTime();  
              //decor.position.y = Math.cos( time ) * 0.025;
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
        <GLView
              onContextCreate={onContextCreate}
              style = {styles.visual}
              key = "v"
              object={props.object}
              objectMaterial={props.objectMaterial}
              objectSize={props.objectSize}
              roomSize={props.roomSize}
        />
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
})


