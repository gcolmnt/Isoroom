import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomLivingroomPillow2 = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomLivingroomPillow2.glb')
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

export default RoomLivingroomPillow2