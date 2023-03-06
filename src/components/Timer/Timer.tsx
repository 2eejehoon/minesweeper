import { useEffect, useState } from "react";
import { Wrapper, StyledSpan } from "./TimerStyle";
import { useAppSelector } from "../../store/index";
import { STATE } from "../../contant";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const gameState = useAppSelector((state) => state.mine.gameState);

  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const displayTime = `${min}:${sec}`;

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = window.setInterval((): void => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    switch (gameState) {
      case STATE.PLAY:
        setIsRunning(true);
        return;

      case STATE.READY:
        setIsRunning(false);
        setTime(0);
        return;

      case STATE.WIN:
        setIsRunning(false);
        return;

      case STATE.LOSE:
        setIsRunning(false);
        return;
    }

    // if (gameState === STATE.PLAY) {
    //   setIsRunning(true);
    //   return;
    // }
    // if (gameState === STATE.READY) {
    //   setTime(0);
    // }
    // setIsRunning(false);
  }, [gameState]);

  return (
    <Wrapper>
      <StyledSpan>{displayTime}</StyledSpan>
    </Wrapper>
  );
}

export default Timer;
