// 발표자료의 시뮬레이션 결과 그래프(부하, PV 발전량, 순에너지)에서 옮긴 값. 단위: MWh/년.
// heating/cooling: 냉난방 부하, pv: PV 연간 발전량, net: 냉난방 전력에서 PV 발전을 뺀 순 전력 사용량.
export interface CaseResult {
  id: string;
  heating: number;
  cooling: number;
  pv: number;
  net: number;
}

export const bipvResults: CaseResult[] = [
  { id: 'base', heating: 44.3, cooling: 93.8, pv: 0, net: 49.0 },
  { id: 'f0', heating: 65.7, cooling: 75.3, pv: 22.93, net: 28.5 },
  { id: 'f10', heating: 65.7, cooling: 75.5, pv: 23.34, net: 28.1 },
  { id: 'f20', heating: 65.3, cooling: 76.4, pv: 22.98, net: 28.6 },
  { id: 'f30', heating: 64.9, cooling: 77.0, pv: 23.48, net: 28.2 },
  { id: 'f40', heating: 64.4, cooling: 78.0, pv: 23.41, net: 28.3 },
  { id: 'f50', heating: 64.1, cooling: 78.4, pv: 23.01, net: 28.7 },
  { id: 'f60', heating: 63.4, cooling: 79.1, pv: 22.45, net: 29.3 },
  { id: 'f70', heating: 62.4, cooling: 79.5, pv: 21.48, net: 30.0 },
  { id: 'f80', heating: 60.3, cooling: 80.6, pv: 20.05, net: 30.9 },
  { id: 'f90', heating: 57.5, cooling: 81.3, pv: 18.18, net: 31.9 },
  { id: 'kinetic', heating: 45.6, cooling: 91.4, pv: 35.47, net: 13.3 },
];
