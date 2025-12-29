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
    overview: '대규모 키워드 데이터 처리의 비효율을 기술로 해결한 자동화 솔루션',
    features: [
      'Electron 기반 데스크톱 앱 실행 환경 구축',
      'Puppeteer를 활용한 동적 웹페이지 정밀 크롤링',
      'Google Sheets API 실시간 양방향 데이터 동기화',
      '키워드 누락/오류 0%를 위한 이중 검증 로직'
    ],
    troubleshooting: [
      {
        title: '동적 페이지 로딩 대기 문제',
        description: '단순 타임아웃 대신 DOM 요소의 출현을 감지하는 옵저버 패턴을 적용하여 크롤링 속도를 30% 단축했습니다.'
      },
      {
        title: 'API 요청 제한(Rate Limit) 해결',
        description: '요청 큐(Queue) 시스템을 도입하여 구글 API 허용량 내에서 안정적으로 대용량 데이터를 처리하도록 최적화했습니다.'
      }
    ],
    learned: [
      '데스크톱 앱 환경에서의 프로세스 메모리 관리 중요성',
      '외부 API 연동 시 예외 처리 및 안정성 확보 전략'
    ]
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
    overview: '복잡한 영양학 공식을 누구나 쉽게 사용할 수 있는 UX로 풀어낸 건강 서비스',
    features: [
      '해리스-베네딕트 공식 기반 기초대사량/활동대사량 자동 계산',
      '사용자 목적(다이어트/유지/증량)에 따른 탄단지 비율 커스텀 추천',
      '직관적인 결과 그래프 및 식단 가이드 제공',
      '모바일 퍼스트 반응형 디자인'
    ],
    troubleshooting: [
      {
        title: '복잡한 수치 계산 로직 관리',
        description: '계산 로직을 별도의 훅(Hook)으로 분리하고 유닛 테스트를 도입하여 계산 정확도를 100% 검증했습니다.'
      }
    ],
    learned: [
      '사용자 관점에서의 복잡한 데이터 시각화 방법',
      'SEO 최적화를 통한 유기적 트래픽 유입 경험'
    ]
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
    overview: '기술적 SEO와 마케팅 전략이 결합된 고효율 기업 웹사이트',
    features: [
      'Next.js SSR을 활용한 검색 엔진 최적화(SEO) 극대화',
      '고객 행동 데이터(GA4) 기반의 UX/UI 지속 개선',
      '문의 전환율을 높이는 사용자 동선(User Flow) 설계',
      '관리자가 쉽게 콘텐츠를 수정할 수 있는 구조'
    ],
    troubleshooting: [
      {
        title: '검색 엔진 노출 지연 문제',
        description: 'sitemap.xml 및 robots.txt의 정교한 설정과 메타 태그 최적화를 통해 구글/네이버 검색 노출을 앞당겼습니다.'
      }
    ],
    learned: [
      '비즈니스 목표 달성을 위한 웹 기술의 활용법',
      '데이터 기반의 의사결정 및 성과 측정 프로세스'
    ]
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
    overview: '아이디어에서 MVP 런칭까지, 스타트업의 전 과정을 경험한 플랫폼 프로젝트',
    features: [
      '트레이너와 회원을 연결하는 매칭 및 스케줄링 시스템',
      '운동 일지 및 피드백 공유 기능',
      '결제 시스템 연동 및 회원권 관리',
      '실시간 채팅 및 알림 서비스'
    ],
    troubleshooting: [
      {
        title: '촉박한 개발 일정과 리소스 부족',
        description: 'Agile 방법론을 도입하여 핵심 기능 위주의 MVP 범위를 정의하고, 매주 스프린트를 통해 빠르게 결과물을 도출했습니다.'
      }
    ],
    learned: [
      '스타트업 환경에서의 풀스택 개발 및 기획 역량',
      '사용자 피드백을 반영한 빠른 제품 개선 사이클'
    ]
  },
];
