'use client';

import { Box, Typography, Container } from '@mui/material';
import ShinyText from './ShinyText';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const text1 = `반도체의 나노 단위 공정을 다루던 정밀함,
대중의 마음을 움직이던 바이럴 마케터의 감각,
그리고 온라인 PT 서비스를 직접 창업해본 비즈니스 경험까지.

이 서로 다른 점들이 연결되어 '코드(Code)'라는 선이 되었습니다.

저는 단순한 개발자가 아닙니다.
비즈니스의 시작과 끝을 모두 경험했기에,
기획자의 언어로 소통하고 경영자의 시야로 개발합니다.

시장을 이해하는 마케터이자,
상상을 현실로 구현하는 비즈니스 아키텍트.
그것이 제가 지향하는 개발자입니다.`;
  

  useGSAP(() => {
    const words = gsap.utils.toArray('.reveal-word');
    
    gsap.to(words, {
      color: '#ffffff',
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'bottom 60%', // 텍스트가 기므로 bottom 기준으로 리빌 완료
        scrub: true,
      }
    });
  }, { scope: containerRef });

  const renderWords = (text: string) => {
    return text.split(' ').map((word, i) => (
      <Box
        component="span"
        key={i}
        className="reveal-word"
        sx={{
          color: 'rgba(255, 255, 255, 0.2)', // 초기 가동성을 조금 낮추어 리빌 효과 강조
          display: 'inline-block',
          mr: '0.3em',
        }}
      >
        {word}
      </Box>
    ));
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 3, md: 6 } }}>
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <ShinyText
            text="About Me"
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
            서로 다른 경험을 연결해 유일한 가치를 만듭니다.
          </Typography>
        </Box>

        <Box
          ref={textRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2.5, md: 4 }, // 줄 바꿈 간의 간격
          }}
        >
          {text1.split('\n').map((line, idx) => (
            <Typography
              key={idx}
              variant="body1"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' },
                lineHeight: 1.6,
                fontWeight: 700,
                textAlign: 'left',
                wordBreak: 'keep-all',
                minHeight: line.trim() === '' ? '1.5rem' : 'auto',
              }}
            >
              {line.trim() !== '' ? renderWords(line) : ''}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
