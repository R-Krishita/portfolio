'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, Points, PointMaterial, Text3D, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface GlobeProps {
  className?: string;
}

function Globe({ className }: GlobeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Generate connection points on sphere surface
  const connectionPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const numPoints = 80;
    
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      
      points.push(new THREE.Vector3(x * 1.2, y * 1.2, z * 1.2));
    }
    
    return points;
  }, []);

  // Generate connections between points
  const connections = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    
    for (let i = 0; i < connectionPoints.length; i++) {
      for (let j = i + 1; j < connectionPoints.length; j++) {
        const distance = connectionPoints[i].distanceTo(connectionPoints[j]);
        if (distance < 1.2) {
          lines.push([connectionPoints[i], connectionPoints[j]]);
        }
      }
    }
    
    return lines;
  }, [connectionPoints]);

  // Mouse interaction
  const handlePointerMove = (event: React.PointerEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setMousePosition({ x: x - 0.5, y: y - 0.5 });
  };

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002 + mousePosition.x * 0.01;
      meshRef.current.rotation.x += mousePosition.y * 0.005;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += mousePosition.y * 0.002;
    }
  });

  const wireframeColor = theme === 'dark' ? '#00d9ff' : '#0066cc';
  const pointColor = theme === 'dark' ? '#7b2ff7' : '#9333ea';
  const lineColor = theme === 'dark' ? '#00d9ff' : '#0066cc';

  return (
    <group onPointerMove={handlePointerMove}>
      {/* Main wireframe sphere with gradient */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshBasicMaterial
          color={wireframeColor}
          wireframe
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Inner glow sphere */}
      <Sphere args={[0.95, 32, 32]}>
        <meshBasicMaterial
          color={pointColor}
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      {/* Connection points with pulsing effect */}
      <Points ref={pointsRef} positions={connectionPoints}>
        <PointMaterial
          color={pointColor}
          size={0.03}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </Points>
      
      {/* Animated connection lines */}
      {connections.map((line, index) => (
        <Line
          key={index}
          points={line}
          color={lineColor}
          lineWidth={2}
          transparent
          opacity={0.4 + Math.sin(Date.now() * 0.001 + index) * 0.2}
        />
      ))}
      
      {/* Floating tech icons */}
      <FloatingIcons />
      
      {/* Ambient particles */}
      <ParticleField />
    </group>
  );
}

function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();

  const icons = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < 20; i++) {
      const radius = 2.5 + Math.random() * 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = Math.sin(phi) * Math.cos(theta) * radius;
      const y = Math.sin(phi) * Math.sin(theta) * radius;
      const z = Math.cos(phi) * radius;
      
      positions.push(new THREE.Vector3(x, y, z));
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001;
      });
    }
  });

  const iconColor = theme === 'dark' ? '#00d9ff' : '#0066cc';

  return (
    <group ref={groupRef}>
      {icons.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color={iconColor} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  const particleColor = theme === 'dark' ? '#00d9ff' : '#0066cc';

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        color={particleColor}
        size={0.008}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </Points>
  );
}

export default function GlobeScene({ className }: GlobeProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2ff7" />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Globe />
      </Canvas>
    </div>
  );
}
