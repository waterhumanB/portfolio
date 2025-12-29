'use client';

import { Typography, Box, Button } from '@mui/material';
import { Project } from '../types';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

// 각 프로젝트별 배경색
const projectBackgrounds = [
  'linear-gradient(135deg, #F4E5C3 0%, #E8D5A8 100%)', // 베이지/크림
  'linear-gradient(135deg, #C3E5F4 0%, #A8D5E8 100%)', // 하늘색
  'linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%)', // 베이지/아이보리
  'linear-gradient(135deg, #FFE5E5 0%, #FFD1D1 100%)', // 연한 핑크
];

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null); // 전체 래퍼 (이벤트 감지)
  const cardRef = useRef<HTMLDivElement>(null);      // 실제 움직일 카드
  const glowRef = useRef<HTMLDivElement>(null);      // 카드 내부 스포트라이트

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;
    
    if (!container || !card || !glow) return;

    // 마우스 움직임 핸들러 (Container 기준)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect(); // 카드의 좌표 기준
      if (rect.width === 0 || rect.height === 0) return;

      // 마우스 위치 (카드 중심 기준)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D 회전 (Tilt)
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
        transformOrigin: 'center center',
      });

      // Spotlight 위치
      gsap.to(glow, {
        x: x,
        y: y,
        opacity: 0.3, 
        duration: 0.2,
        ease: 'power1.out',
      });
    };

    const handleMouseLeave = () => {
      // 복귀 애니메이션
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });

      gsap.to(glow, {
        opacity: 0,
        duration: 0.5,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);


  // 카드별 이미지 이동 방향 정의
  const moveDir = [
    { x: '-100%', y: '-100%' }, 
    { x: '100%', y: '-100%' },
    { x: '-100%', y: '100%' },
    { x: '100%', y: '100%' },
  ];
  const currentDir = moveDir[index % 4];

  // 각 카드의 배경색
  const cardBgColor = projectBackgrounds[index % projectBackgrounds.length];

  return (
    <Box
      ref={containerRef}
      className="group"
      onClick={() => onOpenModal(project)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5, // 카드와 텍스트 사이 간격
        mt: { xs: 0, md: index % 2 === 1 ? 8 : 0 }, // 지그재그 배치
        cursor: 'pointer',
        width: '100%',
        perspective: '1000px', // 3D 효과를 위한 원근감
      }}
    >
      {/* 1. 실제 카드 영역 (3D Tilt 대상) */}
      <Box
        ref={cardRef}
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          borderRadius: { xs: 3, md: 4 },
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          background: cardBgColor,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          outline: '1px solid transparent', // 렌더링 깨짐 방지
          backfaceVisibility: 'hidden',
          
          // Hover Action (내부 요소 제어)
          '.group:hover & .project-overlay': {
            opacity: 1,
            transform: 'translate(-50%, -50%) translate(0, 0)', 
          },
          '.group:hover & .project-image': {
            transform: `translate(-50%, -50%) translate(${currentDir.x}, ${currentDir.y}) rotate(${index % 2 === 0 ? 10 : -10}deg)`,
            opacity: 0, 
          },
        }}
      >
        {/* Spotlight Effect */}
        <Box
          ref={glowRef}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            opacity: 0,
            zIndex: 10,
          }}
        />

        {/* 이미지 컨테이너 */}
        <Box
          className="project-image"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) translateZ(10px)',
            width: '85%',
            height: '70%',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            zIndex: 2,
            transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', 
            bgcolor: 'white',
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </Box>

        {/* 오버레이 (화이트 박스) */}
        <Box
          className="project-overlay"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            // 초기 위치: 반대 방향에서 대기
            transform: `translate(-50%, -50%) translate(${currentDir.x === '-100%' ? '100%' : '-100%'}, ${currentDir.y === '-100%' ? '100%' : '-100%'})`, 
            width: '85%', 
            height: '70%',
            borderRadius: 2,
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3,
            opacity: 0,
            zIndex: 3,
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#888',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.7rem',
              mb: 1,
            }}
          >
            {project.subtitle}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#222',
              fontWeight: 800,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.2,
              mb: 1.5,
              wordBreak: 'keep-all',
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: '#555',
              fontSize: '0.8rem',
              fontWeight: 500,
              lineHeight: 1.4,
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              wordBreak: 'keep-all',
              opacity: 0.9,
            }}
          >
            {project.description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: '#111', // 검정 버튼
              color: 'white',
              borderRadius: '50px',
              px: 3,
              py: 0.6,
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#333',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>

      {/* 2. 하단 텍스트 정보 */}
      <Box sx={{ px: 1 }}>
        <Typography 
          sx={{ 
            fontSize: { xs: '1.25rem', md: '1.5rem' }, 
            fontWeight: 700, 
            color: 'white',
            mb: 0.5,
            transition: 'color 0.3s',
            '.group:hover &': { // 그룹 호버 시 색상 변경
               color: '#88CE02'
            }
          }}
        >
          {project.title}
        </Typography>
        <Typography 
          sx={{ 
            fontSize: '1rem', 
            color: 'rgba(255, 255, 255, 0.6)', 
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2, 
            WebkitBoxOrient: 'vertical', 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            // 높이 강제 제거 (자연스럽게 늘어나도록)
          }}
        >
          {project.overview || project.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
