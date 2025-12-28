'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import ShinyText from './ShinyText';

const techStack = [
  { name: 'HTML5', color: '#E34F26', icon: 'html5' },
  { name: 'CSS3', color: '#1572B6', icon: 'css' },
  { name: 'SCSS', color: '#CC6699', icon: 'sass' },
  { name: 'Material-UI', color: '#007FFF', icon: 'mui' },
  { name: 'Styled Components', color: '#DB7093', icon: 'styledcomponents' },
  { name: 'GSAP', color: '#88CE02', icon: 'greensock' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'javascript' },
  { name: 'TypeScript', color: '#3178C6', icon: 'typescript' },
  { name: 'React', color: '#61DAFB', icon: 'react' },
  { name: 'Next.js', color: '#FFFFFF', icon: 'nextdotjs' },
  { name: 'Three.js', color: '#FFFFFF', icon: 'threedotjs' },
  { name: 'Electron', color: '#47848F', icon: 'electron' },
  { name: 'Git', color: '#F05032', icon: 'git' },
  { name: 'SEO', color: '#4285F4', icon: 'google' },
  { name: 'GA4', color: '#E37400', icon: 'googleanalytics' },
  { name: 'Puppeteer', color: '#40B5A4', icon: 'puppeteer' },
];

export default function TechStackSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'transparent',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ mb: { xs: 6, md: 8 }, px: { xs: 3, md: 6 }, maxWidth: '1400px', mx: 'auto' }}>
        <ShinyText
          text="Tech Stack"
          disabled={false}
          speed={3}
          className="section-title"
        />
        <Typography
          sx={{
            mt: 0.5,
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
          }}
        >
          상상을 현실로 구현하는 강력한 도구들.
        </Typography>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'hidden',
          py: 2, // 호버 시 위로 올라가는 공간 확보
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {/* 두 번 반복해서 무한 스크롤 효과 */}
        {[...techStack, ...techStack].map((tech, index) => (
          <Box
            key={`${tech.name}-${index}`}
            sx={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 3,
              py: 2,
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${tech.color}`,
                transform: 'translateY(-5px)',
                boxShadow: `0 10px 30px ${tech.color}40`,
              },
            }}
          >
            <Box
              component="img"
              src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`}
              alt={tech.name}
              sx={{
                width: 24,
                height: 24,
                filter: `drop-shadow(0 0 8px ${tech.color}60)`,
                objectFit: 'contain',
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'white',
                whiteSpace: 'nowrap',
              }}
            >
              {tech.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
