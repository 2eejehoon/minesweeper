import Td from "../Td/Td";
import { useAppSelector } from "../../store/index";
import { StyledTr } from "./TrStyle";

type TrProps = {
  row: number;
};

export default function Tr({ row }: TrProps) {
  const data = useAppSelector((state) => state.mine.data);

  return (
    <StyledTr>
      {Array(data[0].length)
        .fill(0)
        .map((_, i) => (
          <Td row={row} col={Number(i)} />
        ))}
    </StyledTr>
  );
}
