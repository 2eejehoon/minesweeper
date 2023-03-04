import { ReactComponent as Smile } from "../../assets/smile.svg";
import { ReactComponent as Sad } from "../../assets/sad.svg";
import { ReactComponent as NoEmotion } from "../../assets/noemotion.svg";
import { STATE } from "../../contant";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Wrapper } from "./DisplayStyle";
import Button from "../common/Button/Button";
import { setTable } from "../../store/mineSlice";

function Display() {
  const dispatch = useAppDispatch();
  const { state, currentTable } = useAppSelector((state) => state.mine);

  const handleClick = useCallback(
    () => dispatch(setTable(currentTable)),
    [currentTable]
  );

  return (
    <Wrapper>
      <Button
        type="button"
        width={50}
        height={50}
        bgColor={"white"}
        color={"black"}
        onClick={handleClick}
      >
        {state === STATE.WIN && <Smile width={35} height={35} />}
        {state === STATE.LOSE && <Sad width={40} height={40} />}
        {(state === STATE.PLAY || state === STATE.READY) && (
          <NoEmotion width={35} height={35} />
        )}
      </Button>
    </Wrapper>
  );
}

export default memo(Display);
