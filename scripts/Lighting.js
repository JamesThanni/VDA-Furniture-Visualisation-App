import React from 'react'

export default function Lighting() {
  
    const ambience = new AmbientLight(0xffe4b8, 0.7);
    ambience.position.set(10,10,10)
    scene.add( ambience ); 
    // light that gives the room a tinted warm glow

    const light = new PointLight(0xffffff, 1.45, 40)
    light.position.set(15, 20, 10);
    scene.add(light);
    // light that adds brightness to the scene making objects visible
  
}
