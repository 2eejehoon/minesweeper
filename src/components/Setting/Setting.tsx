import useInput from "../../hooks/useInput";
import { useAppDispatch } from "../../store";
import { setGame } from "../../store/mineSlice";
import { useCallback } from "react";
import Input from "../Input/Input";
import {
  Wrapper,
  TimerContainer,
  InputContainer,
  ButtonContainer,
} from "./SettingStyle";
import Button from "../Button/Button";

export default function Setting() {
  const [col, handleColChange] = useInput(10);
  const [row, handleRowChange] = useInput(10);
  const [mine, handleMineChange] = useInput(10);

  const dispatch = useAppDispatch();

  const handleStart = useCallback(() => {
    dispatch(setGame({ col, row, mine }));
  }, [row, col, mine]);

  return (
    <Wrapper>
      <TimerContainer>
        <div></div>
      </TimerContainer>
      <InputContainer>
        <Input
          id="가로"
          text="가로"
          type="number"
          value={col}
          onChange={handleColChange}
        />
        <Input
          id="세로"
          text="세로"
          type="number"
          value={row}
          onChange={handleRowChange}
        />
        <Input
          id="지뢰"
          text="지뢰"
          type="number"
          max={col * row}
          value={mine}
          onChange={handleMineChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button type="button" onClick={handleStart}>
          시작
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
