import { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ReturnRight({ onActiveReturnRightChange }) {

  const { nodes } = useGLTF('./arrow.glb')

  const [hovered, setHovered] = useState(false)
  const [activeReturnRight, setActiveReturnRight] = useState(false)

  const handleReturnRightClick = () => {
    setActiveReturnRight(true)
    onActiveReturnRightChange(true)
  }
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return <>
  {/* Right Return */}
    <mesh
      geometry={ nodes.arrow.geometry } 
      position={[1.3, 0.06, 1.3]}
      rotation-y={Math.PI * 0.5}
      scale={[0.2, 0.03, 0.2]}
      onClick={handleReturnRightClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  </>
  }