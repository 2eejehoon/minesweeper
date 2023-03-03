import { ReactComponent as Bomb } from "../../src/assets/bomb.svg";
import { ReactComponent as Flag } from "../../src/assets/flag.svg";
import { ReactComponent as Question } from "../../src/assets/question.svg";
import { CODE } from "../contant";

export function plantMine(row: number, col: number, mine: number): number[][] {
  // 열리지 않은 상태를 가진 cell의 2차원 배열을 생성합니다.
  const table: number[][] = [];
  for (let i = 0; i < row; i++) {
    const arr: number[] = [];
    table.push(arr);
    for (let j = 0; j < col; j++) {
      arr.push(CODE.UNOPENED);
    }
  }

  // row * col 길이의 배열을 생성합니다.
  const numbers = Array(row * col)
    .fill(0)
    .map((_, i) => {
      return Number(i);
    });

  // numbers 배열에서 지뢰를 심을 랜덤 숫자를 mine 만큼 뽑아서 mines 배열에 추가합니다.
  const set = new Set<number>();
  while (mine > set.size) {
    const random = Math.floor(Math.random() * numbers.length);
    set.add(random);
  }
  const mines = Array.from(set);

  // mines 배열에 담긴 지뢰들을 2차원 배열에 심습니다.
  for (let k = 0; k < mines.length; k++) {
    const ver = Math.floor(mines[k] / col);
    const hor = mines[k] % col;
    table[ver][hor] = CODE.UNOPENED_MINE;
  }

  return table;
}

export function openArounCell(
  row: number,
  col: number,
  table: number[][]
): void {
  const around = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  function countMine(row: number, col: number): number {
    // 지뢰 카운트
    let count = 0;
    for (let i = 0; i < 8; i++) {
      const ver = row + around[i][0];
      const hor = col + around[i][1];

      // table 범위 밖인 경우 continue
      if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length)
        continue;
      // code가 -4 이하인 경우 지뢰가 있는 cell
      else if (table[ver][hor] <= -4) {
        count++;
      }
    }
    return count;
  }

  function DFS(row: number, col: number) {
    if (table[row][col] !== CODE.UNOPENED) {
      return;
    }

    table[row][col] = countMine(row, col);

    if (table[row][col] === CODE.OPENED) {
      for (let i = 0; i < 8; i++) {
        const ver = row + around[i][0];
        const hor = col + around[i][1];

        if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length)
          continue;

        DFS(ver, hor);
      }
    }
  }

  DFS(row, col);
}

export function getText(code: number) {
  if (code > 0) return code;

  switch (code) {
    case CODE.OPENED:
    case CODE.UNOPENED:
    case CODE.UNOPENED_MINE:
      return "";
    case CODE.OPENED_MINE:
    case CODE.CLICKED_MINE:
      return <Bomb width={20} height={20} />;
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return <Flag width={25} height={26} />;
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return <Question width={20} height={18} />;
    default:
      return code;
  }
}

export function getStyle(code: number) {
  if (code > 0) return "darkgray";

  switch (code) {
    case CODE.UNOPENED:
    case CODE.FLAG:
    case CODE.QUESTION:
    case CODE.FLAG_MINE:
    case CODE.QUESTION_MINE:
    case CODE.UNOPENED_MINE:
      return "lightgrey";
    case CODE.OPENED:
      return "darkgray";
    case CODE.OPENED_MINE:
      return "pink";
    case CODE.CLICKED_MINE:
      return "red";
    default:
      return "lightgrey";
  }
}
