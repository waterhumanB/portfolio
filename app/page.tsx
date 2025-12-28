'use client';

import { Box } from '@mui/material';
import HeroSection from '../src/components/HeroSection';
import SkillsSection from '../src/components/SkillsSection';
import ProjectsSection from '../src/components/ProjectsSection';
import CareerSection from '../src/components/CareerSection';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CareerSection />
    </Box>
  );
}
