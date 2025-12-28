import { Skill } from '../types';

export const skillColors: { [key: string]: string } = {
  // Frontend
  HTML: '#E34F26',
  CSS: '#1572B6',
  JS: '#F7DF1E',
  TS: '#3178C6',
  React: '#61DAFB',
  'Next.js': '#000000',
  Puppeteer: '#40B5A4',

  // Marketing
  SEO: '#4285F4',
  'Keyword Analysis': '#FF6B6B',
  Crawling: '#9B59B6',
  'Digital Mkt': '#E74C3C',
  'Blog Mkt': '#3498DB',
  CapCut: '#000000',

  // AI
  Cursor: '#6366F1',
  ChatGPT: '#10A37F',
  Gemini: '#8E75FF',
  Claude: '#CC9B7A',
};

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JS', 'TS', 'React', 'Next.js', 'Puppeteer'],
    color: '#00B4DB',
  },
  {
    category: 'Marketing',
    items: ['SEO', 'Keyword Analysis', 'Crawling', 'Digital Mkt', 'Blog Mkt', 'CapCut'],
    color: '#4169E1',
  },
  {
    category: 'AI',
    items: ['Cursor', 'ChatGPT', 'Gemini', 'Claude'],
    color: '#00FF41',
  },
];
