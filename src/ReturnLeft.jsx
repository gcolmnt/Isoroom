import { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ReturnLeft({ onActiveReturnLeftChange }) {

  const { nodes } = useGLTF('./arrow.glb')

  const [hovered, setHovered] = useState(false)
  const [activeReturnLeft, setActiveReturnLeft] = useState(false)

  const handleReturnLeftClick = () => {
    setActiveReturnLeft(true)
    onActiveReturnLeftChange(true)
  }
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return <>
    {/* Left return */}
    <mesh
      geometry={ nodes.arrow.geometry } 
      position={[-1.3, 0.06, 1.3]}
      rotation-y={ Math.PI * 2}
      scale={[0.2, 0.03, 0.2]}
      onClick={handleReturnLeftClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <meshStandardMaterial color="greenyellow" />
    </mesh>
  </>
  }