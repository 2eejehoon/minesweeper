import { memo, useCallback } from "react";
import { setTable } from "../../store/mineSlice";
import { useAppDispatch } from "../../store";
import { Wrapper } from "./CustomSettingStyle";
import useInput from "../../hooks/useInput";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function CustomSetting() {
  const dispatch = useAppDispatch();
  const [height, handleHeightChange] = useInput(8);
  const [width, handleWidthChange] = useInput(8);
  const [mine, handleMineChange] = useInput(8);

  const handleClick = useCallback(
    () => dispatch(setTable({ height, width, mine })),
    [height, width, mine]
  );

  return (
    <Wrapper>
      <Input
        id="높이"
        text="높이"
        type="number"
        min={1}
        value={height}
        onChange={handleHeightChange}
      />
      <Input
        id="넓이"
        text="넓이"
        type="number"
        min={1}
        value={width}
        onChange={handleWidthChange}
      />
      <Input
        id="지뢰"
        text="지뢰"
        type="number"
        min={1}
        max={height * width}
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
