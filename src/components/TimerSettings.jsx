import minusImg from "../assets/minus.png";
import plusImg from "../assets/plus.png";
import { TimeDisplay } from "./TimeDisplay";

export function TimerSettings({ startingTime, setStartingTime }) {
  const handleIncreaseStartingTime = () => {
    if (startingTime >= 3000) {
      return;
    }
    setStartingTime(startingTime + 300);
  };

  const handleDecreaseStartingTime = () => {
    if (startingTime <= 300) {
      return;
    }
    setStartingTime(startingTime - 300);
  };

  return (
    <>
      <p>Default Stopwatch Time</p>
      <div className="flex gap-5 justify-center">
        <img
          src={minusImg}
          className="w-5 h-5 select-none"
          onClick={handleDecreaseStartingTime}
        ></img>
        <TimeDisplay time={startingTime} />
        <img
          src={plusImg}
          className="w-5 h-5 select-none"
          onClick={handleIncreaseStartingTime}
        ></img>
      </div>
    </>
  );
}
