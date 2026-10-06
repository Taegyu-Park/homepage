import type { Lang } from './ui';

export interface Project {
  name: string;
  summary: string;
  tags: string[];
  repo: string;
  live?: string;
}

interface Content {
  home: {
    hello: string;
    intro: string;
    interestsTitle: string;
    interests: { title: string; body: string }[];
    featuredTitle: string;
    featured: { title: string; status: string; body: string; cta: string };
    wiki: { title: string; body: string; cta: string };
    projectsTitle: string;
    allProjects: string;
  };
  projects: { title: string; lead: string; repoLabel: string; liveLabel: string; items: Project[] };
  about: {
    title: string;
    paragraphs: string[];
    learningTitle: string;
    learning: string[];
    toolsTitle: string;
    tools: string[];
    linksTitle: string;
  };
}

export const content: Record<Lang, Content> = {
  ko: {
    home: {
      hello: '안녕하세요, 박태규입니다.',
      intro:
        '건물이 에너지를 어떻게 쓰고 만드는지에 관심이 있는 학부생입니다. 시뮬레이션과 실측 데이터, 머신러닝을 함께 공부하면서, 배운 것과 해 본 것을 이곳에 정리합니다.',
      interestsTitle: '관심 분야',
      interests: [
        { title: '건물 에너지 시뮬레이션', body: 'EnergyPlus로 건물의 냉난방 부하와 재생에너지 발전을 함께 모델링합니다.' },
        { title: '지열 히트펌프(GSHP)', body: '순환 유량 등 운전 조건이 효율과 엑서지에 미치는 영향을 분석합니다.' },
        { title: '시계열 예측과 머신러닝', body: '논문을 읽고 개념을 정리하며, 건물 에너지 문제에 적용할 방법을 찾고 있습니다.' },
      ],
      featuredTitle: '대표 연구',
      featured: {
        title: '건물 일체형 PV 차양의 순에너지 최적화',
        status: '진행 중',
        body: '움직이는 PV 패널이 발전과 동시에 창호 차양 역할을 할 때, 각도를 어떻게 제어해야 발전량과 냉난방 부하를 함께 최적화할 수 있는지 연구하고 있습니다.',
        cta: '자세히 보기',
      },
      wiki: {
        title: '공부한 논문과 개념의 연결 지도',
        body: '읽은 ML 논문과 개념이 서로 어떻게 이어지는지 그래프로 볼 수 있습니다.',
        cta: '그래프 보기',
      },
      projectsTitle: '작은 프로젝트',
      allProjects: '전체 보기',
    },
    projects: {
      title: '프로젝트',
      lead: '수업과 개인 공부 중에 만들어 본 것들입니다.',
      repoLabel: '코드 보기',
      liveLabel: '사이트 열기',
      items: [
        {
          name: 'GSHP 순환 유량과 엑서지 분석',
          summary: '지중열원 히트펌프에서 지중 열교환기 순환 유체의 유량이 바뀔 때 COP와 엑서지 효율이 어떻게 달라지는지 파이썬으로 모델링하고 분석했습니다.',
          tags: ['Python', 'GSHP', '엑서지'],
          repo: 'https://github.com/Taegyu-Park/gshp-volumatric-flow-rate',
        },
        {
          name: '실측 데이터 분석 (Studenthuset GSHP)',
          summary: '스웨덴 학생회관 건물의 지열 히트펌프 1년 실측 데이터를, 측정 환경과 맥락을 먼저 이해한 뒤 분석하고 시각화한 수업 프로젝트입니다.',
          tags: ['Python', '데이터 분석', '시각화'],
          repo: 'https://github.com/Taegyu-Park/dataanalysis',
        },
        {
          name: '데일리 뉴스 다이제스트',
          summary: '매일 아침 RSS에서 전날 뉴스를 모아 분야별로 요약해 GitHub Pages에 자동 발행합니다. 자동화 파이프라인을 직접 돌려 보며 배운 실험입니다.',
          tags: ['JavaScript', 'GitHub Actions', 'LLM'],
          repo: 'https://github.com/Taegyu-Park/news-digest',
          live: 'https://taegyu-park.github.io/news-digest/',
        },
      ],
    },
    about: {
      title: '소개',
      paragraphs: [
        '건물에너지를 공부하는 학부생입니다. 아직 배우는 단계라서, 완성된 결과보다 무엇을 궁금해했고 어떻게 풀어 가고 있는지를 기록하는 데 더 신경 쓰고 있습니다.',
        '시뮬레이션으로 시스템의 거동을 이해하고, 실측 데이터로 확인하고, 머신러닝으로 예측과 제어를 시도해 보는 흐름에 흥미가 있습니다.',
      ],
      learningTitle: '지금 배우고 있는 것',
      learning: ['건물 에너지 시뮬레이션 (EnergyPlus)', '지열 히트펌프와 엑서지 분석', '시계열 예측 모델 (TiDE 등)', '데이터 분석과 시각화'],
      toolsTitle: '사용해 본 도구',
      tools: ['Python', 'EnergyPlus', 'PyTorch', 'Git / GitHub', 'Obsidian'],
      linksTitle: '링크',
    },
  },
  en: {
    home: {
      hello: "Hi, I'm Taegyu Park.",
      intro:
        'I am an undergraduate interested in how buildings use and produce energy. I study simulation, measured data and machine learning together, and I write down what I learn and try here.',
      interestsTitle: 'Interests',
      interests: [
        { title: 'Building energy simulation', body: 'Modeling heating and cooling loads together with on-site renewable generation in EnergyPlus.' },
        { title: 'Ground source heat pumps (GSHP)', body: 'Analyzing how operating conditions such as circulation flow rate affect efficiency and exergy.' },
        { title: 'Time series forecasting and ML', body: 'Reading papers, organizing concepts, and looking for methods that fit building energy problems.' },
      ],
      featuredTitle: 'Featured research',
      featured: {
        title: 'Net-energy optimization of a building-integrated PV shade',
        status: 'In progress',
        body: 'When a movable PV panel also works as a window shade, how should its angle be controlled to optimize power generation and heating and cooling loads together? That is what I am working on.',
        cta: 'Read more',
      },
      wiki: {
        title: 'A map of the papers and concepts I study',
        body: 'Explore how the ML papers and concepts I have read connect to each other, as a graph.',
        cta: 'Open the graph',
      },
      projectsTitle: 'Small projects',
      allProjects: 'View all',
    },
    projects: {
      title: 'Projects',
      lead: 'Things I built during coursework and self-study.',
      repoLabel: 'View code',
      liveLabel: 'Open site',
      items: [
        {
          name: 'GSHP flow rate and exergy analysis',
          summary: 'Modeled and analyzed in Python how COP and exergy efficiency of a ground source heat pump change with the circulation flow rate in the ground heat exchanger.',
          tags: ['Python', 'GSHP', 'Exergy'],
          repo: 'https://github.com/Taegyu-Park/gshp-volumatric-flow-rate',
        },
        {
          name: 'Measured data analysis (Studenthuset GSHP)',
          summary: 'A course project analyzing and visualizing one year of measured data from a Swedish campus building heat pump, starting from understanding how and why the data was collected.',
          tags: ['Python', 'Data analysis', 'Visualization'],
          repo: 'https://github.com/Taegyu-Park/dataanalysis',
        },
        {
          name: 'Daily News Digest',
          summary: 'Collects the previous day\'s news from RSS each morning, summarizes it by topic, and publishes it to GitHub Pages automatically. An experiment to learn how automation pipelines work.',
          tags: ['JavaScript', 'GitHub Actions', 'LLM'],
          repo: 'https://github.com/Taegyu-Park/news-digest',
          live: 'https://taegyu-park.github.io/news-digest/',
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am an undergraduate studying building energy. Since I am still learning, I care more about recording what I was curious about and how I am working through it than about showing finished results.',
        'I am interested in the loop of understanding system behavior through simulation, checking it against measured data, and trying prediction and control with machine learning.',
      ],
      learningTitle: 'Currently learning',
      learning: ['Building energy simulation (EnergyPlus)', 'Ground source heat pumps and exergy analysis', 'Time series forecasting models (TiDE, etc.)', 'Data analysis and visualization'],
      toolsTitle: 'Tools I have used',
      tools: ['Python', 'EnergyPlus', 'PyTorch', 'Git / GitHub', 'Obsidian'],
      linksTitle: 'Links',
    },
  },
};
