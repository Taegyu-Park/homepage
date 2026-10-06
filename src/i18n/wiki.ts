import type { Lang } from './ui';

export const wikiText: Record<Lang, {
  title: string; lead: string; notice: string; search: string; all: string; reset: string;
  hint: string; connections: string; status: Record<string, string>; types: Record<string, string>;
  listTitle: string; stats: (n: number, l: number) => string; updated: string; empty: string;
}> = {
  ko: {
    title: '위키 그래프',
    lead: '공부하면서 정리한 ML 논문·모델·개념 노트의 연결 지도입니다. 점은 노트 한 장, 선은 노트 사이의 링크입니다.',
    notice: '노트는 AI 도구의 도움을 받아 정리한 것이고, "초안"은 아직 제가 꼼꼼히 검토하기 전 상태입니다. 노트 본문은 한국어입니다.',
    search: '제목·태그 검색',
    all: '전체',
    reset: '보기 초기화',
    hint: '점을 누르면 설명과 연결된 노트가 보입니다. 드래그로 이동, 스크롤로 확대·축소할 수 있습니다.',
    connections: '연결된 노트',
    status: { draft: '초안', reviewed: '검토함' },
    types: { paper: '논문', concept: '개념', model: '모델', moc: '허브', dataset: '데이터셋' },
    listTitle: '목록으로 보기',
    stats: (n, l) => `노트 ${n}개 · 링크 ${l}개`,
    updated: '기준일',
    empty: '일치하는 노트가 없습니다.',
  },
  en: {
    title: 'Wiki Graph',
    lead: 'A map of my notes on ML papers, models and concepts. Each dot is a note and each line is a link between notes.',
    notice: 'The notes were organized with the help of AI tools, and "draft" means I have not carefully reviewed it yet. The note text itself is in Korean.',
    search: 'Search titles and tags',
    all: 'All',
    reset: 'Reset view',
    hint: 'Click a dot to see its summary and linked notes. Drag to pan, scroll to zoom.',
    connections: 'Linked notes',
    status: { draft: 'Draft', reviewed: 'Reviewed' },
    types: { paper: 'Paper', concept: 'Concept', model: 'Model', moc: 'Hub', dataset: 'Dataset' },
    listTitle: 'Browse as a list',
    stats: (n, l) => `${n} notes · ${l} links`,
    updated: 'As of',
    empty: 'No matching notes.',
  },
};
