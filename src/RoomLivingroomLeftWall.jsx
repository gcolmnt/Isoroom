import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomLivingroomLeftWall = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomLivingroomLeftWall.glb')
  const bakedTexture = useTexture('./roomLivingroomBaked.png')
  bakedTexture.flipY = false

return (
  <>
      {/* RoomLivingroom */}
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

export default RoomLivingroomLeftWall