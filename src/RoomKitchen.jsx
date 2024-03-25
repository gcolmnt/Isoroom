import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomKitchen = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomKitchen.glb')
  const bakedTexture = useTexture('./roomKitchenBaked.png')
  bakedTexture.flipY = false

return (
  <>
      {/* RoomKitchen */}
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

export default RoomKitchen