import { memo, useEffect, useState } from "react";
import { Wrapper, StyledSpan } from "./TimerStyle";
import { useAppSelector } from "../../store/index";
import { STATE } from "../../contant";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const state = useAppSelector((state) => state.mine.state);

  useEffect(() => {
    let interval = 0;

    if (running) {
      interval = window.setInterval((): void => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (state !== STATE.PLAY) {
      setRunning(false);
      setTime(0);
    } else setRunning(true);
  }, [state]);

  return (
    <Wrapper>
      <StyledSpan>
        {`${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${(
          "0" + Math.floor((time / 1000) % 60)
        ).slice(-2)}`}
      </StyledSpan>
    </Wrapper>
  );
}

export default memo(Timer);
