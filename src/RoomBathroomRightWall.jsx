import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomBathroomRightWall = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomBathroomRightWall.glb')
  const bakedTexture = useTexture('./roomBathroomBaked.png')
  bakedTexture.flipY = false

return (
  <>
      {/* RoomBathroom */}
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

export default RoomBathroomRightWall