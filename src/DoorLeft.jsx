import { useState, useEffect, forwardRef } from 'react'
import { Outlines } from '@react-three/drei'

export function DoorLeft({ onActiveDoorLeftChange, onDoorLeftHoverChange, position, scale }) {

    const [isHovered, setIsHovered] = useState(false)
    const [activeDoorLeft, setActiveDoorLeft] = useState(false)
  
    const handleDoorLeftClick = () => {
        setActiveDoorLeft(true)
        onActiveDoorLeftChange(true)
    }

    const handlePointerEnter = () => {
        setIsHovered(true)
        onDoorLeftHoverChange(true)
    }
    
    const handlePointerLeave = () => {
        setIsHovered(false)
        onDoorLeftHoverChange(false)
    }
    
    useEffect(() => {
      document.body.style.cursor = isHovered ? 'pointer' : 'auto'
    }, [isHovered])
  
    return <>
        {/* Left Door */}
        <mesh
            position={position}
            rotation-y={-Math.PI * 0.25}
            scale={scale}
            onClick={handleDoorLeftClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <boxGeometry />
            <meshStandardMaterial transparent opacity={ 0 } />
            <Outlines thickness={0.05} transparent opacity={isHovered ? 1 : 0} color={'white'} />
        </mesh>
    </>
}