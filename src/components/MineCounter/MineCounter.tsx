import { Wrapper, StyledSpan } from "./MineCounterStyle";
import { useAppSelector } from "../../store";

function MineCounter() {
  const mine = useAppSelector((state) => state.mine.currentTable.mine);
  const flag = useAppSelector((state) => state.mine.currentGame.flag);
  const display = mine - flag >= 0 ? mine - flag : 0;

  return (
    <Wrapper>
      <StyledSpan>{display}</StyledSpan>
    </Wrapper>
  );
}

export default MineCounter;
