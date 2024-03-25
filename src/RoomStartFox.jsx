import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'


const RoomStartFox = forwardRef(({ position }, ref) => {
  
    const { nodes } = useGLTF('./roomStartFox.glb')
    const bakedTexture = useTexture('./roomStartBaked.png')
    bakedTexture.flipY = false

  return (
    <>
        {/* RoomStart */}
        <mesh 
          geometry={ nodes.baked.geometry } 
          position={ position } 
          rotation-y={ Math.PI * 0.75 }
          ref={ref}
        >
            <meshBasicMaterial map={ bakedTexture } />
        </mesh>
    </>
  )
})

export default RoomStartFox