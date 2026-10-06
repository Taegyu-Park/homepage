import type { Lang } from './ui';

export interface Figure { src: string; alt: string; caption: string; }
export interface Section { heading: string; paragraphs: string[]; bullets?: string[]; figures?: Figure[]; }

export const research: Record<Lang, { title: string; status: string; lead: string; sections: Section[]; note: string }> = {
  ko: {
    title: '건물 일체형 PV 차양의 순에너지 최적화',
    status: '진행 중',
    lead: '움직이는 PV 차양(Kinetic BIPV)의 각도를 태양 고도에 맞춰 조절하면, 발전량을 늘리면서 냉난방 부하까지 줄일 수 있는지 EnergyPlus 시뮬레이션으로 살펴본 연구입니다.',
    sections: [
      {
        heading: '왜 이 질문인가',
        paragraphs: [
          '유리 커튼월 건물은 계속 늘고 있지만, 큰 유리 면적은 여름 냉방 부하와 겨울 난방 부하를 모두 키웁니다. 한편 건물 외피에 태양광 패널(BIPV)을 붙이면 발전은 할 수 있지만, 각도를 고정하면 일사 조건이 바뀌는 계절과 시간대마다 효율이 떨어집니다.',
          '그래서 PV 패널이 차양 역할을 겸하고, 각도를 움직일 수 있다면 어떨지를 질문으로 잡았습니다.',
        ],
      },
      {
        heading: '아이디어: Kinetic BIPV',
        paragraphs: [
          '창 바깥의 차양 위에 PV를 결합하고, 전동 액추에이터로 각도를 바꿉니다. 태양 고도각에 맞춰 패널을 세우면 일사와 패널이 직각에 가까워져 발전 효율이 높아지고, 동시에 창으로 들어오는 직달일사를 가려 줍니다.',
        ],
        figures: [
          { src: 'slide-10.png', alt: 'BIPV와 차양을 결합한 구조 개념도', caption: '차양(Shading) 위에 PV를 결합한 BIPV 구조' },
          { src: 'slide-13.png', alt: '태양 고도에 맞춰 PV 각도를 바꾸는 개념도', caption: '태양 고도각을 따라 PV 각도를 조절하는 개념' },
        ],
      },
      {
        heading: '어떻게 확인했나',
        paragraphs: [
          '2층 소형 사무소 건물(약 32 m × 18 m)을 EnergyPlus로 모델링하고, 광주 기상 데이터로 1년을 시뮬레이션했습니다. PV는 남향 외벽에만 설치했고, 온도에 따라 발전 효율이 변하는 Equivalent One-Diode 모델을 적용했습니다.',
          '비교를 위해 세 가지 경우를 나눴습니다.',
        ],
        bullets: ['Case 1: BIPV 없음', 'Case 2: 각도를 0°~90° 중 하나로 고정한 BIPV', 'Case 3: 태양 고도에 따라 각도를 바꾸는 Kinetic BIPV'],
        figures: [{ src: 'slide-24.png', alt: '세 가지 비교 케이스', caption: '비교한 세 가지 케이스' }],
      },
      {
        heading: '결과',
        paragraphs: [
          '고정 BIPV는 각도에 따라 냉난방 부하가 크게 달라지지 않았지만, Kinetic BIPV는 연간 PV 발전량이 가장 높았습니다. 발전량과 냉난방 전력을 합친 순에너지 사용량도 Kinetic이 가장 낮았습니다.',
          '이번 모델 기준으로, Kinetic BIPV는 다른 케이스보다 순에너지 사용량을 최소 약 53%, 최대 약 73% 줄이는 것으로 나타났습니다. 경제성 분석에서도 일반 BIPV보다 생애주기비용 면에서 유리했습니다.',
        ],
        figures: [
          { src: 'slide-25.png', alt: '케이스별 연간 냉난방 부하 비교', caption: '케이스별 연간 냉난방 부하' },
          { src: 'slide-28.png', alt: '케이스별 연간 PV 발전량 비교', caption: '케이스별 연간 PV 발전량' },
          { src: 'slide-31.png', alt: '케이스별 연간 순에너지 사용량', caption: '케이스별 순에너지 사용량 (HVAC 전력 − PV 발전)' },
        ],
      },
      {
        heading: '지금 하고 있는 것',
        paragraphs: [
          '지금까지의 제어는 태양 고도를 따라가는 규칙 기반이라, 발전을 극대화하는 데는 좋지만 차양 효과와 건물·패널의 열관성(몇 시간에 걸친 건물의 열 반응, 패널 온도에 따른 효율 저하)은 충분히 반영하지 못합니다. 여름에는 눕혀서 일사를 막고, 겨울에는 일사를 받아들이는 편이 나을 수도 있습니다.',
          '그래서 미래의 태양 위치와 시간대 정보를 함께 쓰는 시계열 예측 모델(TiDE)을 학습해, 순에너지를 최소화하는 각도를 예측하는 방법을 시도하고 있습니다.',
        ],
      },
    ],
    note: '수업 팀 프로젝트로 시작해 개인적으로 이어가고 있는 연구입니다. 위 결과는 시뮬레이션 기준이며, 실제 건물 실측으로 검증한 것은 아닙니다.',
  },
  en: {
    title: 'Net-energy optimization of a building-integrated PV shade',
    status: 'In progress',
    lead: 'An EnergyPlus simulation study asking whether tilting a PV shade to follow the sun can raise power generation and reduce heating and cooling loads at the same time.',
    sections: [
      {
        heading: 'Why this question',
        paragraphs: [
          'Glass curtain wall buildings keep increasing, but large glazed areas raise both summer cooling and winter heating loads. Attaching photovoltaic panels to the facade (BIPV) generates power, but a fixed angle loses efficiency as the sun changes across seasons and hours.',
          'So the question became: what if the PV panel also works as a shade, and its angle can move?',
        ],
      },
      {
        heading: 'The idea: Kinetic BIPV',
        paragraphs: [
          'PV is combined with a shading element outside the window, and an electric actuator changes its angle. Tilting the panel with the sun altitude keeps it closer to perpendicular to the incoming sunlight, which raises efficiency while also blocking direct sun from the window.',
        ],
        figures: [
          { src: 'slide-10.png', alt: 'Diagram of BIPV combined with a shading element', caption: 'BIPV structure: PV combined with a shading element' },
          { src: 'slide-13.png', alt: 'Diagram of PV angle following sun altitude', caption: 'Adjusting the PV angle to follow the sun altitude' },
        ],
      },
      {
        heading: 'How it was checked',
        paragraphs: [
          'A two-story small office building (about 32 m × 18 m) was modeled in EnergyPlus and simulated for a full year with Gwangju weather data. PV was installed on the south facade only, using the Equivalent One-Diode model so efficiency changes with temperature.',
          'Three cases were compared.',
        ],
        bullets: ['Case 1: no BIPV', 'Case 2: BIPV fixed at one angle between 0° and 90°', 'Case 3: Kinetic BIPV that changes angle with sun altitude'],
        figures: [{ src: 'slide-24.png', alt: 'The three compared cases', caption: 'The three compared cases' }],
      },
      {
        heading: 'Results',
        paragraphs: [
          'Heating and cooling loads did not change much between fixed angles, but the Kinetic BIPV produced the most PV electricity per year. Net energy use, which combines HVAC electricity and PV generation, was also lowest for Kinetic.',
          'In this model, Kinetic BIPV reduced net energy use by at least about 53% and up to about 73% compared with the other cases. An economic analysis also favored it over fixed BIPV in life-cycle cost.',
        ],
        figures: [
          { src: 'slide-25.png', alt: 'Annual heating and cooling load by case', caption: 'Annual heating and cooling load by case' },
          { src: 'slide-28.png', alt: 'Annual PV generation by case', caption: 'Annual PV generation by case' },
          { src: 'slide-31.png', alt: 'Annual net energy use by case', caption: 'Net energy use by case (HVAC electricity − PV generation)' },
        ],
      },
      {
        heading: "What I'm working on now",
        paragraphs: [
          'The control so far is a rule that follows the sun altitude. It is good at maximizing generation but does not fully capture the shading effect or thermal inertia (how a building responds over several hours, and how panel temperature lowers efficiency). In summer it may be better to lay the panel flat to block sun, and in winter to let sunlight in.',
          'So I am training a time series forecasting model (TiDE) that uses future sun position and time-of-day information to predict the angle that minimizes net energy.',
        ],
      },
    ],
    note: 'This started as a team course project and I am continuing it on my own. The results are from simulation and have not been validated against measurements of a real building.',
  },
};
