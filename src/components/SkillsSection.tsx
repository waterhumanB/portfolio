'use client';

import { Box, Typography } from '@mui/material';
import { interests, interestColors } from '../data/skills';
import FallingText from './FallingText';
import ShinyText from './ShinyText';

export default function SkillsSection() {
  const interestsText = interests.join('::');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        pt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1, sm: 2 },
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 }, px: { xs: 3, md: 6 }, maxWidth: '1400px', width: '100%' }}>
        <ShinyText
          text="Interests"
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
          나를 멈추지 않게 하는 에너지의 원천 - click & drag
        </Typography>
      </Box>

      <Box sx={{
        width: '100%',
        flex: 1,
        overflow: 'visible',
        maxHeight: { xs: '60vh', sm: '65vh', md: '70vh' }
      }}>
        <FallingText
          text={interestsText}
          highlightWords={['Weight Training', 'AI', 'Success', 'Growth']}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.8}
          fontSize={{ xs: '2rem', sm: '3rem', md: '4rem' }}
          mouseConstraintStiffness={0.9}
          skillColors={interestColors}
        />
      </Box>
    </Box>
  );
}
