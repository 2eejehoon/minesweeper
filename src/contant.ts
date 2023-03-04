export const CODE = {
  OPENED: 0, // 열려 있음, 지뢰 X
  UNOPENED: -1, // 닫힘, 지뢰 X
  FLAG: -2, // 깃발, 지뢰 X
  QUESTION: -3, // 물음표, 지뢰 X
  UNOPENED_MINE: -4, // 닫힘, 지뢰 O
  FLAG_MINE: -5, // 깃발, 지뢰 O
  QUESTION_MINE: -6, // 물음표, 지뢰 O
  OPENED_MINE: -7, // 열려 있음, 지뢰 O
  CLICKED_MINE: -8, // 클릭한 지뢰
  REMOVED_MINE: -9, // 제거한 지뢰
} as const;

export const STATE = {
  WIN: "WIN",
  LOSE: "LOSE",
  PLAY: "PLAY",
  READY: "READY",
} as const;

export const BG_COLOR = {
  OPENED: "tomato",
  UNOPENED: "gray",
  MINE: "pink",
  CLICKED: "red",
} as const;

export const COLOR = {
  ONE: "blue",
  TWO: "green",
  THREE: "purple",
  FOUR: "navy",
  FIVE: "brown",
  SIX: "pink",
  SEVEN: "yellow",
  EIGHT: "skyblue",
  DEFAULT: "black",
} as const;
