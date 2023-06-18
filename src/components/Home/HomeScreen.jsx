import { Timer } from "../Timer/Timer";
import { NamesColumn } from "./NamesColumn";
import { NumSetsColumn } from "./NumSetsColumn";

export function HomeScreen({
  exercises,
  incrementNumSets,
  decrementNumSets,
  setScreen,
  startingTime,
}) {
  return (
    <>
      {" "}
      <button
        className="absolute select-none right-7 top-6"
        onClick={() => setScreen("Options")}
      >
        Options
      </button>
      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        <Timer startingTime={startingTime} />
      </div>
      <>
        <div className="flex justify-around mt-20">
          <NamesColumn exercises={exercises} />
          <NumSetsColumn
            exercises={exercises}
            incrementNumSets={incrementNumSets}
            decrementNumSets={decrementNumSets}
          />
        </div>
      </>
    </>
  );
}
