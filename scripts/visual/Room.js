import React from 'react';
import {View, StyleSheet} from 'react-native';
import { GLView } from 'expo-gl';
import ExpoTHREE, {Renderer, THREE} from 'expo-three';
import { BoxGeometry, MeshPhongMaterial, BackSide, FrontSide, DoubleSide, GridHelper } from 'three';
import { Scene, Mesh, OrthographicCamera, AmbientLight, PointLight, FaceColors, Camera} from 'three';
import { gsap } from 'gsap';

export function RoomObject(scene) {
    var roomGeo = new THREE.BoxGeometry(1, 0.5,1); // change room via dimensions here
    var roomMat = new THREE.MeshPhongMaterial({color: 0xffffff, transparent: false, side: BackSide});
    var roomMesh = new THREE.Mesh(roomGeo, roomMat);
    scene.add( roomMesh ); //do the same as the cube for the room

}
