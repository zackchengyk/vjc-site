import React from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'

export { Classroom }

const modelURL = 'dioramas/models/test-scene.gltf'
const textureURL = 'dioramas/textures/baked.jpg'

function Classroom(props) {
  const { nodes } = useGLTF(modelURL)

  const texture = useTexture(textureURL)
  texture.flipY = false
  texture.colorSpace = THREE.SRGBColorSpace
  const tm = new THREE.MeshStandardMaterial({ map: texture })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Base.geometry} material={tm} />
      <mesh geometry={nodes.Board.geometry} material={tm} />
      <mesh geometry={nodes.Cube001.geometry} material={tm} />
      <mesh geometry={nodes.Cube001_1.geometry} material={tm} />
      <mesh geometry={nodes.Cube001_2.geometry} material={tm} />
      <mesh geometry={nodes.Cube001_3.geometry} material={tm} />
      <mesh geometry={nodes.Cube001_4.geometry} material={tm} />
      <mesh geometry={nodes.Cube001_5.geometry} material={tm} />
    </group>
  )
}

useGLTF.preload(modelURL)
