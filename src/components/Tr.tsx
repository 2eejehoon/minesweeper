import Td from "./Td";
import { useAppSelector } from "../store/index";

type TrProps = {
  row: number;
};

export default function Tr({ row }: TrProps) {
  const data = useAppSelector((state) => state.mine.data);

  return (
    <tr>
      {Array(data.length)
        .fill(0)
        .map((_, i) => (
          <Td row={row} col={Number(i)} />
        ))}
    </tr>
  );
}
