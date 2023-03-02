import { memo } from "react";
import { useAppSelector } from "../../store";
import TableRow from "../TableRow/TableRow";
import { StyledTable } from "./TableStyle";

function Table() {
  const data = useAppSelector((state) => state.mine.table);

  return (
    <StyledTable>
      <tbody>
        {Array(data.length)
          .fill(0)
          .map((_, i) => (
            <TableRow row={Number(i)} />
          ))}
      </tbody>
    </StyledTable>
  );
}

export default memo(Table);
