import { memo, useCallback } from "react";
import { Wrapper } from "./DifficultySettingStyle";
import { useAppDispatch } from "../../store";
import { setTable } from "../../store/mineSlice";
import Button from "../common/Button/Button";
import { DIFFICULTY } from "../../contant";

function DifficultySetting() {
  const dispatch = useAppDispatch();

  const handleBeginnerClick = useCallback(
    () => dispatch(setTable(DIFFICULTY.BEGINNER)),
    []
  );
  const handleIntermediateClick = useCallback(
    () => dispatch(setTable(DIFFICULTY.INTERMEDIATE)),
    []
  );
  const handleMasterClick = useCallback(
    () => dispatch(setTable(DIFFICULTY.EXPERT)),
    []
  );

  return (
    <Wrapper>
      <Button
        type="button"
        width={80}
        height={57}
        bgColor={"gray"}
        color={"white"}
        onClick={handleBeginnerClick}
      >
        초보
      </Button>
      <Button
        type="button"
        width={80}
        height={57}
        bgColor={"gray"}
        color={"white"}
        onClick={handleIntermediateClick}
      >
        중수
      </Button>
      <Button
        type="button"
        width={80}
        height={57}
        bgColor={"gray"}
        color={"white"}
        onClick={handleMasterClick}
      >
        고수
      </Button>
    </Wrapper>
  );
}

export default memo(DifficultySetting);
