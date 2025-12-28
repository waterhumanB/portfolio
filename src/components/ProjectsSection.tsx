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
            mt: 0.5,
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
          }}
        >
          비즈니스 문제를 해결하고 성장을 만든 기록.
        </Typography>
      </Box>

      {/* 2x2 그리드 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: 3, md: 4 },
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              // 오른쪽 열(홀수 인덱스)을 아래로 이동
              mt: { xs: 0, md: index % 2 === 1 ? 8 : 0 },
              p: 0.5, // 약간의 패딩 추가
            }}
          >
            {/* 이미지 카드 */}
            <Box
              sx={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: { xs: 2.2, md: 3.2 },
                background: projectBackgrounds[index % projectBackgrounds.length],
                transition: 'box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 16px 50px rgba(0, 0, 0, 0.6)',
                  '& .project-overlay': {
                    opacity: 1,
                  },
                },
              }}
            >
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
                  borderRadius: { xs: 2, md: 2.5 },
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box
                  className="project-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>

              {/* 호버 시 상세 정보 오버레이 */}
              <Box
                className="project-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: 1, md: 1 },
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: { xs: 3, md: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    color: 'rgba(255, 255, 255, 0.6)',
                    mb: 1,
                    fontWeight: 500,
                  }}
                >
                  {project.subtitle}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: project.link ? 3 : 0,
                  }}
                >
                  {project.tech.map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        color: 'white',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>

                {/* 사이트 보러가기 버튼 */}
                {project.link && (
                  <Box
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: 'rgba(136, 206, 2, 0.1)',
                      border: '1px solid #88CE02',
                      width: 'fit-content',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        bgcolor: 'rgba(136, 206, 2, 0.2)',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        color: '#88CE02',
                        fontWeight: 600,
                      }}
                    >
                      사이트 보러가기
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        color: '#88CE02',
                        fontSize: '1.2rem',
                        lineHeight: 1,
                      }}
                    >
                      →
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>

            {/* 하단 텍스트 정보 */}
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 700,
                  color: 'white',
                  mb: 0.5,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 500,
                }}
              >
                {project.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
