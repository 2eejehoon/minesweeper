# [클라썸] 지뢰찾기 구현하기

## 실행방법

```
npm install
npm run start
```

## 구현 사항

- 첫번째 빈칸을 열었을 경우에는 지뢰가 터지면 안됩니다 -> 구현 완료
- 타이머 (**추가 과제**) -> 구현 완료
- 난이도 변경이 가능해야 합니다 -> 구현 완료
  - Beginner (8X8), Intermediate (16X16), Expert (32X16)
  - Custom (가로, 세로, 지뢰 수 조정 가능)
  - 50 x 50, 지뢰 10개 플레이가 가능해야함
- 오른쪽 클릭 깃발 기능 (**추가 과제**) -> 구현 완료

## 필수 사항

- React, Redux 사용 -> 구현 완료
- git사용 (반드시 개발 history를 남겨주세요) -> 구현 완료
- Typescript 사용 -> 구현 완료

## 권장 사항

- 주석을 통한 주요 코드 설명 -> 구현 완료
- Redux-toolkit 사용 -> 구현 완료

## 추가 구현 사항 (가산점)

추가 과제는 필수 구현 사항은 아니지만 구현하시면 가산점이 있습니다!

- 게임 타이머 -> 구현 완료
- 게임 Custom (가로, 세로, 지뢰 수 조정 가능) 기능 -> 구현 완료
- 게임 UI/UX는 자유롭게 변경하셔도 됩니다. -> Styled-Components를 사용해서 스타일링 진행했습니다.
- 오른쪽 클릭 깃발 기능 -> 구현 완료

# 전달 사항

## 요구 사항 관련 내용

1. 첫번째 빈칸을 열었을 경우에는 지뢰가 터지면 안됩니다.

- 해당 요구사항은 게임의 state를 WIN, LOSE, PLAY, READY 상태로 구분하고 READY 상태에서 클릭을 할 경우를 첫번째 클릭으로 설정하고 작업을 진행했습니다.
- setGame을 통해 게임을 READY 상태가 될 때 입력 받은 높이와 넓이의 값으로 2차원 배열을 생성해서 지뢰 보드를 만듭니다.
- 이후 첫번째 클릭을 하면 'firstClick' reducer를 통해서 클릭한 cell의 row, col 값이 mineSlice로 전달되고 미리 작성한 plantMine 함수를 호출하여 미리 생성한 2차원 배열에 지뢰를 심습니다.
- 이 때 받아온 row, col 값으로 현재 클릭한 위치를 구분하고, 현재 클릭한 cell을 제외한 cell에 지뢰를 심는 방식으로 구현했습니다.
- 이후에 게임은 PLAY 상태로 바뀌며 지뢰를 클릭 할 수 있는 상태가 됩니다.
- 참고로 우클릭을 처음으로 클릭했을 때도 PLAY 상태로 바뀌며 다음 클릭부터는 지뢰를 클릭할 수 있습니다.

2. 타이머

- 타이머는 게임 상태의 변화에 따라서 동작합니다.
- WIN, LOSE의 경우에는 running 상태를 false로 만들어 타이머가 동작을 멈춥니다.
- PLAY 상태에는 running을 true로 만들고 setInterval API로 1초마다 time의 상태를 변경합니다.
- READY 상태가 되면 running은 false가 되어 타이머가 동작을 멈추고, time을 0으로 초기화 시킵니다.

3. 난이도 변경이 가능해야 합니다.

- Setting 컴포넌트의 자식 컴포넌트인 DifficultySetting 컴포넌트를 통해서 미리 정해둔 3가지 레벨로 게임을 설정할 수 있습니다.
- 커스텀의 경우에도 Setting 컴포넌트의 자식 컴포넌트인 CustomSetting 컴포넌트를 통해서 높이와 넓이를 커스텀 설정할 수 있습니다.

4. 오른쪽 클릭 깃발 기능

- 오른쪽 클릭 시 cell에 깃발이 꽂히며 게임 종료 및 남은 지뢰 갯수와 관련된 mineSlice의 상태를 업데이트 합니다.

## 이외 추가 구현 내용

1. 렌더링 최적화

- Redux 관련 내용을 학습하면서 contextAPI 기반으로 만들어진 상태 관리 라이브러리이기 때문에 React.memo()를 사용해서 props 비교를 통해 불필요한 재렌더링을 줄이는 것이 가능하다는 것을 알게 되었습니다. 이번 사전 과제를 진행하면서 props를 받아오고, Redux의 상태를 받아오는 컴포넌트에 React.memo()를 적용해서 렌더링 최적화를 진행했습니다.

2. 커스텀훅 사용

- CustomSetting 컴포넌트에서 input의 값을 제어하는 동일한 로직을 useInput 커스텀훅으로 작성하여 사용했습니다.
