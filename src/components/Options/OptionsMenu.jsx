import backArrow from "../../assets/backArrow.png";
import { TimerSettings } from "./TimerSettings";
import { WorkoutSettings } from "./WorkoutSettings";

export function OptionsMenu({
  setScreen,
  startingTime,
  setStartingTime,
  exercises,
  changeExerciseName,
  removeExercise,
  addExercise,
  buildWorkout,
}) {
  return (
    <>
      <img
        src={backArrow}
        onClick={() => setScreen("Home")}
        className="w-5 h-auto absolute left-7 top-7 select-none"
      ></img>

      <div className="flex flex-col mt-24 items-center gap-5">
        <TimerSettings
          startingTime={startingTime}
          setStartingTime={setStartingTime}
        />

        <div className="mt-10">
          <WorkoutSettings
            exercises={exercises}
            changeExerciseName={changeExerciseName}
            removeExercise={removeExercise}
            addExercise={addExercise}
            buildWorkout={buildWorkout}
          />
        </div>
      </div>
    </>
  );
}
