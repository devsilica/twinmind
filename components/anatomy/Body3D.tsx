"use client";

import { MeshPhysicalMaterial } from 'three';

export function Body3D() {
  // A beautiful glass-like material for the human body shell
  const glassMaterial = new MeshPhysicalMaterial({
    color: '#8ecae6',
    transmission: 0.9,     // Glass-like transparency
    opacity: 1,
    metalness: 0,
    roughness: 0.1,        // Smooth surface
    ior: 1.5,              // Index of refraction for glass
    thickness: 2,          // Volume thickness
    specularIntensity: 1,
    transparent: true,
    side: 2,               // DoubleSide
  });

  return (
    <group position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 2.5, 0]} material={glassMaterial}>
        <sphereGeometry args={[0.4, 32, 32]} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.9, 0]} material={glassMaterial}>
        <cylinderGeometry args={[0.12, 0.15, 0.4, 32]} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0.5, 0]} material={glassMaterial}>
        <capsuleGeometry args={[0.6, 1.6, 32, 32]} />
      </mesh>

      {/* Shoulders / Arms */}
      <mesh position={[-0.8, 1.0, 0]} rotation={[0, 0, -0.2]} material={glassMaterial}>
        <capsuleGeometry args={[0.2, 1.4, 16, 16]} />
      </mesh>
      <mesh position={[0.8, 1.0, 0]} rotation={[0, 0, 0.2]} material={glassMaterial}>
        <capsuleGeometry args={[0.2, 1.4, 16, 16]} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.3, 0]} material={glassMaterial}>
        <capsuleGeometry args={[0.25, 1.8, 16, 16]} />
      </mesh>
      <mesh position={[0.3, -1.3, 0]} material={glassMaterial}>
        <capsuleGeometry args={[0.25, 1.8, 16, 16]} />
      </mesh>
    </group>
  );
}
