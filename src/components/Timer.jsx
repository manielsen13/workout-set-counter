import { TimeDisplay } from "./TimeDisplay";
import clockImg from "../assets/clock.png";
import resetImg from "../assets/reset.png";
import { useEffect, useState } from "react";

//time is given in tenths of a second, so the timer is more precise
export function Timer({ startingTime }) {
  const [currentTime, setCurrentTime] = useState(startingTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (currentTime === 0) {
      setIsRunning(false);
      return;
    }
    if (isRunning) {
      countdown();
    }
  });

  const countdown = () => {
    setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 100);
  };

  const handleStart = () => {
    setIsRunning(true);
    countdown();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={clockImg} className="w-5 h-auto mt-24 select-none"></img>

        <div className="flex relative">
          <TimeDisplay time={currentTime} />

          {isRunning === false && currentTime !== startingTime && (
            <img
              src={resetImg}
              className="w-4 h-auto select-none absolute -right-7"
              onClick={() => setCurrentTime(startingTime)}
            ></img>
          )}
        </div>

        {isRunning === false && currentTime > 0 && (
          <button className="select-none" onClick={handleStart}>
            Start
          </button>
        )}
        {isRunning === true && (
          <button
            className="select-none"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Stop
          </button>
        )}
        {currentTime === 0 && <p>Time's up!</p>}
      </div>
    </>
  );
}
