'use client';

import { Box, Typography } from '@mui/material';
import TextType from './TextType';
import WavingHand from './WavingHand';

// 애니메이션으로 바뀌는 문구들
const ANIMATED_ROLES = ['Solutions', 'Experiences', 'Vibes'];

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
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 3, md: 6 },
          maxWidth: '1400px',
          width: '100%',
        }}
      >
        {/* 인사말 */}
        <Box
          sx={{
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 0.8s forwards', // 배경이 뜨는 도중 시작
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(-20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <WavingHand /> Hey! It's me Bae SuIn,
          </Typography>
        </Box>

        {/* 메인 타이틀 */}
        <Box
          sx={{
            mb: 4,
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 1.2s forwards', // 지연 시간 상향
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Crafting{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #88CE02, #5FB709)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline',
              }}
            >
              <TextType
                text={ANIMATED_ROLES}
                typingSpeed={100}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            that inspires & engages.
          </Typography>
        </Box>

        {/* 설명 문구 (항상 유지) */}
        <Box
          sx={{
            maxWidth: '840px',
            mb: 5,
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 1.6s forwards', // 지연 시간 상향
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.8,
            }}
          >
            데이터를 이해하는 개발자, 코드를 이해하는 마케터. 두 영역의 경계를 허무는 크리에이터 배수인입니다.
단순한 웹사이트가 아닌, 비즈니스 목표를 달성하는 디지털 솔루션을 설계합니다.
          </Typography>
        </Box>

        {/* 연락처 정보 */}
        <Box
          sx={{
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 2s forwards', // 지연 시간 상향
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, md: 2 },
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Seoul, Sillim-dong
            </Typography>
            <Box
              component="span"
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                height: '14px',
                bgcolor: 'rgba(255, 255, 255, 0.3)',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              dpfflsk45@gmail.com
            </Typography>
            <Box
              component="span"
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                height: '14px',
                bgcolor: 'rgba(255, 255, 255, 0.3)',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              010-4430-7175
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
