import React, { forwardRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomStartLeftDoor = forwardRef(({ position, onStartLeftDoorHoverChange }, ref) => {
  
    const { nodes } = useGLTF('./roomStartLeftDoor.glb')
    const bakedTexture = useTexture('./roomStartBaked.png')
    bakedTexture.flipY = false

    const [isHovered, setIsHovered] = useState(false)

    const handlePointerEnter = () => {
        setIsHovered(true)
        onStartLeftDoorHoverChange(true)
    }
    
    const handlePointerLeave = () => {
        setIsHovered(false)
        onStartLeftDoorHoverChange(false)
    }

  return (
    <>
        {/* RoomStart */}
        <mesh 
          geometry={ nodes.baked.geometry } 
          position={ position } 
          rotation-y={ Math.PI * 0.75 }
          ref={ref}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
            <meshBasicMaterial map={ bakedTexture } />
        </mesh>
    </>
  )
})

export default RoomStartLeftDoor