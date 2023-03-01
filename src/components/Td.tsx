import { useAppSelector } from "../store/index";

type TdProps = {
  row: number;
  col: number;
};

export default function Td({ row, col }: TdProps) {
  const data = useAppSelector((state) => state.mine.data);
  return <td>{data[row][col]}</td>;
}
