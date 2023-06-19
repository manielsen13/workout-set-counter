import { Timer } from "../Timer/Timer";
import { NamesColumn } from "./NamesColumn";
import { NoExercisesPopup } from "./NoExercisesPopup";
import { NumSetsColumn } from "./NumSetsColumn";
import dumbbell from "../../assets/dumbbell.png";
import clockImg from "../../assets/clock.png";

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
      <button
        className="absolute select-none text-xl right-7 top-7"
        onClick={() => setScreen("Options")}
      >
        Options
      </button>

      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        <img src={clockImg} className="w-16 h-auto select-none"></img>
        <Timer startingTime={startingTime} />
      </div>

      <div className="flex flex-col justify-center mt-16 gap-10 mb-10">
        <img
          src={dumbbell}
          className="w-20 h-auto select-none self-center"
        ></img>
        {exercises.length > 0 ? (
          <div className="flex justify-between pl-4 pr-4">
            <NamesColumn exercises={exercises} />
            <NumSetsColumn
              exercises={exercises}
              incrementNumSets={incrementNumSets}
              decrementNumSets={decrementNumSets}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-8 w-80 self-center">
            <NoExercisesPopup
              buildWorkout={buildWorkout}
              setScreen={setScreen}
            />
          </div>
        )}
      </div>
    </>
  );
}
