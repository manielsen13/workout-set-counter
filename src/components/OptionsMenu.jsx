import backArrow from "../assets/backArrow.png";
import { TimerSettings } from "./TimerSettings";

export function OptionsMenu({ setScreen, startingTime, setStartingTime }) {
  return (
    <>
      <img
        src={backArrow}
        onClick={() => setScreen("Home")}
        className="w-5 h-auto absolute left-7 top-7 select-none"
      ></img>

      <TimerSettings
        startingTime={startingTime}
        setStartingTime={setStartingTime}
      />
    </>
  );
}
