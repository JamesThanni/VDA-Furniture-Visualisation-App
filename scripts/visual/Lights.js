import { THREE } from 'expo-three'

/* A function that adds Hemisphere and Directional Lights to the scene based on the scene time condiditions 
 * @param rgbHemi - The light simulating the ambinet effects of the reflection of LED strips on walls
 * @param rgbDir - The light simulating an rgb light bulb
*/
export function Lighting(scene, time, rgbHemi, rgbDir) {
  scene.remove(hemiLight)
  scene.remove(dirLight)
  // deleting light elements from the scene if they already exists

  const d = 50
  // a constant for tweaking shadows cast by the directional light
  
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.75)
  dirLight.color.setHSL(0.1, 1, 0.95)
  dirLight.position.set(-1, 1.75, 1)
  dirLight.position.multiplyScalar(30)
  // positioning of the sun simulating light source

  dirLight.castShadow = true
  // enables shadows to be cast on other objects by the light source

  dirLight.shadow.camera.left = -d
  dirLight.shadow.camera.right = d
  dirLight.shadow.camera.top = d
  dirLight.shadow.camera.bottom = -d
  dirLight.shadow.camera.near = 0.5 
  // will place objects behind others in shadow

  dirLight.shadow.mapSize.width = 2048
  dirLight.shadow.mapSize.height = 2048
  // dimensions of the shadows mapped onto objects by the light
  // high values are used to increase shadow quality

  dirLight.shadow.camera.far = 3500
  dirLight.shadow.bias = -0.0001
 
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  hemiLight.color.setHSL(1.1, 1, 0.6)
  hemiLight.groundColor.setHSL(0.095, 1, 0.75)

  /* Light that ambient light reflecting on objects by 
  * the sun which decreases in brightness and colour closer to the ground
  */
  hemiLight.position.set(0, 50, 0)
// positioning of the sun simulating light source


  rgbHemi.position.set(0, 50, 0)

  rgbDir.position.set(-1, 1.75, 1)
  rgbDir.position.multiplyScalar(30)

  rgbDir.castShadow = true
  rgbDir.shadow.mapSize.width = 2048
  rgbDir.shadow.mapSize.height = 2048
  rgbDir.shadow.camera.near = 0.5 // default
  rgbDir.shadow.camera.left = -d
  rgbDir.shadow.camera.right = d
  rgbDir.shadow.camera.top = d
  rgbDir.shadow.camera.bottom = -d
  rgbDir.shadow.camera.far = 3500
  rgbDir.shadow.bias = -0.0001

  switch (time) {
    case 'Morning':
      hemiLight.color.setHSL(1.1, 0.75, 0.6)
      scene.add(hemiLight)
      break
    case 'Night':
      hemiLight.color.setHSL(0.6, 0.75, 0.5)
      scene.add(hemiLight)
      break
    case 'Party!':
      scene.add(rgbHemi)
      scene.add(rgbDir)
      break
    default:
      hemiLight.color.setHSL(1.1, 1, 0.6)
      scene.add(hemiLight)
      break
  }

  scene.add(dirLight)
}
