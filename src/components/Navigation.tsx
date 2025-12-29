'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
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
        width: '100vw',
        height: '100vh',
        bgcolor: '#020205', // 투명도 제거, 푸터와 완전 동일화
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
      }}
    >
      <IconButton 
        onClick={handleDrawerToggle}
        sx={{ 
          position: 'absolute', 
          top: 20, 
          right: 20, 
          color: 'white',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' }
        }}
      >
        <CloseIcon sx={{ fontSize: '2rem' }} />
      </IconButton>
      
      <List sx={{ width: '100%', textAlign: 'center' }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(section.id)}
              sx={{
                py: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  '&::before': {
                    content: '""',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#88CE02',
                    opacity: activeSection === section.id ? 1 : 0,
                    transform: activeSection === section.id ? 'scale(1)' : 'scale(0)',
                    transition: 'all 0.4s ease',
                  }
                }}
              >
                <Typography
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: activeSection === section.id ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {section.label}
                </Typography>
              </Box>
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
          width: scrolled 
            ? { xs: '150px', md: '600px' } // 모바일에서 이름 + 버튼이 들어갈 정도로 폭 조정
            : { xs: '95%', md: '1400px' },
          left: '50%',
          transform: 'translateX(-50%)',
          bgcolor: scrolled ? '#020205' : 'rgba(255, 255, 255, 0.05)', // 불투명 솔리드 컬러로 변경
          backdropFilter: scrolled ? 'none' : 'blur(10px)',
          boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : 'none',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)', 
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
            px: { xs: 2, md: 5 },
            minHeight: { xs: '48px', md: '52px' },
            transition: 'all 0.8s ease',
          }}
        >
          {/* 모바일 전용: 스크롤 시 현재 섹션 이름 표시 */}
          <Box
            sx={{
              display: { xs: scrolled ? 'flex' : 'none', md: 'none' },
              alignItems: 'center',
              gap: 1.5,
              opacity: scrolled ? 1 : 0,
              transition: 'all 0.5s ease',
              mr: 1
            }}
          >
            <Typography 
              sx={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: 'white',
                letterSpacing: '-0.02em'
              }}
            >
              {sections.find(s => s.id === activeSection)?.label || 'Menu'}
            </Typography>
            <Box sx={{ width: '1px', height: '12px', bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
          </Box>

          {/* 로고 컨테이너 - 데스크톱 및 모바일(미스크롤시) */}
          <Box
            onClick={() => scrollToSection('hero')}
            className="clickable"
            sx={{
              display: { xs: scrolled ? 'none' : 'flex', md: 'flex' },
              alignItems: 'center',
              opacity: scrolled ? { xs: 0, md: 0 } : 1,
              maxWidth: scrolled ? '0px' : '200px', 
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

          {/* 가변 여백 박스 (데스크톱 전용) */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'block' },
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

          {/* Mobile Menu Button */}
          <IconButton
            className="clickable"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              ml: scrolled ? 0 : 'auto',
              transition: 'all 0.8s ease',
              p: 1
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            height: '100%',
            bgcolor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
