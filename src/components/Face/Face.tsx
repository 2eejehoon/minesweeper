import Button from "../common/Button/Button";
import { setTable } from "../../store/mineSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import FaceEmoji from "../FaceEmoji/FaceEmoji";

function Face() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.mine.gameState);
  const { height, width, mine } = useAppSelector(
    (state) => state.mine.currentTable
  );

  const handleClick = () => dispatch(setTable({ height, width, mine }));

  return (
    <Button
      type="button"
      width={50}
      height={50}
      bgColor={"gray"}
      color={"black"}
      onClick={handleClick}
    >
      <FaceEmoji gameState={gameState} />
    </Button>
  );
}

export default Face;
