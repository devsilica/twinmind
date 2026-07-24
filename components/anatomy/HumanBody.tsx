"use client";

import { useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, useGLTF, Center, Bounds } from "@react-three/drei";
import * as THREE from "three";

import { getActiveOrgans } from "./anatomy-map";
import { OrganId } from "./types";
import { Organ3D } from "./Organ3D";

interface AnatomyModelProps {
  active: Set<string>;
  selectedOrgan: OrganId | string | null;
  handleSelect: (organ: OrganId) => void;
}

function AnatomyModel({ active, selectedOrgan, handleSelect }: AnatomyModelProps) {
  // Load the downloaded true 3D anatomy model
  const { scene } = useGLTF("/anatomy.glb");
  
  // Clone to prevent shared state mutations
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Make the outer muscular shell transparent (glass-like) to see organs inside
  useMemo(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.roughness = 0.3;
          material.metalness = 0.2;
          material.transparent = true;
          material.opacity = 0.35; // See-through outer layer
          material.depthWrite = false; // Crucial for rendering internal glowing objects correctly
        }
      }
    });
  }, [clonedScene]);

  return (
    // Rotate -90 degrees on X to stand the model upright if it's laying on its back
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* The external body shell */}
      <primitive object={clonedScene} />

      {/* Internal Organs (positioned relative to the model's feet/center) */}
      
      {/* Brain */}
      <Organ3D 
        position={[0, 1.7, -0.05]} 
        color="#ffb6b9" 
        geometryType="sphere" 
        args={[0.1, 32, 32]}
        active={active.has("brain")}
        selected={selectedOrgan === "brain"}
        onClick={() => handleSelect("brain")}
      />

      {/* Heart */}
      <Organ3D 
        position={[0, 1.35, 0.05]} 
        color="#ff6961" 
        geometryType="sphere" 
        args={[0.08, 32, 32]}
        active={active.has("heart")}
        selected={selectedOrgan === "heart"}
        onClick={() => handleSelect("heart")}
      />

      {/* Lungs */}
      <Organ3D 
        position={[-0.12, 1.35, 0]} 
        color="#84b6f4" 
        geometryType="capsule" 
        args={[0.08, 0.2, 16, 16]}
        active={active.has("left-lung")}
        selected={selectedOrgan === "left-lung"}
        onClick={() => handleSelect("left-lung")}
      />
      <Organ3D 
        position={[0.12, 1.35, 0]} 
        color="#84b6f4" 
        geometryType="capsule" 
        args={[0.08, 0.2, 16, 16]}
        active={active.has("right-lung")}
        selected={selectedOrgan === "right-lung"}
        onClick={() => handleSelect("right-lung")}
      />

      {/* Liver */}
      <Organ3D 
        position={[0.08, 1.15, 0.02]} 
        color="#77dd77" 
        geometryType="capsule" 
        args={[0.08, 0.15, 16, 16]}
        active={active.has("liver")}
        selected={selectedOrgan === "liver"}
        onClick={() => handleSelect("liver")}
      />

      {/* Stomach */}
      <Organ3D 
        position={[-0.08, 1.1, 0.05]} 
        color="#fdfd96" 
        geometryType="sphere" 
        args={[0.08, 32, 32]}
        active={active.has("stomach")}
        selected={selectedOrgan === "stomach"}
        onClick={() => handleSelect("stomach")}
      />

      {/* Kidneys */}
      <Organ3D 
        position={[-0.1, 1.05, -0.08]} 
        color="#b19cd9" 
        geometryType="capsule" 
        args={[0.05, 0.08, 16, 16]}
        active={active.has("kidney-left")}
        selected={selectedOrgan === "kidney-left"}
        onClick={() => handleSelect("kidney-left")}
      />
      <Organ3D 
        position={[0.1, 1.05, -0.08]} 
        color="#b19cd9" 
        geometryType="capsule" 
        args={[0.05, 0.08, 16, 16]}
        active={active.has("kidney-right")}
        selected={selectedOrgan === "kidney-right"}
        onClick={() => handleSelect("kidney-right")}
      />

      {/* Intestines */}
      <Organ3D 
        position={[0, 0.9, 0.05]} 
        color="#ffd1dc" 
        geometryType="sphere" 
        args={[0.12, 32, 32]}
        active={active.has("intestine")}
        selected={selectedOrgan === "intestine"}
        onClick={() => handleSelect("intestine")}
      />

    </group>
  );
}

// Preload the GLB file for better performance
useGLTF.preload("/anatomy.glb");

interface Props {
  systems: string[];
  selectedOrgan: OrganId | string | null;
  onOrganSelect?: (organ: OrganId) => void;
}

export function HumanBody({
  systems,
  selectedOrgan,
  onOrganSelect,
}: Props) {
  const active = useMemo(
    () => getActiveOrgans(systems),
    [systems]
  );

  const handleSelect = (organ: OrganId) => {
    console.log("Clicked:", organ);
    onOrganSelect?.(organ);
  };

  return (
    <div className="mx-auto h-full w-full max-w-lg min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        {/* Crisp lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <AnatomyModel 
                active={active} 
                selectedOrgan={selectedOrgan} 
                handleSelect={handleSelect} 
              />
            </Center>
          </Bounds>
          
          <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={2.5} far={10} />
        </Suspense>
        
        <OrbitControls 
          makeDefault
          enableZoom={true} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  );
}