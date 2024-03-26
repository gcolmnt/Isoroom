import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Rooms } from './rooms.jsx'


import Lights from './Lights.jsx'
import Loader from './Loader.jsx'

export default function Experience()
{
    const controls = useRef()
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    return <>
    <Canvas>
        <OrthographicCamera
            makeDefault
            zoom={ isMobile ? 100 : 150 }
            top={window.innerHeight  / 2}
            bottom={-window.innerHeight  / 2}
            left={-window.innerWidth / 2}
            right={window.innerWidth / 2}
            near={0.1}
            far={200}
            position={[ 0, 5, 6 ]}
        />
        <OrbitControls 
            ref={controls}
            enablePan={false}
            target={[0, 1.5, 0]}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
            <Rooms />
        </Suspense>
    </Canvas>
    </>
}