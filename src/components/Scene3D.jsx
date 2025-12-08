import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3D({ mousePosition }) {
  const groupRef = useRef();
  const sphereRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.2 + groupRef.current.rotation.y,
        0.05
      );
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b6b" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ecdc4" />

      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Floating 3D Objects */}
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere ref={sphereRef} args={[1, 32, 32]} position={[-3, 0, 0]}>
            <meshStandardMaterial
              color="#ff6b6b"
              metalness={0.8}
              roughness={0.2}
              emissive="#ff6b6b"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>

        <Float speed={3} rotationIntensity={2} floatIntensity={1}>
          <Torus ref={torusRef} args={[1.5, 0.4, 16, 100]} position={[3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#4ecdc4"
              metalness={0.7}
              roughness={0.1}
              emissive="#4ecdc4"
              emissiveIntensity={0.3}
            />
          </Torus>
        </Float>

        {/* Additional Geometric Shapes */}
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh position={[0, -2, -5]}>
            <octahedronGeometry args={[1.2]} />
            <meshPhysicalMaterial
              color="#ffe66d"
              transmission={0.8}
              thickness={0.5}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0}
            />
          </mesh>
        </Float>
      </group>

      {/* Animated Particles */}
      <points>
        <sphereGeometry args={[20, 60, 60]} />
        <pointsMaterial
          size={0.05}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </>
  );
}