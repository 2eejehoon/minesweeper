import { memo } from "react";
import { Wrapper, StyledSpan } from "./MineCounterStyle";
import { useAppSelector } from "../../store";

function MineCounter() {
  const mine = useAppSelector((state) => state.mine.currentTable.mine);
  const flag = useAppSelector((state) => state.mine.currentGame.flag);

  return (
    <Wrapper>
      <StyledSpan>{mine - flag >= 0 ? mine - flag : 0}</StyledSpan>
    </Wrapper>
  );
}

export default memo(MineCounter);
