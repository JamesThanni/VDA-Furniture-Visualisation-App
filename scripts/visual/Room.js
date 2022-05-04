import { THREE } from 'expo-three'
import { BackSide } from 'three'

/**
 * It creates a cube that simulates a room viewed orthographically
 * @param scene - the scene you want to add the room to
 */
export function RoomObject(scene) {
  var roomGeo = new THREE.BoxGeometry(1, 0.5, 1) // change room via dimensions here
  var roomMat = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: false, side: BackSide })
  var roomMesh = new THREE.Mesh(roomGeo, roomMat)
  scene.add(roomMesh) //do the same as the cube for the room
}
