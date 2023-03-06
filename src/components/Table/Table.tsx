import { useAppSelector } from "../../store";
import TableRow from "../TableRow/TableRow";
import { StyledTable } from "./TableStyle";

function Table() {
  const height = useAppSelector((state) => state.mine.table.length);

  return (
    <StyledTable>
      <tbody>
        {Array(height)
          .fill(0)
          .map((_, i) => (
            <TableRow key={i} row={Number(i)} />
          ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
