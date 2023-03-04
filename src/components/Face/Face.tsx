import { ReactComponent as Smile } from "../../assets/smile.svg";
import { ReactComponent as Sad } from "../../assets/sad.svg";
import { ReactComponent as Normal } from "../../assets/normal.svg";
import { STATE } from "../../contant";
import Button from "../common/Button/Button";
import { setTable } from "../../store/mineSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { memo, useCallback } from "react";

function Face() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.mine.state);
  const height = useAppSelector((state) => state.mine.currentTable.height);
  const width = useAppSelector((state) => state.mine.currentTable.width);
  const mine = useAppSelector((state) => state.mine.currentTable.mine);

  const handleClick = useCallback(
    () => dispatch(setTable({ height, width, mine })),
    [height, width, mine]
  );

  return (
    <Button
      type="button"
      width={50}
      height={50}
      bgColor={"gray"}
      color={"black"}
      onClick={handleClick}
    >
      {state === STATE.WIN && <Smile width={35} height={35} />}
      {state === STATE.LOSE && <Sad width={35} height={35} />}
      {(state === STATE.PLAY || state === STATE.READY) && (
        <Normal width={35} height={35} />
      )}
    </Button>
  );
}

export default memo(Face);
