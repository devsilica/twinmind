"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface OrganProps {
  active: boolean;
  selected: boolean;
  onClick: () => void;
  color: string;
  position: [number, number, number];
  geometryType: 'sphere' | 'capsule' | 'cylinder';
  args: any[];
}

export function Organ3D({ active, selected, onClick, color, position, geometryType, args }: OrganProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a material for the organ
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: active ? 0.8 : 0.1,
    transparent: true,
    opacity: active ? 0.9 : 0.4,
    roughness: 0.2,
    metalness: 0.5,
  });

  // Animate glow and scale on selection or active state
  useFrame(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      const targetEmissive = selected ? 2.0 : active ? 1.0 : 0.1;
      const targetOpacity = selected ? 1.0 : active ? 0.8 : 0.3;
      
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, targetEmissive, 0.1);
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOpacity, 0.1);
      
      const targetScale = selected ? 1.2 : 1.0;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      material={material}
    >
      {geometryType === 'sphere' && <sphereGeometry args={args as any} />}
      {geometryType === 'capsule' && <capsuleGeometry args={args as any} />}
      {geometryType === 'cylinder' && <cylinderGeometry args={args as any} />}
    </mesh>
  );
}
