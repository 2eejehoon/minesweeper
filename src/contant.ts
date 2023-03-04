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
  WIN: "WIN", // 승리
  LOSE: "LOSE", // 패배
  PLAY: "PLAY", // 게임중
  READY: "READY", // 게임 시작 전
} as const;

export const DIFFICULTY = {
  BEGINNER: { height: 8, width: 8, mine: 8 },
  INTERMEDIATE: { height: 16, width: 16, mine: 32 },
  EXPERT: { height: 16, width: 32, mine: 64 },
} as const;

export const BG_COLOR = {
  OPENED: "tomato",
  UNOPENED: "gray",
  FLAG: "yellow",
  QUESTION: "lime",
  MINE: "pink",
  CLICKED: "red",
} as const;

export const COLOR = {
  ONE: "blue",
  TWO: "green",
  THREE: "skyblue",
  FOUR: "yellow",
  FIVE: "brown",
  SIX: "pink",
  SEVEN: "navy",
  EIGHT: "purple",
  DEFAULT: "black",
} as const;
