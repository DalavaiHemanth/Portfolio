import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, MeshDistortMaterial, Float } from '@react-three/drei';

function InteractiveCore() {
  const coreRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      const scrollY = window.scrollY;
      coreRef.current.rotation.x = t * 0.1 + (scrollY * 0.001);
      coreRef.current.rotation.y = t * 0.15;
      // Slight vertical drift based on scroll
      coreRef.current.position.y = (scrollY * -0.002);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {/* The Liquid AI Data Core */}
      <mesh ref={coreRef} position={[2, 0, -5]} scale={2.2}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial 
          color="#ffffff" 
          transparent={true}
          opacity={0.3}
          roughness={0} 
          metalness={1} 
          distort={0.4} // Level of liquid distortion
          speed={2}     // Speed of the morphing
          transmission={0.9} 
          thickness={1.5}
        />
      </mesh>
      
      {/* Secondary smaller orbiting core */}
      <mesh position={[-3, -2, -6]} scale={1.2}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial 
          color="#c084fc" 
          transparent={true}
          opacity={0.2}
          roughness={0.2} 
          metalness={0.8} 
          distort={0.6}
          speed={3}
          transmission={0.8}
          thickness={1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <>
      {/* Colorful Animated CSS Background Blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      {/* 3D Glass Layer */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
        <Canvas dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
          
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={2} color="#c084fc" />
          <pointLight position={[0, 0, 0]} intensity={2} color="#ec4899" />

          <InteractiveCore />
        </Canvas>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, transparent 0%, var(--bg-color) 100%)', opacity: 0.8 }}></div>
    </>
  );
}
