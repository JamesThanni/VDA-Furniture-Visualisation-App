// Three.js Utilities
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer, THREE} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, DoubleSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';
import { gsap } from 'gsap';

import { Lighting } from './Lights.js';
import LightControls from './LightControls.js';
// Model loading
import { Asset } from 'expo-asset';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// React Utilities
import { StyleSheet, Text, View, TouchableOpacity, Alert }  from 'react-native';
import * as React from 'react';



  export function FloorObject(scene) {
      var floorSlatGeometry = new BoxGeometry(0.125, 0.005, 1); // change room via dimensions here
      var floorSlatMat = new MeshPhongMaterial({color: "#9D643B"});

      for (var i = 0; i < 10; i++) {
        var floor = new Mesh(floorSlatGeometry, floorSlatMat);
        floor.position.set(-0.475 + (0.126 * i),-0.25,0);
        scene.add( floor ); //do the same as the cube for the room
      }

  }
