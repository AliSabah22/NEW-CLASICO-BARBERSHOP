"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { BarberTools } from "./BarberTools";

export function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.2} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.3} />
        
        {/* Main content */}
        <BarberTools />
        
        {/* Shadows */}
        <AccumulativeShadows
          temporal
          frames={100}
          alphaTest={0.85}
          opacity={0.8}
          scale={10}
          position={[0, -1.5, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            intensity={0.5}
            ambient={0.5}
            position={[5, 5, -5]}
          />
        </AccumulativeShadows>
        
        {/* Controls and environment */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Environment preset="studio" background blur={0.8} />
      </Canvas>
    </div>
  );
} 