import { memo, useCallback } from "react";
import { Wrapper } from "./DifficultySettingStyle";
import { useAppDispatch } from "../../store";
import { setTable } from "../../store/mineSlice";
import Button from "../common/Button/Button";

function DifficultySetting() {
  const dispatch = useAppDispatch();
  const beginnerAction = { height: 8, width: 8, mine: 16 };
  const intermediateAction = { height: 16, width: 16, mine: 64 };
  const masterAction = { height: 16, width: 32, mine: 128 };

  const handleBeginnerClick = useCallback(
    () => dispatch(setTable(beginnerAction)),
    []
  );
  const handleIntermediateClick = useCallback(
    () => dispatch(setTable(intermediateAction)),
    []
  );
  const handleMasterClick = useCallback(
    () => dispatch(setTable(masterAction)),
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
