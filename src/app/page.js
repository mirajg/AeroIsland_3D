
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useProgress, ContactShadows } from '@react-three/drei'
import FoxModel from '@/components/FoxsIslands'
import Loader from '@/components/Loader'
import PopUp from '@/components/PopUp'
import Cloud from '@/components/Cloud'
import Plane from '@/components/Plane'
import WelcomeModal from "@/components/WelcomeModal.jsx"


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallSize, setIsSmallSize] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const rotationTimeout = useRef(null);
  const controlsRef = useRef();

  const triggerRotationFeedback = () => {
    setIsRotating(true);
    if (rotationTimeout.current) clearTimeout(rotationTimeout.current);
    rotationTimeout.current = setTimeout(() => {
      setIsRotating(false);
    }, 150);
  };

  const handleOrbitChange = (e) => {
    setIsRotating(true);

    // Clear any existing timeout
    if (rotationTimeout.current) clearTimeout(rotationTimeout.current);

    // Set the plane to stop animating 150ms after the user stops dragging
    rotationTimeout.current = setTimeout(() => {
      setIsRotating(false);
    }, 150);

    const angle = e.target.getAzimuthalAngle();

    const zones = [
      { min: -Math.PI, max: -2.35, component: "Main Site" },
      { min: -1.56, max: -0.39, component: "Contact" },
      { min: 0.4, max: 1.18, component: "About" },
    ];

    const zone = zones.find(
      ({ min, max }) => angle >= min && angle < max
    );

    setShowNewComponent(zone ? zone.component : null);
  };

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      setShowWelcome(true);
    }
  }, []);

  useEffect(() => {
    // Function to check screen width (e.g., standard mobile breakpoint is 768px)
    const checkScreenSize = () => {
      setIsSmallSize(window.innerWidth < 1200);
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for window resizing
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle Keyboard Arrow Press Events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!controlsRef.current) return;

      const step = 0.1; // Speed of rotation per key press

      if (e.key === "ArrowLeft") {
        controlsRef.current.autoRotate = false;
        // Adjust the orbital angle or rotate the spherical coordinates
        controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() - step);
        controlsRef.current.update();
        triggerRotationFeedback();
      } else if (e.key === "ArrowRight") {
        controlsRef.current.autoRotate = false;
        controlsRef.current.setAzimuthalAngle(controlsRef.current.getAzimuthalAngle() + step);
        controlsRef.current.update();
        triggerRotationFeedback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-screen h-[100dvh]">

      {showWelcome && (
        <WelcomeModal
          onClose={() => {
            sessionStorage.setItem("hasSeenWelcome", "true");
            setShowWelcome(false);
          }}
        />
      )}

      {/* HTML Loader shown on top of the canvas while loading */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white">
          <Loader text="Loading Simulation..." />
        </div>
      )}

      {showNewComponent && (
        <>
          <PopUp text={showNewComponent} />
        </>
      )}

      <Canvas
        style={{ width: '100%', height: '100%' }}
        onCreated={() => setIsLoading(false)} // Hides HTML loader once WebGL is ready
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[15, 20, 10]}
          intensity={1.5}
          castShadow
        />

        {/* Fill Light (Softens harsh dark shadows on the opposite side) */}
        <directionalLight
          position={[-15, 10, -10]}
          intensity={0.4}
        />

        <Cloud />
        {/* Render model directly without inside-canvas Suspense HTML */}
        <FoxModel isSmallSize={isSmallSize} />
        <Plane isSmallSize={isSmallSize} isRotating={isRotating} />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.6}
          scale={40}
          blur={2}
          far={10}
        />

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.3}
          dampingFactor={0.1}
          onChange={handleOrbitChange}
        />
      </Canvas>
    </div>
  )
}