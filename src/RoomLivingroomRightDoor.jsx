import React, { forwardRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomLivingroomRightDoor = forwardRef(({ position, onLivingroomRightDoorHoverChange }, ref) => {
  
  const { nodes } = useGLTF('./roomLivingroomRightDoor.glb')
  const bakedTexture = useTexture('./roomLivingroomBaked.png')
  bakedTexture.flipY = false

  const [isHovered, setIsHovered] = useState(false)

  const handlePointerEnter = () => {
      setIsHovered(true)
      onLivingroomRightDoorHoverChange(true)
  }
  
  const handlePointerLeave = () => {
      setIsHovered(false)
      onLivingroomRightDoorHoverChange(false)
  }

  return (
    <>
        {/* RoomLivingroom */}
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

export default RoomLivingroomRightDoor