'use client';

import { Box, Typography } from '@mui/material';
import { projects } from '../data/projects';
import ShinyText from './ShinyText';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { Project } from '../types';
import ProjectDetailsModal from './ProjectDetailsModal';

// 각 프로젝트별 배경색 정의
const projectBackgrounds = [
  'linear-gradient(135deg, #F4E5C3 0%, #E8D5A8 100%)', // 베이지/크림
  'linear-gradient(135deg, #C3E5F4 0%, #A8D5E8 100%)', // 하늘색
  'linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%)', // 베이지/아이보리 (하랑마케팅)
  'linear-gradient(135deg, #FFE5E5 0%, #FFD1D1 100%)', // 연한 핑크
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: 'transparent',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* 정렬을 위한 통합 컨테이너 */}
        <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 3, md: 6 }, width: '100%' }}>
          {/* 헤더 */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <ShinyText
              text="Projects"
              disabled={false}
              speed={3}
              className="section-title"
            />
            <Typography
              sx={{
                mt: 1,
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(255, 255, 255, 0.5)',
                maxWidth: '600px',
                lineHeight: 1.6
              }}
            >
              성장의 기록. 비즈니스 가치를 창출하고 문제를 해결한 주요 프로젝트들입니다.
            </Typography>
          </Box>

          {/* 2x2 그리드 (레이아웃 복원) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 4, md: 6 },
              width: '100%',
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onOpenModal={handleOpenModal}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />
    </>
  );
}
