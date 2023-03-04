import { ReactComponent as Bomb } from "../../src/assets/bomb.svg";
import { ReactComponent as Flag } from "../../src/assets/flag.svg";
import { ReactComponent as Question } from "../../src/assets/question.svg";
import { ReactComponent as Removed } from "../../src/assets/removed.svg";
import { BG_COLOR, CODE, COLOR } from "../contant";

export function createTable(row: number, col: number): number[][] {
  // 열리지 않은 상태를 가진 cell의 2차원 배열을 생성합니다.
  const table: number[][] = [];
  for (let i = 0; i < row; i++) {
    const arr: number[] = [];
    table.push(arr);
    for (let j = 0; j < col; j++) {
      arr.push(CODE.UNOPENED);
    }
  }

  // // row * col 길이의 배열을 생성합니다.
  // const numbers = Array(row * col)
  //   .fill(0)
  //   .map((_, i) => {
  //     return Number(i);
  //   });

  // // numbers 배열에서 지뢰를 심을 랜덤 숫자를 mine 만큼 뽑아서 mines 배열에 추가합니다.
  // const set = new Set<number>();
  // while (mine > set.size) {
  //   const random = Math.floor(Math.random() * numbers.length);
  //   set.add(random);
  // }
  // const mines = Array.from(set);

  // // mines 배열에 담긴 지뢰들을 2차원 배열에 심습니다.
  // for (let k = 0; k < mines.length; k++) {
  //   const ver = Math.floor(mines[k] / col);
  //   const hor = mines[k] % col;
  //   table[ver][hor] = CODE.UNOPENED_MINE;
  // }

  return table;
}

export function plantMine(
  row: number,
  col: number,
  currentTable: { row: number; col: number; mine: number },
  table: number[][]
): void {
  // row * col 길이의 배열을 생성합니다.
  const numbers = Array(currentTable.row * currentTable.col)
    .fill(0)
    .map((_, i) => {
      return Number(i);
    });

  // numbers 배열에서 지뢰를 심을 랜덤 숫자를 mine 만큼 뽑아서 mines 배열에 추가합니다.
  const set = new Set<number>();
  while (currentTable.mine > set.size) {
    const random = Math.floor(Math.random() * numbers.length);
    if (random !== row * currentTable.col + col) set.add(random);
  }
  const mines = Array.from(set);

  // mines 배열에 담긴 지뢰들을 2차원 배열에 심습니다.
  for (let k = 0; k < mines.length; k++) {
    const ver = Math.floor(mines[k] / currentTable.col);
    const hor = mines[k] % currentTable.col;
    table[ver][hor] = CODE.UNOPENED_MINE;
  }
}

export function openAroundCell(
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
    let count = 0;
    // cell 주변 8개 cell을 탐색
    for (let i = 0; i < 8; i++) {
      const ver = row + around[i][0];
      const hor = col + around[i][1];

      // table 범위를 벗어난 경우 continue
      if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length)
        continue;

      // 지뢰 cell인 경우 count++
      if (table[ver][hor] <= -4) {
        count++;
      }
    }
    return count;
  }

  function DFS(row: number, col: number) {
    // 닫힌 cell이 아닌 경우 return
    if (table[row][col] !== CODE.UNOPENED) {
      return;
    }

    // 닫힌 cell을 열고 주변 지뢰 갯수를 입력
    table[row][col] = countMine(row, col);

    // 주변 지뢰의 수가 0인 경우에만 주변 cell 탐색
    if (table[row][col] === CODE.OPENED) {
      for (let i = 0; i < 8; i++) {
        const ver = row + around[i][0];
        const hor = col + around[i][1];

        // table 범위를 벗어나면 continue
        if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length)
          continue;

        // 탐색
        DFS(ver, hor);
      }
    }
  }

  DFS(row, col);
}

// cell의 code 별로 보여주는 값을 받아오는 함수
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

    case CODE.REMOVED_MINE:
      return <Removed width={16} height={16} />;

    default:
      return code;
  }
}

// 배경색을 받아오는 함수
export function getBgColor(code: number) {
  if (code > 0) return BG_COLOR.OPENED;

  switch (code) {
    case CODE.UNOPENED:
    case CODE.FLAG:
    case CODE.QUESTION:
    case CODE.FLAG_MINE:
    case CODE.QUESTION_MINE:
    case CODE.UNOPENED_MINE:
      return BG_COLOR.UNOPENED;

    case CODE.OPENED:
      return BG_COLOR.OPENED;

    case CODE.OPENED_MINE:
    case CODE.REMOVED_MINE:
      return BG_COLOR.MINE;

    case CODE.CLICKED_MINE:
      return BG_COLOR.CLICKED;

    default:
      return BG_COLOR.UNOPENED;
  }
}

// 숫자의 색상을 받아오는 함수
export function getColor(code: number) {
  switch (code) {
    case 1:
      return COLOR.ONE;

    case 2:
      return COLOR.TWO;

    case 3:
      return COLOR.THREE;

    case 4:
      return COLOR.FOUR;

    case 5:
      return COLOR.FIVE;

    case 6:
      return COLOR.SIX;

    case 7:
      return COLOR.SEVEN;

    case 8:
      return COLOR.EIGHT;

    default:
      return COLOR.DEFAULT;
  }
}
