import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Rooms } from './rooms.jsx'


import Lights from './Lights.jsx'
import Loader from './Loader.jsx'

export default function Experience()
{
    const controls = useRef()

    return <>
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 5, 6 ],
            zoom : 0.8
        } }
    >
        <OrbitControls 
            ref={controls}
            enablePan={false}
            target={[0, 1, 0]}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
            <Rooms />
        </Suspense>
    </Canvas>
    </>
}