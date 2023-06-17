import { useState } from "react";
import clockImg from "./assets/clock.png";
import resetImg from "./assets/reset.png";
import plusImg from "./assets/plus.png";
import minusImg from "./assets/minus.png";

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(360);
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <button className="absolute select-none right-7 top-5">Options</button>

      <>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={clockImg} className="w-5 h-auto mt-24 select-none"></img>
          <label className="select-none">{`${
            ("%02d", Math.floor(time / 60))
          }:${(time % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}`}</label>
          <img src={resetImg} className="w-5 h-auto select-none"></img>

          <button className="select-none">Start</button>
          <button className="select-none">Stop</button>
        </div>
      </>

      <>
        <div className="flex justify-around mt-20">
          <div className="flex text-center flex-col gap-7">
            <label className="select-none">Exercise</label>
            <label className="select-none">Exercise Name</label>
          </div>
          <div className="flex flex-col text-center gap-7">
            <label className="select-none"># Sets Complete</label>
            <div className="flex gap-5 justify-center">
              <img src={minusImg} className="w-5 h-5 select-none"></img>
              <label className="select-none">0</label>
              <img src={plusImg} className="w-5 h-5 select-none"></img>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
