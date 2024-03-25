import React, { useMemo, useRef, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import waterVertexShader from './shaders/water/vertex.glsl'
import waterFragmentShader from './shaders/water/fragment.glsl'
import { useControls } from 'leva'

const RoomBathroomWater = forwardRef(({ position }, ref) => {

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
      <mesh ref={ref} position={ position }  rotation={[- (Math.PI / 2), 0, (Math.PI / 4)]} scale={1}>
        <planeGeometry args={[1.85, 0.9, 250, 250]} />
        <shaderMaterial
          fragmentShader={waterFragmentShader}
          vertexShader={waterVertexShader}
          uniforms={uniforms}
        />
      </mesh>
    )
})

export default RoomBathroomWater