import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";
import { TimeDisplay } from "../Timer/TimeDisplay";

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
      <p className="text-2xl">Default Stopwatch Time</p>
      <div className="flex gap-5 justify-center items-center">
        <img
          src={minusImg}
          className="w-7 h-7 select-none"
          onClick={handleDecreaseStartingTime}
        ></img>
        <TimeDisplay time={startingTime} />
        <img
          src={plusImg}
          className="w-7 h-7 select-none"
          onClick={handleIncreaseStartingTime}
        ></img>
      </div>
    </>
  );
}
