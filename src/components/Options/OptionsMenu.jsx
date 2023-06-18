import backArrow from "../../assets/backArrow.png";
import { TimerSettings } from "./TimerSettings";

export function OptionsMenu({ setScreen, startingTime, setStartingTime }) {
  return (
    <>
      <img
        src={backArrow}
        onClick={() => setScreen("Home")}
        className="w-5 h-auto absolute left-7 top-7 select-none"
      ></img>

      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        <TimerSettings
          startingTime={startingTime}
          setStartingTime={setStartingTime}
        />
      </div>
    </>
  );
}
