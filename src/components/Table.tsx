import { useAppSelector } from "../store";
import Tr from "./Tr";

export default function Table() {
  const data = useAppSelector((state) => state.mine.data);

  return (
    <table>
      {Array(data.length)
        .fill(0)
        .map((_, i) => (
          <Tr row={Number(i)} />
        ))}
    </table>
  );
}
