import { useState } from "react";
import plusImg from "./assets/plus.png";
import minusImg from "./assets/minus.png";
import { Timer } from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);

  const [exercises, setExercises] = useState([]);

  return (
    <>
      <button className="absolute select-none right-7 top-5">Options</button>

      <Timer />

      <>
        <div className="flex justify-around mt-20">
          <div className="flex text-center flex-col gap-7">
            <p className="select-none">Exercise</p>
            <p className="select-none">Exercise Name</p>
          </div>
          <div className="flex flex-col text-center gap-7">
            <p className="select-none"># Sets Complete</p>
            <div className="flex gap-5 justify-center">
              <img src={minusImg} className="w-5 h-5 select-none"></img>
              <p className="select-none">0</p>
              <img src={plusImg} className="w-5 h-5 select-none"></img>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
