'use client';

import { Box, Typography, IconButton, Chip, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Project } from '../types';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

// 각 프로젝트별 배경색 (ProjectCard와 동일한 순서/값 사용)
const projectThemeColors = [
  'linear-gradient(135deg, #F4E5C3 0%, #E8D5A8 100%)', // 베이지/크림
  'linear-gradient(135deg, #C3E5F4 0%, #A8D5E8 100%)', // 하늘색
  'linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%)', // 베이지/아이보리
  'linear-gradient(135deg, #FFE5E5 0%, #FFD1D1 100%)', // 연한 핑크
];

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // 모달 열렸을 때 스크롤 방지 (확실한 방법: position fixed)
  useEffect(() => {
    if (project) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      
      // Body를 고정하여 스크롤 원천 차단
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden'; 
      
      // 스크롤바가 사라져도 공간을 유지하여 헤더 흔들림(Layout Shift) 방지
      document.documentElement.style.scrollbarGutter = 'stable';

      // 커서 설정
      document.body.style.cursor = 'none'; 
    } else {
      // 스크롤 위치 복구
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.cursor = 'auto';
      document.documentElement.style.scrollbarGutter = ''; // Gutter 복구
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      // 컴포넌트 언마운트 시 정리
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.cursor = 'auto';
      document.documentElement.style.scrollbarGutter = ''; // Gutter 복구
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [project]);

  if (!mounted) return null;

  // 프로젝트 ID를 기반으로 전체 프로젝트 목록에서 인덱스 찾기
  const projectIndex = project ? projects.findIndex((p) => p.id === project.id) : 0;
  // 찾은 인덱스를 커버 (혹시 -1이면 0으로)
  const safeIndex = projectIndex >= 0 ? projectIndex : 0;
  const bgTheme = projectThemeColors[safeIndex % projectThemeColors.length]; 

  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: 'rgba(0, 0, 0, 0.7)', 
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              cursor: 'none', // 백드롭 위에서도 커스텀 커서 사용
            }}
          />

          {/* Modal Container */}
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 100000, 
              pointerEvents: 'none',
              p: { xs: 2, md: 4 },
            }}
          >
            {/* Modal Content Wrapper (Background) */}
            <Box
              component={motion.div}
              layoutId={`project-${project.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              sx={{
                width: '100%',
                maxWidth: '1000px',
                height: { xs: '85vh', md: 'auto' }, 
                maxHeight: '93vh', // 높이 추가 확장
                background: bgTheme, 
                borderRadius: { xs: 3, md: 4 },
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                pointerEvents: 'auto',
                position: 'relative',
                color: '#1a1a1a', 
                cursor: 'none', // 시스템 커서 숨김 (Review Check)
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  color: 'rgba(0,0,0,0.6)',
                  bgcolor: 'rgba(255,255,255,0.4)',
                  zIndex: 20,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.8)', color: 'black' },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Inner White Box Layout */}
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 2.5, md: 4 }, // 외부 패딩
                  overflow: 'hidden',
                  display: 'flex',
                  height: '100%',
                }}
              >
                {/* The White Box itself */}
                <Box
                    sx={{
                        width: '100%',
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: { xs: 2, md: 3 },
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        height: '100%', 
                    }}
                >
                     {/* Scrollable Content inside White Box */}
                     <Box
                        sx={{
                            flex: 1,
                            overflowY: 'auto',
                            p: { xs: '5%', md: '7%' }, // 내부 패딩을 %로 변경
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                     >
                        {/* Header Section */}
                        <Box sx={{ mb: '4%', textAlign: 'center' }}>
                            <Typography 
                                sx={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.15em',
                                    color: '#888',
                                    mb: 1,
                                }}
                            >
                                {project.subtitle}
                            </Typography>
                            <Typography 
                            variant="h2" 
                            sx={{ 
                                fontWeight: 900, 
                                color: '#111', 
                                mb: 2,
                                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', // font-size를 clamp로 변경
                            }}
                            >
                                {project.title}
                            </Typography>
                            
                            {/* Tech Stack Chips */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                                {project.tech.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    sx={{
                                    bgcolor: '#f5f5f7',
                                    color: '#333',
                                    fontWeight: 600,
                                    border: '1px solid #e0e0e0',
                                    fontSize: '0.8rem',
                                    px: 1,
                                    }}
                                />
                                ))}
                            </Box>
                        </Box>

                        <Divider sx={{ mb: 4, borderColor: '#eee' }} />

                        {/* Content Grid */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: { xs: 4, md: 6 } }}>
                            
                            {/* Left Column */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#111' }}>
                                    Project Overview
                                    </Typography>
                                    <Typography sx={{ lineHeight: 1.8, color: '#555', fontSize: '1rem', whiteSpace: 'pre-line' }}>
                                        {project.overview || project.description}
                                    </Typography>
                                </Box>

                                {project.troubleshooting && project.troubleshooting.length > 0 && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#111' }}>
                                        Troubleshooting
                                        </Typography>
                                        <Box sx={{ 
                                        p: 3, 
                                        bgcolor: '#FFF5F5', 
                                        borderRadius: 3,
                                        border: '1px solid #FFE0E0',
                                        }}>
                                            {project.troubleshooting.slice(0, 2).map((item, idx) => ( 
                                                <Box key={idx} sx={{ mb: idx === project.troubleshooting!.length - 1 ? 0 : 2 }}>
                                                    <Typography sx={{ fontWeight: 700, color: '#D32F2F', fontSize: '0.95rem', mb: 0.5 }}>
                                                    {item.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6 }}>
                                                    {item.description}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                )}
                            </Box>

                            {/* Right Column */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {project.features && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#111' }}>
                                        Key Features
                                        </Typography>
                                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                            {project.features.map((f, i) => (
                                            <li key={i} style={{ marginBottom: '10px', color: '#555', display: 'flex', alignItems: 'flex-start', lineHeight: 1.6 }}>
                                                <span style={{ marginRight: '10px', color: '#111', fontWeight: 'bold' }}>•</span>
                                                {f}
                                            </li>
                                            ))}
                                        </ul>
                                    </Box>
                                )}
                                
                                {project.learned && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#111' }}>
                                        Learned
                                        </Typography>
                                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                            {project.learned.map((l, i) => (
                                            <li key={i} style={{ marginBottom: '10px', color: '#555', display: 'flex', alignItems: 'flex-start', lineHeight: 1.6 }}>
                                                <span style={{ marginRight: '10px', color: '#111', fontWeight: 'bold' }}>•</span>
                                                {l}
                                            </li>
                                            ))}
                                        </ul>
                                    </Box>
                                )}
                                
                                <Box sx={{ mt: 'auto', pt: 2 }}>
                                    {project.link && (
                                        <Button
                                        fullWidth
                                        variant="contained"
                                        href={project.link}
                                        target="_blank"
                                        startIcon={<ArrowOutwardIcon />}
                                        sx={{
                                            py: 1.8,
                                            bgcolor: '#111',
                                            color: 'white',
                                            fontWeight: 700,
                                            borderRadius: 3,
                                            fontSize: '1rem',
                                            textTransform: 'none',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                            '&:hover': { bgcolor: '#333', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', transform: 'translateY(-2px)' },
                                            transition: 'all 0.2s'
                                        }}
                                        >
                                        Visit Website
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                     </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
