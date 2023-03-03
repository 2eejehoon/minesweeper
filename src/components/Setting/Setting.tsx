import useInput from "../../hooks/useInput";
import { useAppDispatch } from "../../store";
import { setTable } from "../../store/mineSlice";
import { useCallback } from "react";
import Input from "../Input/Input";
import { Wrapper, InputContainer, ButtonContainer } from "./SettingStyle";
import Button from "../Button/Button";

export default function Setting() {
  const [row, handleRowChange] = useInput(10);
  const [col, handleColChange] = useInput(10);
  const [mine, handleMineChange] = useInput(10);

  const dispatch = useAppDispatch();

  const handleStart = useCallback(
    () => dispatch(setTable({ row, col, mine })),
    [row, col, mine]
  );

  return (
    <Wrapper>
      <InputContainer>
        <Input
          id="행"
          text="행"
          type="number"
          min={1}
          value={row}
          onChange={handleRowChange}
        />
        <Input
          id="열"
          text="열"
          type="number"
          min={1}
          value={col}
          onChange={handleColChange}
        />
        <Input
          id="지뢰"
          text="지뢰"
          type="number"
          min={1}
          max={row * col}
          value={mine}
          onChange={handleMineChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button type="button" onClick={handleStart}>
          업데이트
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
