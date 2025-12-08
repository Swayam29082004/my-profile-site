import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

export default function SpaceshipScene() {
  const shipRef = useRef();
  const planetRef = useRef();

  useFrame((state) => {
    if (shipRef.current) {
      shipRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      shipRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      
      {/* Ambient Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00a8ff" />
      
      {/* Spaceship */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group ref={shipRef}>
          <mesh position={[0, 0, 0]}>
            <coneGeometry args={[1, 2, 8]} />
            <meshStandardMaterial color="#00a8ff" metalness={0.8} roughness={0.2} />
          </mesh>
          
          {/* Engine */}
          <mesh position={[0, -1, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshBasicMaterial color="#ff3838" />
          </mesh>
        </group>
      </Float>

      {/* Planet */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={planetRef} position={[5, 2, -10]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#6c5ce7" />
        </mesh>
      </Float>
    </>
  );
}