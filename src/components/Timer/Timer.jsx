import { TimeDisplay } from "./TimeDisplay";

import resetImg from "../../assets/reset.png";

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
      <div className="flex relative">
        <TimeDisplay time={currentTime} />

        {isRunning === false && currentTime !== startingTime && (
          <img
            src={resetImg}
            className="w-6 h-auto select-none absolute -right-10 top-1 "
            onClick={() => setCurrentTime(startingTime)}
          ></img>
        )}
      </div>

      {isRunning === false && currentTime > 0 && (
        <button
          className="select-none text-2xl p-2 pl-5 pr-5 bg-customGreen rounded-md"
          onClick={handleStart}
        >
          Start
        </button>
      )}
      {isRunning === true && (
        <button
          onClick={() => {
            setIsRunning(false);
          }}
          className="select-none text-2xl p-2 pl-5 pr-5 bg-customRed rounded-md"
        >
          Stop
        </button>
      )}
      {currentTime === 0 && <p>Time's up!</p>}
    </>
  );
}
