import { useAppSelector } from "../../store/index";
import { StyledTd, StyledButton } from "./TdStyle";
import { style, text } from "../../utils/mine";

type TdProps = {
  row: number;
  col: number;
};

export default function Td({ row, col }: TdProps) {
  const data = useAppSelector((state) => state.mine.data);
  const code = data[row][col];

  return (
    <StyledTd>
      <StyledButton color={style(code)}>{text(code)}</StyledButton>
    </StyledTd>
  );
}
