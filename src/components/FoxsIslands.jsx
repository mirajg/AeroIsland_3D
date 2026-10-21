
"use client"

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FoxModel = ({ isSmallSize, ...props }) => {
    const { scene } = useGLTF("/models/foxs_islands.glb");
    const ref = useRef();

    useFrame((_, delta) => {
        // ref.current.rotation.y += delta * 0.2;
    });

    return <primitive ref={ref} object={scene} scale={isSmallSize ? (0.05) : (0.1)} {...props} />;
}

export default FoxModel