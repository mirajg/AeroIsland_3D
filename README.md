
✈️ AeroIsland 3D — Interactive Portfolio

An immersive, interactive 3D web application built with Next.js, React Three Fiber, and Tailwind CSS. AeroIsland 3D features a floating low-poly island world with a companion biplane HUD element, smooth orbit controls, interactive floating popups, and full keyboard/touch accessibility.

✨ Features

3D World Navigation: Drag with your mouse, swipe on mobile, or use ArrowLeft / ArrowRight keys to rotate the 3D island scene.

Dynamic Plane Companion: A 3D biplane that stays fixed relative to the user's viewport, complete with propeller animations that trigger during active scene rotation.

Contextual Popups: Real-time zone tracking that displays interactive modal popups (e.g., Home, Projects, Portfolio, Contact) as the island rotates into specific angular ranges.

Interactive Welcome Guide: An opening overlay explaining control schemes to first-time visitors across desktop and mobile devices.

Fully Responsive & Performance-Optimized: Built-in screen dimension detection, optimized shadow rendering, and effortless 60 FPS WebGL performance.

🛠️ Tech Stack

Framework: Next.js (App Router)

3D Graphics: React Three Fiber (R3F) & Three.js

3D Helpers: @react-three/drei

Styling: Tailwind CSS

State & Animations: React Hooks (useRef, useState, useEffect) + GLTF Animation Actions

🚀 Getting Started

Prerequisites

Ensure you have Node.js installed on your system:

Node.js: v18.0.0 or higher

npm or yarn / pnpm

Installation

Clone the repository:

git clone https://github.com/mirajg/AeroIsland_3D
cd aeroisland-3d


Install dependencies:

npm install


Run the development server:

npm run dev


View in Browser:
Open http://localhost:3000 in your web browser to see the interactive 3D experience.


🎮 How to Control

Mouse / Trackpad: Click and drag left or right to orbit around the central island.

Keyboard: Press ← (Left Arrow) or → (Right Arrow) to rotate the island programmatically.

Touch Devices: Swipe left or right anywhere on the canvas to explore.
