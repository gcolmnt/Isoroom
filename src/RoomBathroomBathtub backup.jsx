import React, { useMemo, useRef, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import waterVertexShader from './shaders/water/vertex.glsl'
import waterFragmentShader from './shaders/water/fragment.glsl'
import { useControls } from 'leva'

const RoomBathroomBathtub = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomBathroomBathtub.glb')
  const bakedTexture = useTexture('./roomBathroomBaked.png')
  bakedTexture.flipY = false

  // Leva
  const { PlanePos } = useControls ('PlanePos', {
    PlanePos:
    {
        value: { x: -0.33, y: 0.7, z: -0.87} ,
        step: 0.01,
        min: -10,
        max: 10,
    },
  })

  const BathWaterPlane = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    const uniforms = useMemo(
      () => ({
        uTime: { value: 0.0 },
        uBigWavesElevation: { value: 0.0 },
        uBigWavesFrequency: { value: new THREE.Vector2(0, 0) },
        uBigWavesSpeed: { value: 0.0 },

        uSmallWavesElevation: { value: 0.075 },
        uSmallWavesFrequency: { value: 2.0 },
        uSmallWavesSpeed: { value: 0.5 },
        uSmallIterations: { value: 2.0 },

        uDepthColor: { value: new THREE.Color("#ffffff") },
        uSurfaceColor: { value: new THREE.Color("#34a1bc") },
        uColorOffset: { value: 1 },
        uColorMultiplier: { value: 1 }
      }), []
    )

    useFrame((state) => {
      const { clock } = state
      uniforms.uTime.value = clock.getElapsedTime()
    })

    return (
      <mesh ref={mesh} position={[PlanePos.x, PlanePos.y, PlanePos.z]}  rotation={[- (Math.PI / 2), 0, (Math.PI / 4)]} scale={1}>
        <planeGeometry args={[1.85, 0.9, 50, 50]} />
        <shaderMaterial
          fragmentShader={waterFragmentShader}
          vertexShader={waterVertexShader}
          uniforms={uniforms}
        />
      </mesh>
    )
  }


return (
  <>  
      <group>
      {/* Water */}
      <BathWaterPlane />
      {/* RoomBathroom */}
      <mesh 
        geometry={ nodes.baked.geometry } 
        position={ position }
        rotation-y={ Math.PI * 0.75 }
        ref={ref}
      >
          <meshBasicMaterial map={ bakedTexture } />
      </mesh>
      </group>
  </>
)
})

export default RoomBathroomBathtub