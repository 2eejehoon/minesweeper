import TableCell from "../TableCell/TableCell";
import { memo } from "react";
import { useAppSelector } from "../../store/index";
import { StyledTableRow } from "./TableRowStyle";

type TableRowProps = {
  row: number;
};

function TableRow({ row }: TableRowProps) {
  const width = useAppSelector((state) => state.mine.table[0].length);

  return (
    <StyledTableRow>
      {Array(width)
        .fill(0)
        .map((_, i) => (
          <TableCell key={row + i} row={row} col={Number(i)} />
        ))}
    </StyledTableRow>
  );
}

export default memo(TableRow);
