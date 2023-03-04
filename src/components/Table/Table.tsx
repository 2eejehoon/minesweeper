import { memo } from "react";
import { useAppSelector } from "../../store";
import TableRow from "../TableRow/TableRow";
import { StyledTable } from "./TableStyle";

function Table() {
  const table = useAppSelector((state) => state.mine.table);

  return (
    <StyledTable>
      <tbody>
        {Array(table.length)
          .fill(0)
          .map((_, i) => (
            <TableRow key={i} row={Number(i)} />
          ))}
      </tbody>
    </StyledTable>
  );
}

export default memo(Table);
