import { useState, useEffect } from 'react'
import { Outlines } from '@react-three/drei'

export function DoorRight({ onActiveDoorRightChange, onDoorRightHoverChange, position, scale }) {

    const [isHovered, setIsHovered] = useState(false)
    const [activeDoorRight, setActiveDoorRight] = useState(false)
  
    const handleDoorRightClick = () => {
        setActiveDoorRight(true)
        onActiveDoorRightChange(true)
    }

    const handlePointerEnter = () => {
        setIsHovered(true)
        onDoorRightHoverChange(true)
    }
    
    const handlePointerLeave = () => {
        setIsHovered(false)
        onDoorRightHoverChange(false)
    }
    
    useEffect(() => {
      document.body.style.cursor = isHovered ? 'pointer' : 'auto'
    }, [isHovered])
  
    return <>
        {/* Right Door */}
        <mesh
            position={position}
            rotation-y={Math.PI * .25}
            scale={scale}
            onClick={handleDoorRightClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <boxGeometry />
            <meshStandardMaterial transparent opacity={ 0 } />
            <Outlines thickness={0.05} transparent opacity={isHovered ? 1 : 0} color={'white'} />
        </mesh>
    </>
}