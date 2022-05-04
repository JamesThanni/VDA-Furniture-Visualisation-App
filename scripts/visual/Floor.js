// Three.js Utilities
import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three'

/**
 * Generate 10 floor slats, wehre for each of them create a new floor slat mesh, 
 * position it, and add it to the scene
 * @param scene - the scene to add the floor to
 */
export function FloorObject(scene) {
  var floorSlatGeometry = new BoxGeometry(0.125, 0.005, 1) 
  var floorSlatMat = new MeshPhongMaterial({ color: '#9D643B' })

  for (var i = 0; i < 10; i++) {
    var floor = new Mesh(floorSlatGeometry, floorSlatMat)
    floor.position.set(-0.475 + 0.126 * i, -0.25, 0)
    scene.add(floor) //do the same as the cube for the room
  }
}
