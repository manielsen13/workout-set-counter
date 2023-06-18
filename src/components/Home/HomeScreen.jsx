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
        className="absolute select-none right-7 top-6"
        onClick={() => setScreen("Options")}
      >
        Options
      </button>

      <div className="flex flex-col justify-center mt-24 items-center gap-5">
        <img src={clockImg} className="w-7 h-auto select-none"></img>
        <Timer startingTime={startingTime} />
      </div>

      <div className="flex flex-col justify-center mt-24 gap-10">
        <img
          src={dumbbell}
          className="w-10 h-auto select-none self-center"
        ></img>
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
