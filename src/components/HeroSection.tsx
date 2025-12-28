'use client';

import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextType from './TextType';
import Particles from './Particles';

const ROLES = ['Marketer', 'Frontend Developer', '안녕하세요! 배수인입니다.'];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Particles />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: 2,
        }}
      >
        <TextType
          text={ROLES}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        <Box
          sx={{
            mt: 4,
            opacity: 0,
            animation: 'fadeIn 1s ease-in-out 1s forwards',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>
            Seoul, Sillim-dong | 010-4430-7175 | dpfflsk45@gmail.com
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <a href="https://github.com/waterhumanB" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}>
              <GitHubIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
