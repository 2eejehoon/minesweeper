import TableCell from "../TableCell/TableCell";
import { useAppSelector } from "../../store/index";
import { StyledTableRow } from "./TableRowStyle";

interface TableRowProps {
  row: number;
}

function TableRow({ row }: TableRowProps) {
  const width = useAppSelector((state) => state.mine.table[0].length);

  return (
    <StyledTableRow>
      {Array(width)
        .fill(0)
        .map((_, i) => (
          <TableCell key={`${row}-${i}`} row={row} col={i} />
        ))}
    </StyledTableRow>
  );
}

export default TableRow;
