'use client';

import { Typography, Chip, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

export default function ProjectCard({ project, isVisible }: ProjectCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
        p: { xs: 3, sm: 4, md: 5 },
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        maxWidth: '1400px',
        width: '100%',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      {/* 이미지 섹션 */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 45%' },
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '300px', sm: '400px', md: '100%' },
            minHeight: { md: '400px' },
            borderRadius: 3,
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* 설명 섹션 */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 55%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 500,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
          }}
        >
          {project.subtitle}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: { xs: '0.95rem', md: '1rem' },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
          }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            mb: 4,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
          }}
        >
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 500,
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            />
          ))}
        </Box>

        {project.link && (
          <Button
            variant="outlined"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
            sx={{
              borderRadius: 9999,
              px: 4,
              py: 1.5,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', md: '1rem' },
              alignSelf: 'flex-start',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                '&::before': {
                  left: '100%',
                },
                '& .MuiSvgIcon-root': {
                  transform: 'translateX(5px)',
                },
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            View Project
          </Button>
        )}
      </Box>
    </Box>
  );
}
