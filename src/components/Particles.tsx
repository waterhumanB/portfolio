'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { Box } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 현실적인 별똥별 컴포넌트 (빛줄기 형태)
function ShootingStar() {
  const ref = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  const velocity = useRef(new THREE.Vector3());
  const opacity = useRef(0);

  const resetStar = () => {
    // 시작 위치 (화면 상단 무작위)
    const x = (Math.random() - 0.5) * 8;
    const y = 2 + Math.random() * 2;
    const z = -2 - Math.random() * 3;
    
    // 속도와 방향 (왼쪽 아래로 길게)
    const speed = 0.2 + Math.random() * 0.2;
    const angle = (Math.PI / 4) + (Math.random() * 0.2); // 약 45도 각도
    velocity.current.set(
      -Math.cos(angle) * speed,
      -Math.sin(angle) * speed,
      0.1 // 아주 미세하게 앞으로 전진
    );
    
    if (ref.current) {
      ref.current.position.set(x, y, z);
      // 이동 방향에 맞춰 기하 구조 회전 (긴 꼬리가 뒤로 가도록)
      ref.current.lookAt(
        x + velocity.current.x * 10,
        y + velocity.current.y * 10,
        z + velocity.current.z * 10
      );
    }
    opacity.current = 0;
    setActive(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!active && Math.random() > 0.6) {
        resetStar();
      }
    }, 1200);
    return () => clearInterval(interval);
  }, [active]);

  useFrame((state, delta) => {
    if (!active || !ref.current) return;

    // 이동
    ref.current.position.add(velocity.current);

    // 페이드 인/아웃 효과
    if (ref.current.position.y > 0) {
      opacity.current = THREE.MathUtils.lerp(opacity.current, 1, 0.1);
    } else {
      opacity.current = THREE.MathUtils.lerp(opacity.current, 0, 0.05);
    }

    if (meshRef.current) {
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = opacity.current;
    }

    // 완전히 투명해지거나 화면 아래로 나가면 리셋
    if (opacity.current < 0.01 && ref.current.position.y < 0) {
      setActive(false);
    }
    if (ref.current.position.y < -4) {
      setActive(false);
    }
  });

  if (!active) return null;

  return (
    <group ref={ref}>
      {/* 별똥별 본체 및 꼬리 (하나의 긴 메쉬로 표현) */}
      <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.002, 0.015, 0.8, 8]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* 핵(Head) 부분 추가 효과 */}
      <mesh position={[0, 0, 0.4]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / (windowHeight || 1);
      // 스크롤 연동 회전각 상향
      setScrollRotation(scrollPercent * Math.PI);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { positions, colors } = useMemo(() => {
    const count = 3000; // 개수를 약간 줄이는 대신 크기를 키워 임팩트 부여
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const palette = [
      new THREE.Color('#ffffff'), 
      new THREE.Color('#61DAFB'), // Cyan
      new THREE.Color('#FFD700'), // Gold
      new THREE.Color('#B388FF'), // Purple
      new THREE.Color('#FF4081'), // Pink 추가
    ];

    for (let i = 0; i < count; i++) {
      const radius = 1.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // 컬러 별 비중 대폭 상향 (50% 확률로 컬러 적용)
      const color = Math.random() > 0.5 
        ? palette[Math.floor(Math.random() * palette.length)]
        : palette[0];
        
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 15;
      // 스크롤 반응도 상향
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, scrollRotation * 0.4, 0.05);
      
      const mouseX = state.mouse.x * 0.2;
      const mouseY = state.mouse.y * 0.2;
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouseX, 0.03);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouseY, 0.03);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.012} // 별 크기 상향 (가시성 확보)
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
      {/* 별똥별 개수 상향 */}
      <ShootingStar />
      <ShootingStar />
      <ShootingStar />
    </group>
  );
}

export default function Particles() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    const triggers = [100, 500];
    const timers = triggers.map(delay => 
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        if (containerRef.current && containerRef.current.offsetWidth > 0) {
          setReady(true);
        }
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!mounted) return <Box sx={{ position: 'fixed', inset: 0, zIndex: -1, background: '#000' }} />;

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        background: '#020205', // 아주 깊은 네이비 블랙으로 변경하여 색감 강조
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          width: '160%',
          height: '160%',
          // 성운 농도 및 가시성 상향
          background: `
            radial-gradient(circle at 20% 35%, rgba(97, 218, 251, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(179, 136, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 64, 129, 0.05) 0%, transparent 40%)
          `,
          filter: 'blur(60px)',
          animation: 'nebulaMove 30s ease-in-out infinite alternate',
        },
        '@keyframes nebulaMove': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(10%, 8%) rotate(5deg)' },
        }
      }}
    >
      {ready && (
        <Canvas
          camera={{ position: [0, 0, 2], fov: 60 }} // 카메라를 더 가깝게 전진
          style={{ width: '100%', height: '100%' }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ParticleField />
        </Canvas>
      )}
    </Box>
  );
}
