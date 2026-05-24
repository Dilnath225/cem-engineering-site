'use client';

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* ──────────────────────────── Constants ──────────────────────────── */

const GOLD = '#c8963e';
const PARTICLE_COUNT = 200;

/* ──────────────────────────── Types ───────────────────────────────── */

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  speed: number;
  rotationAxis: [number, number, number];
  floatAmplitude: number;
  floatOffset: number;
}

/* ──────────────────────────── Floating Shape ─────────────────────── */

function FloatingShape({
  position,
  geometry,
  speed,
  rotationAxis,
  floatAmplitude,
  floatOffset,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const baseY = position[1];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mesh = meshRef.current;
    if (!mesh) return;

    // Slow rotation
    mesh.rotation.x += speed * rotationAxis[0];
    mesh.rotation.y += speed * rotationAxis[1];
    mesh.rotation.z += speed * rotationAxis[2];

    // Sine-wave float
    mesh.position.y = baseY + Math.sin(t * 0.6 + floatOffset) * floatAmplitude;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

/* ──────────────────────────── Particle Field ─────────────────────── */

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, basePositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
    }
    return { positions: pos, basePositions: base };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pts = pointsRef.current;
    if (!pts) return;

    const posAttr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      arr[idx + 1] =
        basePositions[idx + 1] + Math.sin(t * 0.3 + i * 0.5) * 0.15;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color={GOLD}
        size={0.04}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ──────────────────────────── Mouse Parallax Rig ─────────────────── */

function ParallaxRig() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2(0, 0));

  useFrame(({ pointer }) => {
    // Smooth lerp toward pointer
    target.current.x = THREE.MathUtils.lerp(
      target.current.x,
      pointer.x * 0.4,
      0.05,
    );
    target.current.y = THREE.MathUtils.lerp(
      target.current.y,
      pointer.y * 0.3,
      0.05,
    );

    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
  });

  return null;
}

/* ──────────────────────────── Shape Definitions ──────────────────── */

interface ShapeDef {
  geo: THREE.BufferGeometry;
  pos: [number, number, number];
  speed: number;
  axis: [number, number, number];
  amp: number;
  offset: number;
}

function useShapeDefs(): ShapeDef[] {
  return useMemo(() => {
    const cube = new THREE.BoxGeometry(1, 1, 1);
    const torus = new THREE.TorusGeometry(0.7, 0.25, 12, 24);
    const ico = new THREE.IcosahedronGeometry(0.8, 0);
    const octa = new THREE.OctahedronGeometry(0.7, 0);

    const cubeSm = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const torusSm = new THREE.TorusGeometry(0.45, 0.15, 10, 20);
    const icoSm = new THREE.IcosahedronGeometry(0.5, 0);
    const octaSm = new THREE.OctahedronGeometry(0.45, 0);

    return [
      // — large shapes —
      { geo: cube, pos: [-3.5, 2.0, -2], speed: 0.003, axis: [1, 0.6, 0.3], amp: 0.5, offset: 0 },
      { geo: torus, pos: [3.8, -1.5, -3], speed: 0.004, axis: [0.4, 1, 0.2], amp: 0.4, offset: 1.2 },
      { geo: ico, pos: [-2.2, -2.5, -1], speed: 0.0035, axis: [0.5, 0.5, 1], amp: 0.45, offset: 2.5 },
      { geo: octa, pos: [2.5, 2.8, -4], speed: 0.003, axis: [0.7, 0.3, 0.6], amp: 0.55, offset: 3.8 },
      { geo: torus, pos: [0.5, -3.2, -2.5], speed: 0.0025, axis: [0.3, 0.8, 0.5], amp: 0.35, offset: 5.0 },
      { geo: ico, pos: [-4.0, 0.5, -3.5], speed: 0.004, axis: [0.6, 0.4, 0.7], amp: 0.5, offset: 0.8 },

      // — smaller accent shapes —
      { geo: cubeSm, pos: [4.5, 1.0, -1.5], speed: 0.005, axis: [1, 1, 0.5], amp: 0.3, offset: 1.5 },
      { geo: octaSm, pos: [-1.5, 3.5, -2.5], speed: 0.004, axis: [0.5, 0.7, 1], amp: 0.35, offset: 4.0 },
      { geo: icoSm, pos: [1.8, -0.8, -4.5], speed: 0.0045, axis: [0.8, 0.3, 0.6], amp: 0.25, offset: 2.0 },
      { geo: torusSm, pos: [-3.0, -1.0, -5], speed: 0.003, axis: [0.4, 0.9, 0.3], amp: 0.4, offset: 3.2 },
    ];
  }, []);
}

/* ──────────────────────────── Scene ──────────────────────────────── */

function Scene() {
  const shapes = useShapeDefs();

  return (
    <>
      {/* Ambient light for subtle shape visibility */}
      <ambientLight intensity={0.3} />

      {/* Stars background */}
      <Stars
        radius={50}
        depth={60}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={0.8}
      />

      {/* Floating wireframe shapes */}
      {shapes.map((s, i) => (
        <FloatingShape
          key={i}
          position={s.pos}
          geometry={s.geo}
          speed={s.speed}
          rotationAxis={s.axis}
          floatAmplitude={s.amp}
          floatOffset={s.offset}
        />
      ))}

      {/* Gold particle field */}
      <ParticleField />

      {/* Subtle mouse parallax */}
      <ParallaxRig />

      {/* Auto-rotating orbit controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
}

/* ──────────────────────────── Canvas Wrapper ─────────────────────── */

export default function HeroCanvas() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
