import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const ProfileCard = () => {
  // Path Alignment: Using the same hardcoded path as CV
  const texture = useTexture('/Hux_Ain-Portfolio/hux-photo.jpg', (texture) => {
    console.log('Texture Loaded!');
  });
  
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time) * 0.1;
    meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={[2, 0, 1]} ref={meshRef}>
        {/* Lighting specifically for the photo mesh */}
        <pointLight position={[0, 0, 2]} intensity={2} color="#ffffff" />
        
        {/* Main Profile Image Plane */}
        <mesh scale={[2, 2, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial 
            map={texture} 
            transparent={true}
            side={THREE.DoubleSide} 
          />
        </mesh>
        
        {/* Circular Frame / Glow Effect */}
        <mesh position={[0, 0, -0.01]} scale={[2.4, 2.4, 1]}>
          <circleGeometry args={[0.5, 64]} />
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.2} />
        </mesh>

        {/* Floating Glass Border */}
        <mesh position={[0, 0, -0.02]} scale={[2.2, 2.2, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={1}
            thickness={0.5}
            roughness={0}
            transparent={true}
            opacity={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.2} position={[-2, 0, 0]}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Particles = ({ count = 5000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#00f2ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Global Lighting specifically near photo mesh */}
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00a2ff" />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <AnimatedShape />
        <ProfileCard />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
