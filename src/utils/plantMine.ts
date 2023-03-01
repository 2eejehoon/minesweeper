import { CODE } from "./constant";

export default function plantMine(row: number, col: number, mine: number) {
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
