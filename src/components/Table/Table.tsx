import { useAppSelector } from "../../store";
import Tr from "../Tr/Tr";
import { StyledTable } from "./TableStyle";

export default function Table() {
  const data = useAppSelector((state) => state.mine.data);

  return (
    <StyledTable>
      {Array(data.length)
        .fill(0)
        .map((_, i) => (
          <Tr row={Number(i)} />
        ))}
    </StyledTable>
  );
}
