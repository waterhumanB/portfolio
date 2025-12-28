'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'aboutme', label: 'About' },
  { id: 'techstack', label: 'Tech' },
  { id: 'interests', label: 'Interests' },
  { id: 'projects', label: 'Projects' },
  { id: 'career', label: 'Experience' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // 현재 보이는 섹션 감지
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'background.paper',
        pt: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(section.id)}
              selected={activeSection === section.id}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                  },
                },
              }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: scrolled ? { xs: '90%', md: '600px' } : { xs: '95%', md: '1400px' },
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', // 전환 시간 연장
          mt: { xs: 1.5, md: 2 }, 
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Toolbar 
          sx={{ 
            display: 'flex',
            justifyContent: 'center', 
            px: { xs: 3, md: 5 },
            minHeight: { xs: '48px', md: '52px' },
            transition: 'all 0.8s ease',
          }}
        >
          {/* 로고 컨테이너 - 너비와 마진을 이용해 부드럽게 밀어냄 */}
          <Box
            onClick={() => scrollToSection('hero')}
            className="clickable"
            sx={{
              display: 'flex',
              alignItems: 'center',
              opacity: scrolled ? 0 : 1,
              maxWidth: scrolled ? '0px' : '200px', // 너비를 서서히 줄임
              transform: scrolled ? 'translateX(-20px)' : 'translateX(0)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 800,
              cursor: 'pointer',
              background: 'linear-gradient(90deg, #fff, #999)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            BaeSuIn
          </Box>

          {/* 가변 여백 박스 - 메뉴를 오른쪽으로 밀었다가 중앙으로 가져옴 */}
          <Box 
            sx={{ 
              flexGrow: scrolled ? 0 : 1, 
              width: scrolled ? 0 : 'auto',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' 
            }} 
          />

          {/* Desktop Navigation */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 3.5, 
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {sections.map((section) => (
              <Box
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="clickable"
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: activeSection === section.id ? 'white' : 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    color: 'white',
                  },
                  '&::before': {
                    content: '""',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: '#88CE02',
                    transform: activeSection === section.id ? 'scale(1)' : 'scale(0)',
                    opacity: activeSection === section.id ? 1 : 0,
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  },
                }}
              >
                {section.label}
              </Box>
            ))}
          </Box>

          {/* 우측 균형을 위한 빈 박스 (스크롤 전 메뉴를 오른쪽으로 밀기 위함) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'block' },
              width: scrolled ? 0 : 0, // 기본값 0, 필요시 로고와 대칭되는 값 설정 가능
              transition: 'all 0.8s ease' 
            }} 
          />

          {/* Mobile Menu Button */}
          <IconButton
            className="clickable"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              ml: scrolled ? 0 : 'auto',
              transition: 'all 0.8s ease',
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
