export const CODE = {
  OPENED: 0, // 열려 있음, 지뢰 X
  UNOPENED: -1, // 닫힘, 지뢰 X
  FLAG: -2, // 깃발, 지뢰 X
  QUESTION: -3, // 물음표, 지뢰 X
  UNOPENED_MINE: -4, // 닫힘, 지뢰
  FLAG_MINE: -5, // 깃발, 지뢰 O
  QUESTION_MINE: -6, // 물음표, 지뢰 O
  OPENED_MINE: -7, // 열려 있음, 지뢰 O
  CLICKED_MINE: -8, // UNOPENED_MINE 상태에서 마지막으로 누른 지뢰
} as const;
