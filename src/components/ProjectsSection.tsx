'use client';

import { useRef, useLayoutEffect } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const moveContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // [1] 이동 거리 계산: 마지막 프로젝트가 화면 중앙에 오도록
      const moveDistance = -(projects.length - 1) * 100;

      // [2] 타임라인 생성 (이동 -> 대기)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true, // 화면 고정
          scrub: 1, // 부드러운 스크롤
          start: "top top",
          end: `+=${projects.length * 1200}`, // 스크롤 길이 조금 더 늘림 (여유 확보)
          invalidateOnRefresh: true,
        },
      });

      // 동작 1: 가로로 이동
      tl.to(moveContainerRef.current, {
        x: `${moveDistance}vw`,
        ease: "none",
        duration: 8, // 전체 타임라인에서의 비율 (10만큼 이동)
      })
      // 동작 2: 마지막에서 잠시 멈춤 (Hold) - 여기가 핵심!
      .to({}, { 
        duration: 1 // 2만큼의 비율동안 멈춰있음 (여운 남기기)
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box 
      ref={sectionRef} 
      sx={{ 
        overflow: 'hidden', 
        backgroundColor: 'background.default',
        position: 'relative'
      }}
    >
      <div ref={triggerRef}>
        
        {/* 헤더 */}
        <Box 
            sx={{ 
                position: 'absolute', 
                top: { xs: 20, md: 40 }, 
                left: 0, 
                width: '100%', 
                zIndex: 10,
                textAlign: 'center',
                pointerEvents: 'none'
            }}
        >
            <Typography
            variant="h2"
            sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                color: 'text.primary',
                textShadow: '0 0 20px rgba(0,0,0,0.5)'
            }}
            >
            Projects
            </Typography>
        </Box>

        {/* 실제 움직이는 긴 컨테이너 */}
        <Box
          ref={moveContainerRef}
          sx={{
            display: 'flex',
            // [3] 오른쪽 여백 추가 (paddingRight) 
            // 마지막 아이템 뒤에 20vw 정도 여유 공간을 둬서 답답함을 없앰
            width: `${(projects.length * 100) + 20}vw`, 
            paddingRight: '20vw', 
            height: '100vh',
            willChange: 'transform',
          }}
        >
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </Box>
      </div>
    </Box>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 1.5, sm: 2, md: 10 },
        py: { xs: 2, md: 0 },
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <ProjectCard project={project} isVisible={true} />
    </Box>
  );
}
