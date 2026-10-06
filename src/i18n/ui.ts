export const languages = ['ko', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'ko';

export const ui = {
  ko: {
    siteTitle: '박태규',
    tagline: '건물 에너지 시스템을 시뮬레이션과 데이터·AI로 공부하는 학부생',
    'nav.home': '홈',
    'nav.research': '연구',
    'nav.wiki': '위키 그래프',
    'nav.projects': '프로젝트',
    'nav.about': '소개',
    'footer.note': '배우면서 만들고 있는 중입니다.',
    'lang.switch': 'English',
    placeholder: '내용을 준비 중입니다.',
  },
  en: {
    siteTitle: 'Taegyu Park',
    tagline: 'Undergraduate studying building energy systems through simulation, data and AI',
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.wiki': 'Wiki Graph',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'footer.note': 'Still learning, still building.',
    'lang.switch': '한국어',
    placeholder: 'Content coming soon.',
  },
} as const;

export type UiKey = keyof (typeof ui)['ko'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

export function url(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}/${path}`;
}

export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
}

export const pages = ['', 'research', 'wiki', 'projects', 'about'] as const;
