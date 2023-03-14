import { Wrapper, StyledSpan } from "./MineCounterStyle";
import { useAppSelector } from "../../store";

function MineCounter() {
  const mine = useAppSelector((state) => state.mine.currentTable.mine);
  const flag = useAppSelector((state) => state.mine.currentGame.flag);
  const mineLeft = mine - flag >= 0 ? mine - flag : 0;

  return (
    <Wrapper>
      <StyledSpan>{mineLeft}</StyledSpan>
    </Wrapper>
  );
}

export default MineCounter;
