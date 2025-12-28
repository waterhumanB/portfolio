export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  direction: 'right' | 'left';
}

export interface Career {
  id: string;
  period: string;
  company: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
  color: string;
}
