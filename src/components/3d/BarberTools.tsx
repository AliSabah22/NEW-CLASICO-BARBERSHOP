"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Group, MeshStandardMaterial } from "three";

export function BarberTools() {
  const group = useRef<Group>(null);

  // Create reusable materials
  const goldMaterial = new MeshStandardMaterial({
    color: "#FFD700",
    metalness: 0.9,
    roughness: 0.1,
    envMapIntensity: 1,
  });

  const steelMaterial = new MeshStandardMaterial({
    color: "#C0C0C0",
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1,
  });

  return (
    <group ref={group}>
      {/* Scissors */}
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        position={[-1.5, 0, 0]}
      >
        <group rotation={[0, Math.PI / 4, 0]}>
          {/* Scissors handles */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.4, 32]} />
            <primitive object={goldMaterial} attach="material" />
          </mesh>
          {/* Scissors blades */}
          <group position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <mesh>
              <boxGeometry args={[0.6, 0.03, 0.03]} />
              <primitive object={steelMaterial} attach="material" />
            </mesh>
            {/* Blade edge */}
            <mesh position={[0.3, 0, 0]}>
              <boxGeometry args={[0.1, 0.01, 0.01]} />
              <primitive object={steelMaterial} attach="material" />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Comb */}
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.4}
        position={[0, 0, 0]}
      >
        <group rotation={[0, -Math.PI / 6, 0]}>
          {/* Comb handle */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.2, 0.08, 0.04]} />
            <primitive object={goldMaterial} attach="material" />
          </mesh>
          {/* Comb teeth */}
          <group position={[0.15, 0, 0]}>
            {Array.from({ length: 12 }).map((_, i) => (
              <mesh key={i} position={[0, 0, i * 0.03 - 0.165]}>
                <boxGeometry args={[0.08, 0.15, 0.008]} />
                <primitive object={steelMaterial} attach="material" />
              </mesh>
            ))}
          </group>
        </group>
      </Float>

      {/* Blade */}
      <Float
        speed={1.8}
        rotationIntensity={0.25}
        floatIntensity={0.45}
        position={[1.5, 0, 0]}
      >
        <group rotation={[0, Math.PI / 3, 0]}>
          {/* Blade handle */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.3, 32]} />
            <primitive object={goldMaterial} attach="material" />
          </mesh>
          {/* Blade edge */}
          <group position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <mesh>
              <boxGeometry args={[0.4, 0.015, 0.015]} />
              <primitive object={steelMaterial} attach="material" />
            </mesh>
            {/* Blade tip */}
            <mesh position={[0.2, 0, 0]}>
              <boxGeometry args={[0.1, 0.01, 0.01]} />
              <primitive object={steelMaterial} attach="material" />
            </mesh>
          </group>
        </group>
      </Float>
    </group>
  );
} 