import { Timer } from "./Timer";
import { NamesColumn } from "./NamesColumn";
import { NumSetsColumn } from "./NumSetsColumn";

export function HomeScreen({
  exercises,
  incrementNumSets,
  decrementNumSets,
  setScreen,
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
      <Timer />
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
