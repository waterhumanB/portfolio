'use client';

import { Box } from '@mui/material';
import Navigation from '../src/components/Navigation';
import HeroSection from '../src/components/HeroSection';
import AboutMeSection from '../src/components/AboutMeSection';
import SkillsSection from '../src/components/SkillsSection';
import TechStackSection from '../src/components/TechStackSection';
import ProjectsSection from '../src/components/ProjectsSection';
import CareerSection from '../src/components/CareerSection';
import Footer from '../src/components/Footer';

export default function Home() {
  const sectionBaseStyle = {
    scrollMarginTop: '100px', // 헤더 높이에 맞춘 여백
  };

  return (
    <>
      <Navigation />
      <Box sx={{ bgcolor: 'transparent', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Box id="hero" sx={sectionBaseStyle}>
          <HeroSection />
        </Box>
        
        <Box id="aboutme" sx={sectionBaseStyle}>
          <AboutMeSection />
        </Box>
        
        <Box id="techstack" sx={sectionBaseStyle}>
          <TechStackSection />
        </Box>
        
        <Box id="interests" sx={sectionBaseStyle}>
          <SkillsSection />
        </Box>
        
        <Box id="projects" sx={sectionBaseStyle}>
          <ProjectsSection />
        </Box>
        
        <Box id="career" sx={sectionBaseStyle}>
          <CareerSection />
        </Box>
        
        <Footer />
      </Box>
    </>
  );
}
