import React, { forwardRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomStartRightDoor = forwardRef(({ position, onStartRightDoorHoverChange }, ref) => {
  
    const { nodes } = useGLTF('./roomStartRightDoor.glb')
    const bakedTexture = useTexture('./roomStartBaked.png')
    bakedTexture.flipY = false

    const [isHovered, setIsHovered] = useState(false)

    const handlePointerEnter = () => {
        setIsHovered(true)
        onStartRightDoorHoverChange(true)
    }
    
    const handlePointerLeave = () => {
        setIsHovered(false)
        onStartRightDoorHoverChange(false)
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

export default RoomStartRightDoor