
"use client";

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Plane = ({ isSmallSize, isRotating }) => {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/plane.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[Object.keys(actions)[0]];
    if (!action) return;

    if (isRotating) {
      action.reset().fadeIn(0.2).play();
    } else {
      action.fadeOut(0.2);
    }
  }, [isRotating, actions]);

  useFrame(({ camera }) => {
    if (!group.current) return;

    // Where the plane stays relative to the camera
    const offset = new THREE.Vector3(0, -0.2, -1);

    // Convert camera-relative position into world position
    offset.applyQuaternion(camera.quaternion);

    group.current.position
      .copy(camera.position)
      .add(offset);

    // Stick the plane to the camera
    group.current.quaternion.copy(camera.quaternion);

    // Keep the plane showing its side
    group.current.rotateY(Math.PI / 2);
  });

  return (
    <group
      ref={group}
      scale={isSmallSize ? 0.3 : 0.5}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Plane;