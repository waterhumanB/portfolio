'use client';

import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { skills, skillColors } from '../data/skills';
import FallingText from './FallingText';

export default function SkillsSection() {
  const allSkills = skills.flatMap((group) => group.items);
  const skillsText = allSkills.join(' ');

  const scrollToNext = () => {
    const container = document.querySelector('[ref]') as HTMLElement;
    if (container) {
      container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

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
      <Typography
        variant="h2"
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          fontWeight: 700,
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        My Skills
      </Typography>

      <Box sx={{
        width: '100%',
        flex: 1,
        overflow: 'visible',
        maxHeight: { xs: '60vh', sm: '65vh', md: '70vh' }
      }}>
        <FallingText
          text={skillsText}
          highlightWords={['React', 'Next.js', 'TypeScript', 'ChatGPT', 'Claude']}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.8}
          fontSize={{ xs: '2rem', sm: '3rem', md: '4rem' }}
          mouseConstraintStiffness={0.9}
          skillColors={skillColors}
        />
      </Box>
    </Box>
  );
}
