'use client';

import { Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { careerHistory } from '../data/career';
import { useEffect, useRef, useState } from 'react';
import ShinyText from './ShinyText';

export default function CareerSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 섹션이 보이면 아래에서부터 위로 순차적으로 애니메이션 시작
            careerHistory.forEach((_, index) => {
              // 역순으로 딜레이 적용 (마지막 항목이 먼저 나타남)
              const reverseIndex = careerHistory.length - 1 - index;
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, reverseIndex * 300);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 10,
        px: 2,
      }}
    >
      <Box sx={{ mb: 8, px: { xs: 3, md: 6 }, maxWidth: '1400px', mx: 'auto', textAlign: 'center' }}>
        <ShinyText
          text="Experience"
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
            mx: 'auto',
          }}
        >
          개발자의 시야를 비즈니스 전체로 확장해온 과정.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto' }}>
        <Timeline position="alternate">
          {careerHistory.map((career, index) => {
            const isVisible = visibleItems.includes(index);

            return (
              <TimelineItem key={career.id}>
                <TimelineSeparator>
                  {/* 동그라미 */}
                  <TimelineDot
                    sx={{
                      width: 16,
                      height: 16,
                      bgcolor: 'white',
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                      border: '3px solid rgba(255, 255, 255, 0.3)',
                      transform: isVisible ? 'scale(1)' : 'scale(0)',
                      opacity: isVisible ? 1 : 0,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${(careerHistory.length - 1 - index) * 0.3}s`,
                    }}
                  />

                  {/* 연결선 */}
                  {index < careerHistory.length - 1 && (
                    <TimelineConnector
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                        width: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: isVisible ? '100%' : '0%',
                          bgcolor: 'white',
                          transition: 'height 0.6s ease',
                          transitionDelay: `${(careerHistory.length - 1 - index) * 0.3 + 0.3}s`,
                          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                        },
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent>
                  <Box
                    sx={{
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(50px)',
                      opacity: isVisible ? 1 : 0,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${(careerHistory.length - 1 - index) * 0.3}s`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 0.5,
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                      }}
                    >
                      {career.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 1,
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                      }}
                    >
                      {career.period}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {career.description}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </Box>
  );
}
