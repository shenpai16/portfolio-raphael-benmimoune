import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedGrid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2;
      meshRef.current.position.y = -2; 
      meshRef.current.rotation.z = Math.sin(t / 4) / 8; 
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[50, 50, 80, 80]} />
      <meshBasicMaterial
        color="#00aaff"
        wireframe
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <color attach="background" args={["#050816"]} />
        <AnimatedGrid />
      </Canvas>
    </div>
  );
}