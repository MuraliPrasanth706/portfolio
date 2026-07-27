"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Deterministic PRNG (mulberry32) so particle layout is pure and stable across renders.
function createRng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ count = 900 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const rng = createRng(1337);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 6 + rng() * 6;
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
      arr[i * 3 + 2] = radius * Math.cos(phi) * 0.6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.025;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#5b8cff"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Particles />
    </Canvas>
  );
}
