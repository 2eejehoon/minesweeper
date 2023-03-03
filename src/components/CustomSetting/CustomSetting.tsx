import { memo, useCallback } from "react";
import { setTable } from "../../store/mineSlice";
import { useAppDispatch } from "../../store";
import { Wrapper } from "./CustomSettingStyle";
import useInput from "../../hooks/useInput";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function CustomSetting() {
  const dispatch = useAppDispatch();
  const [row, handleRowChange] = useInput(8);
  const [col, handleColChange] = useInput(8);
  const [mine, handleMineChange] = useInput(16);

  const handleClick = useCallback(
    () => dispatch(setTable({ row, col, mine })),
    [row, col, mine]
  );

  return (
    <Wrapper>
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
      <Button
        type="button"
        width={80}
        height={40}
        onClick={handleClick}
        bgColor={"tomato"}
        color={"white"}
      >
        업데이트
      </Button>
    </Wrapper>
  );
}
export default memo(CustomSetting);
