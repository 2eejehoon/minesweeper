export const CODE = {
  UNOPENED: -1, // 열리지 않은 cell
  QUESTION: -2, // 물음표
  FLAG: -3, // 깃발
  QUESTION_MINE: -4, // 지뢰가 심어진 cell에 물음표
  FLAG_MINE: -5, // 지뢰가 심어진 cell에 깃발
  CLICKED_MINE: -6, // 지뢰가 심어진 cell을 클릭
  MINE: -7, // 지뢰가 심어져 있는 cell
  OPENED: 0, // 열린 cell
} as const;
