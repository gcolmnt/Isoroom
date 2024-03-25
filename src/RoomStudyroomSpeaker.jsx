import React, { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const RoomStudyroomSpeaker = forwardRef(({ position }, ref) => {
  
  const { nodes } = useGLTF('./roomStudyroomSpeaker.glb')
  const bakedTexture = useTexture('./roomStudyroomBaked.png')
  bakedTexture.flipY = false

return (
  <>
      {/* RoomStudyroom */}
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

export default RoomStudyroomSpeaker