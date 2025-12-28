'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Box } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  // useMemo로 파티클 위치 생성 (매 렌더링마다 재생성 방지)
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      // 구 형태로 랜덤 분포
      const radius = 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Particles() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 초기 렌더링 시 크기를 잡기 위한 다단계 트리거
    const triggers = [100, 500, 1000, 2000];
    const timers = triggers.map(delay => 
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        // 컨테이너가 유효한 크기를 가졌는지 확인
        if (containerRef.current && containerRef.current.offsetWidth > 0) {
          setReady(true);
        }
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!mounted) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1, // 배경으로 확실히 배치
          pointerEvents: 'none',
          background: '#000000',
        }}
      />
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#000000',
      }}
    >
      {ready && (
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          dpr={[1, 2]}
          gl={{ 
            antialias: false, 
            alpha: true, // 알파 채널 허용
            powerPreference: 'high-performance' 
          }}
          onCreated={({ gl }) => {
            // 생성 직후 캔버스 크기를 컨테이너에 맞춰 수동으로 강제 설정
            if (containerRef.current) {
              const width = containerRef.current.offsetWidth;
              const height = containerRef.current.offsetHeight;
              if (width > 0 && height > 0) {
                gl.setSize(width, height);
              }
            }
            window.dispatchEvent(new Event('resize'));
          }}
        >
          <ParticleField />
        </Canvas>
      )}
    </Box>
  );
}
