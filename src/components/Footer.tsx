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
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 }, // 하단 여백 축소
        px: { xs: 2, md: 3 },
        bgcolor: 'transparent',
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          margin: '0 auto',
          pt: { xs: 6, md: 8 },
          pb: { xs: 4, md: 5 }, // 카드 내부 하단 여백 축소
          px: { xs: 4, md: 8 },
          bgcolor: '#020205', // 우주 배경색과 완벽히 일치
          borderRadius: { xs: '24px', md: '40px' },
          border: '1px solid rgba(255, 255, 255, 0.08)', // 경계선 명확화
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
            mb: 6
          }}
        >
          {/* 왼쪽: 이름 & 설명 */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 1.5,
                background: 'linear-gradient(90deg, #fff, #999)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}
            >
              배수인
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '300px',
                lineHeight: 1.6
              }}
            >
              Marketer & Frontend Developer<br />
              Creating meaningful digital experiences.
            </Typography>
          </Box>

          {/* 가운데: 연락처 정보 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <EmailIcon sx={{ fontSize: '1.1rem', color: '#88CE02' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                dpfflsk45@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <PhoneIcon sx={{ fontSize: '1.1rem', color: '#88CE02' }} />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                010-4430-7175
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                📍 Seoul, Sillim-dong
              </Typography>
            </Box>
          </Box>

          {/* 오른쪽: 소셜 링크 */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton
              href="https://github.com/waterhumanB"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#88CE02',
                  color: 'black',
                  transform: 'translateY(-5px)'
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
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: { xs: 'center', md: 'center' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em'
            }}
          >
            © 2025 배수인. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
