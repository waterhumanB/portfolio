export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  direction: 'right' | 'left';
  // 상세 모달을 위한 추가 필드
  overview?: string; // 프로젝트 한 줄 요약
  features?: string[]; // 주요 기능
  troubleshooting?: { title: string; description: string }[]; // 문제 해결 경험
  learned?: string[]; // 배운 점
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
