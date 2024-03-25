import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomBedroomBed = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomBedroomBed.glb')
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

export default RoomBedroomBed