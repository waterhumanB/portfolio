'use client';

import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 3,
        bgcolor: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4,
        }}
      >
        {/* 왼쪽: 이름 & 설명 */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 1,
              background: 'linear-gradient(90deg, #fff, #999)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            배수인
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '300px',
            }}
          >
            Marketer & Frontend Developer
          </Typography>
        </Box>

        {/* 가운데: 연락처 정보 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <EmailIcon sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              dpfflsk45@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <PhoneIcon sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              010-4430-7175
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              📍 Seoul, Sillim-dong
            </Typography>
          </Box>
        </Box>

        {/* 오른쪽: 소셜 링크 */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            href="https://github.com/waterhumanB"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              '&:hover': {
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>

      {/* 하단: 저작권 */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.85rem',
          }}
        >
          © {new Date().getFullYear()} 배수인. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
