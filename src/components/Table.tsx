import { useMemo } from "react";
import { useAppSelector } from "../store";

export default function Table() {
  const data = useAppSelector((state) => state.mine.data);
  console.log(data);
  return <></>;
}
