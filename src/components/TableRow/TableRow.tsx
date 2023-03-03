import Cell from "../TableCell/TableCell";
import { memo } from "react";
import { useAppSelector } from "../../store/index";
import { StyledTableRow } from "./TableRowStyle";

type TableRowProps = {
  row: number;
};

function TableRow({ row }: TableRowProps) {
  const table = useAppSelector((state) => state.mine.table);

  return (
    <StyledTableRow>
      {Array(table[0].length)
        .fill(0)
        .map((_, i) => (
          <Cell row={row} col={Number(i)} />
        ))}
    </StyledTableRow>
  );
}

export default memo(TableRow);
