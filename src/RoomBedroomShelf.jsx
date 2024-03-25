import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomBedroomShelf = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomBedroomShelf.glb')
  const bakedTexture = useTexture('./roomBedroomBaked.png')
  bakedTexture.flipY = false

return (
  <>
      {/* RoomBedroom */}
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

export default RoomBedroomShelf