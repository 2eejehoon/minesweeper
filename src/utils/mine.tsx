import { ReactComponent as Bomb } from "../../src/assets/bomb.svg";
import { ReactComponent as Flag } from "../../src/assets/flag.svg";
import { ReactComponent as Question } from "../../src/assets/question.svg";

export const CODE = {
  UNOPENED: -1, // 열리지 않은 cell
  QUESTION: -2, // 물음표src/
  FLAG: -3, // 깃발
  QUESTION_MINE: -4, // 지뢰가 심어진 cell에 물음표
  FLAG_MINE: -5, // 지뢰가 심어진 cell에 깃발
  CLICKED_MINE: -6, // 지뢰가 심어진 cell을 클릭
  MINE: -7, // 지뢰가 심어져 있는 cell
  OPENED: 0, // 열린 cell
} as const;

export function plantMine(row: number, col: number, mine: number): number[][] {
  // row * col 길이의 배열을 생성합니다.
  const candidate = Array(row * col)
    .fill(0)
    .map((_, i) => {
      return Number(i);
    });

  // candidate 배열에서 지뢰를 심을 랜덤 숫자를 mine 만큼 뽑아서 shuffle 배열에 추가합니다.
  const shuffle: number[] = [];
  while (candidate.length > row * col - mine) {
    const chosen: number = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  // 열리지 않은 상태의 cell이 담긴 2차원 배열을 생성합니다.
  const data: number[][] = [];
  for (let i = 0; i < row; i++) {
    const arr: number[] = [];
    data.push(arr);
    for (let j = 0; j < col; j++) {
      arr.push(CODE.UNOPENED);
    }
  }

  // shuffle 배열에 담긴 지뢰들을 2차원 배열에 심습니다.
  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / col);
    const hor = shuffle[k] % col;
    data[ver][hor] = CODE.MINE;
  }

  return data;
}

export function text(code: number) {
  switch (code) {
    case CODE.UNOPENED:
    case CODE.MINE:
      return "";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return <Question width={20} height={20} />;
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return <Flag width={20} height={20} />;
    case CODE.CLICKED_MINE:
      return <Bomb width={20} height={20} />;
    case CODE.OPENED:
      return 1;
    default:
      return code;
  }
}

export function style(code: number) {
  switch (code) {
    case CODE.UNOPENED:
    case CODE.QUESTION:
    case CODE.FLAG:
    case CODE.MINE:
    case CODE.QUESTION_MINE:
    case CODE.FLAG_MINE:
    default:
      return "lightgrey";
    case CODE.OPENED:
    case CODE.CLICKED_MINE:
      return "pink";
  }
}
