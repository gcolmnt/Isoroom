import React, { forwardRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomLivingroomLeftDoor = forwardRef(({ position, onLivingroomLeftDoorHoverChange }, ref) => {
  
  const { nodes } = useGLTF('./roomLivingroomLeftDoor.glb')
  const bakedTexture = useTexture('./roomLivingroomBaked.png')
  bakedTexture.flipY = false

  const [isHovered, setIsHovered] = useState(false)

  const handlePointerEnter = () => {
      setIsHovered(true)
      onLivingroomLeftDoorHoverChange(true)
  }
  
  const handlePointerLeave = () => {
      setIsHovered(false)
      onLivingroomLeftDoorHoverChange(false)
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

export default RoomLivingroomLeftDoor