import { ReactComponent as Smile } from "../../../assets/smile.svg";
import { ReactComponent as Sad } from "../../../assets/sad.svg";
import { ReactComponent as NoEmotion } from "../../../assets/noemotion.svg";
import { memo, useCallback } from "react";
import { STATUS } from "../../../contant";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Wrapper } from "./DisplayStyle";
import Button from "../Button/Button";
import { setTable } from "../../../store/mineSlice";

function Display() {
  const dispatch = useAppDispatch();
  const { status, currentTable } = useAppSelector((state) => state.mine);

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
        {status === STATUS.WIN && <Smile width={35} height={35} />}
        {status === STATUS.LOSE && <Sad width={40} height={40} />}
        {(status === STATUS.PLAY || status === STATUS.READY) && (
          <NoEmotion width={35} height={35} />
        )}
      </Button>
    </Wrapper>
  );
}

export default memo(Display);
