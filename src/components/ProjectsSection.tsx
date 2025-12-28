'use client';

import { Box, Typography } from '@mui/material';
import { projects } from '../data/projects';
import ShinyText from './ShinyText';

// 각 프로젝트별 배경색 정의
const projectBackgrounds = [
  'linear-gradient(135deg, #F4E5C3 0%, #E8D5A8 100%)', // 베이지/크림
  'linear-gradient(135deg, #C3E5F4 0%, #A8D5E8 100%)', // 하늘색
  'linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%)', // 베이지/아이보리 (하랑마케팅)
  'linear-gradient(135deg, #FFE5E5 0%, #FFD1D1 100%)', // 연한 핑크
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: { xs: 0, md: index % 2 === 1 ? 8 : 0 },
        p: 0.5,
      }}
    >
      {/* 이미지 카드 컨테이너 */}
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '4/3',
          borderRadius: { xs: 2.2, md: 3.2 },
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          background: '#000', // 베이스 배경
          cursor: 'pointer',
          '&:hover .project-overlay': {
            opacity: 1,
          },
          // [결정적 해결책] 하드웨어 가속 클리핑 강제 (모서리 빈틈 방지 CSS 핵)
          transform: 'translateZ(0)',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        }}
      >
        {/* 그래디언트 배경 레이어 - 인셋을 음수값으로 주어 모서리 끝까지 강제로 늘림 */}
        <Box
          sx={{
            position: 'absolute',
            inset: -2, 
            background: projectBackgrounds[index % projectBackgrounds.length],
            borderRadius: 'inherit',
            zIndex: 0,
          }}
        />

        {/* 가운데 이미지 */}
        <Box
          className="project-image-container"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '65%',
            borderRadius: { xs: 2.5, md: 3 },
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>

        {/* 호버 시 상세 정보 오버레이 - 초대형 사각형으로 만들어 모든 틈새 강제 차단 */}
        <Box
          className="project-overlay"
          sx={{
            position: 'absolute',
            inset: -50, // 훨씬 크게 확장
            background: 'rgba(0, 0, 0, 0.85)', 
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            borderRadius: 0, // 곡률을 없애서 사각형 끝까지 꽉 채움
            opacity: 0,
            transition: 'opacity 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 3 + 50/8, md: 6 + 50/8 }, // 패딩 보정
            zIndex: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                color: '#88CE02',
                mb: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              {project.subtitle}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: 'white',
                fontWeight: 800,
                mb: 2,
                lineHeight: 1.2
              }}
            >
              {project.title}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              {project.description}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: project.link ? 4 : 0,
              }}
            >
              {project.tech.map((tech: string) => (
                <Box
                  key={tech}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>

            {project.link && (
              <Box
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="clickable"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 3,
                  py: 1.2,
                  borderRadius: '100px',
                  bgcolor: '#88CE02',
                  color: 'black',
                  width: 'fit-content',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                View Project →
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* 하단 텍스트 정보 */}
      <Box sx={{ px: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 800,
            color: 'white',
            mb: 0.5,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', md: '0.9rem' },
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 500,
          }}
        >
          {project.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        bgcolor: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* 헤더 */}
      <Box sx={{ mb: { xs: 6, md: 8 }, px: { xs: 3, md: 6 }, maxWidth: '1400px' }}>
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

      {/* 2x2 그리드 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: 4, md: 6 },
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </Box>
    </Box>
  );
}
