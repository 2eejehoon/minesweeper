import { memo } from "react";
import { Wrapper, StyledSpan } from "./MineCounterStyle";
import { useAppSelector } from "../../store";

function MineCounter() {
  const {
    currentTable: { mine },
    currentGame: { flag },
  } = useAppSelector((state) => state.mine);

  return (
    <Wrapper>
      <StyledSpan>{mine - flag > 0 ? mine - flag : 0}</StyledSpan>
    </Wrapper>
  );
}

export default memo(MineCounter);
