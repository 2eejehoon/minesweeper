import { Wrapper } from "./DisplayStyle";
import Timer from "../Timer/Timer";
import Face from "../Face/Face";
import MineCounter from "../MineCounter/MineCounter";

function Display() {
  return (
    <Wrapper>
      <Timer />
      <Face />
      <MineCounter />
    </Wrapper>
  );
}

export default Display;
