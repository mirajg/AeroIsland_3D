
"use client"

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const FoxModel = ({ isSmallSize, ...props }) => {
    const { scene } = useGLTF("/models/foxs_islands.glb");
    const { viewport } = useThree();

    const scale = Math.min(
        0.1,
        Math.max(0.05, viewport.width * 0.01)
    );

    return (
        <primitive
            object={scene}
            scale={scale}
            {...props}
        />
    );
};

export default FoxModel;