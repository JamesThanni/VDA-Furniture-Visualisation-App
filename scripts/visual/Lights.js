import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer, THREE} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, DoubleSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';
import { gsap } from 'gsap';

export function Lighting(scene, time, rgbHemi, rgbDir)  {
    // LIGHTS
    scene.remove(hemiLight);
    scene.remove(dirLight);

    const d = 50;
    

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    hemiLight.color.setHSL( 1.1, 1, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 50, 0 );
    
    const dirLight = new THREE.DirectionalLight( 0xffffff, 0.75 );
    dirLight.color.setHSL( 0.1, 1, 0.95 );
    dirLight.position.set( -1, 1.75, 1 );
    dirLight.position.multiplyScalar( 30 );


    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5; // default

    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = - d;

    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = - 0.0001;


    rgbHemi.position.set( 0, 50, 0 );

    rgbDir.position.set( -1, 1.75, 1 );
    rgbDir.position.multiplyScalar( 30 );

    rgbDir.castShadow = true;
    rgbDir.shadow.mapSize.width = 2048;
    rgbDir.shadow.mapSize.height = 2048;
    rgbDir.shadow.camera.near = 0.5; // default
    rgbDir.shadow.camera.left = - d;
    rgbDir.shadow.camera.right = d;
    rgbDir.shadow.camera.top = d;
    rgbDir.shadow.camera.bottom = - d;
    rgbDir.shadow.camera.far = 3500;
    rgbDir.shadow.bias = - 0.0001;


    switch (time) {
        case "Morning":
        hemiLight.color.setHSL( 1.1, 0.75, 0.6 );
        scene.add( hemiLight );
        break;
    case "Night":
        hemiLight.color.setHSL( 0.6, 0.75, 0.5 );
        scene.add( hemiLight );
        break;
    case "Party!":
        scene.add(rgbHemi);
        scene.add(rgbDir);
        break;
    default: 
        hemiLight.color.setHSL( 1.1, 1, 0.6 );
        scene.add( hemiLight );
        break;
    }
     
     scene.add( dirLight );
}
