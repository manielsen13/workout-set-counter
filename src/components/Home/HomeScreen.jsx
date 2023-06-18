import { Timer } from "../Timer/Timer";
import { NamesColumn } from "./NamesColumn";
import { NoExercisesPopup } from "./NoExercisesPopup";
import { NumSetsColumn } from "./NumSetsColumn";
import dumbbell from "../../assets/dumbbell.png";

export function HomeScreen({
  exercises,
  incrementNumSets,
  decrementNumSets,
  setScreen,
  startingTime,
  buildWorkout,
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
      <div className="flex flex-col justify-center mt-24 items-center gap-10">
        <img src={dumbbell} className="w-10 h-auto select-none"></img>
        {exercises.length > 0 ? (
          <div className="flex justify-around">
            <NamesColumn exercises={exercises} />
            <NumSetsColumn
              exercises={exercises}
              incrementNumSets={incrementNumSets}
              decrementNumSets={decrementNumSets}
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <NoExercisesPopup buildWorkout={buildWorkout} />
          </div>
        )}
      </div>
    </>
  );
}
