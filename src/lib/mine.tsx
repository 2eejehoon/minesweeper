import { ReactComponent as Bomb } from "../../src/assets/bomb.svg";
import { ReactComponent as Flag } from "../../src/assets/flag.svg";
import { ReactComponent as Question } from "../../src/assets/question.svg";
import { ReactComponent as Removed } from "../../src/assets/removed.svg";
import { BG_COLOR, CODE, COLOR } from "../contant";

export function createTable(height: number, width: number): number[][] {
  // 닫힌 상태를 가진 cell의 2차원 배열을 생성합니다.
  const table: number[][] = [];
  for (let i = 0; i < height; i++) {
    const arr: number[] = [];
    table.push(arr);
    for (let j = 0; j < width; j++) {
      arr.push(CODE.UNOPENED);
    }
  }

  return table;
}

export function plantMine(
  row: number,
  col: number,
  currentTable: { height: number; width: number; mine: number },
  table: number[][]
): void {
  // row * col 길이의 배열을 생성
  const numbers = Array(currentTable.height * currentTable.width)
    .fill(0)
    .map((_, i) => {
      return Number(i);
    });

  // numbers 배열에서 지뢰를 심을 랜덤 숫자를 mine 만큼 뽑아서 mines 배열에 추가
  const set = new Set<number>();
  while (currentTable.mine > set.size) {
    const random = Math.floor(Math.random() * numbers.length);

    // 현재 클릭한 cell이 아닐 경우에만 지뢰를 심기
    if (random !== row * currentTable.width + col) {
      set.add(random);
    }
  }
  const mines = Array.from(set);

  // mines 배열에 담긴 지뢰들을 2차원 배열에 심기
  for (let k = 0; k < mines.length; k++) {
    const ver = Math.floor(mines[k] / currentTable.width);
    const hor = mines[k] % currentTable.width;
    table[ver][hor] = CODE.UNOPENED_MINE;
  }
}

export function openAroundCell(row: number, col: number, table: number[][]): number {
  let open = 0;
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

  // 클릭한 cell의 행,열 데이터를 담은 queue
  const queue: [number, number][] = [[row, col]];

  while (queue.length > 0) {
    const currentCell = queue.shift();
    const [row, col] = currentCell as [number, number];

    // 닫힌 cell이 아닌 경우 continue
    if (table[row][col] !== CODE.UNOPENED) continue;

    // 닫힌 cell을 열고 주변 지뢰 갯수를 입력
    open++;
    table[row][col] = countMine(row, col);

    // 주변에 지뢰가 없는 cell인 경우 주변 cell 탐색
    if (table[row][col] === CODE.OPENED) {
      continue;
    }

    for (let i = 0; i < 8; i++) {
      const ver = row + around[i][0];
      const hor = col + around[i][1];

      // table 범위를 벗어나면 continue
      if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length) continue;

      // queue에 추가
      queue.push([ver, hor]);
    }
  }

  function countMine(row: number, col: number): number {
    let count = 0;

    // cell 주변 8개 cell을 탐색
    for (let i = 0; i < 8; i++) {
      const ver = row + around[i][0];
      const hor = col + around[i][1];

      // table 범위를 벗어난 경우 continue
      if (ver < 0 || hor < 0 || ver >= table.length || col >= table[0].length) {
        continue;
      }

      // 지뢰 cell인 경우 count++
      if (table[ver][hor] <= -4) {
        count++;
      }
    }
    return count;
  }

  return open;
}

// 게임이 끝나면 지뢰를 오픈
export function showMine(row: number, col: number, table: number[][]) {
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      // 닫힌 지뢰 -> 열린 지뢰
      if (table[i][j] === CODE.UNOPENED_MINE) {
        table[i][j] = CODE.OPENED_MINE;
      }
      // 깃발 꽂힌 지뢰 -> 제거된 지뢰
      if (table[i][j] === CODE.FLAG_MINE) {
        table[i][j] = CODE.REMOVED_MINE;
      }
    }
  }
  // 열린 지뢰 -> 클릭한 지뢰
  table[row][col] = CODE.CLICKED_MINE;
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
      return <Bomb width={18} height={18} />;

    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return <Flag width={25} height={26} />;

    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return <Question width={20} height={16} />;

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
    case CODE.UNOPENED_MINE:
      return BG_COLOR.UNOPENED;

    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return BG_COLOR.FLAG;

    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return BG_COLOR.QUESTION;

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
