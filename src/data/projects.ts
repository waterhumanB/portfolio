import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'automation',
    title: '네이버 검색 노출 및 데이터 자동화',
    subtitle: 'Zero Human Error, 100% Efficiency',
    description:
      '수동으로 진행하던 대량의 키워드 검증 업무를 완벽하게 자동화한 데스크톱 애플리케이션입니다. Electron과 Puppeteer를 활용하여 동적 렌더링 페이지의 데이터를 정밀하게 크롤링하며, 통합검색 및 채널별 2단계 교차 검증 로직으로 휴먼 에러를 0%로 차단했습니다. Google Sheets API 연동을 통해 실시간으로 데이터를 동기화하여 마케팅 의사결정 속도를 비약적으로 높였습니다.',
    tech: ['React', "TypeScript",'Electron', 'Puppeteer', 'Google Sheets API'],
    image: '/img/project_automation.png',
    direction: 'right',
  },
  {
    id: 'tandangeguard',
    title: '탄단지 지킴이',
    subtitle: 'Personalized Health Algorithm',
    description:
      '사용자의 신체 데이터(키, 체중, 활동량)를 분석하여 가장 이상적인 영양 섭취량을 실시간으로 산출해주는 웹 서비스입니다. 복잡한 영양학 공식을 직관적인 UI로 풀어냈으며, "식단 성향 테스트"와 "영양 가이드 아티클" 기능을 더해 사용자가 지속 가능한 건강 관리를 할 수 있도록 설계했습니다.',
    tech: ['Next.js', 'TypeScript', 'SASS'],
    image: '/img/project_health.png',
    link: 'https://tandangeguard.com/',
    direction: 'right',
  },
  {
    id: 'harang',
    title: '하랑마케팅',
    subtitle: 'SEO-Driven Business Platform',
    description:
      '마케팅 에이전시의 전문성을 강조하기 위해 제작된 기업 공식 웹사이트입니다. 단순한 정보 전달을 넘어, 검색 엔진 최적화(SEO) 전략을 통해 "건설 마케팅", "전기 마케팅" 등 경쟁이 치열한 키워드에서 상위 노출을 달성했습니다. 직관적인 상담 신청 흐름(UX)을 구축하여 문의 전환율을 극대화했습니다.',
    tech: ['Next.js', 'TypeScript', 'SEO Strategy', 'GA4'],
    image: '/img/project_marketing.png',
    link: 'https://harangmarketing.com/',
    direction: 'right',
  },
  {
    id: 'armadillo',
    title: '아르마딜로',
    subtitle: 'Startup Zero to One',
    description:
      '공동 창업자 겸 개발자,마케터로 참여하여 서비스 기획부터 배포까지 전 과정을 주도한 온라인 PT 플랫폼입니다. 비대면 트레이닝의 한계를 극복하기 위해 UX 중심의 인터페이스를 설계했으며, 초기 스타트업의 빠른 실행력을 바탕으로 MVP를 성공적으로 런칭했습니다.',
    tech: ['Next.js', "TypeScript","Styled-components"],
    image: '/img/project_pt.png',
    link: 'https://armadillo-web.netlify.app/',
    direction: 'right',
  },
];
