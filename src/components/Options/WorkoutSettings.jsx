import { ExerciseTab } from "./ExerciseTab";
import plusImg from "../../assets/plus.png";
import { PresetWorkoutOptionsButtons } from "../Displays/PresetWorkoutOptionsButtons";

export function WorkoutSettings({
  changeExerciseName,
  exercises,
  removeExercise,
  addExercise,
  buildWorkout,
}) {
  return (
    <div className="flex flex-col align-middle justify-center">
      <p className="self-center text-2xl">This Workout's Exercises</p>

      {exercises.length > 0 && (
        <ul className="w-screen flex flex-col gap-10 items-center mt-8 ">
          {exercises.map((exercise) => {
            return (
              <li key={exercise.id}>
                <ExerciseTab
                  exercise={exercise}
                  changeExerciseName={changeExerciseName}
                  removeExercise={removeExercise}
                />
              </li>
            );
          })}
        </ul>
      )}

      <img
        src={plusImg}
        className="w-7 h-7 select-none self-center mt-8 mb-8"
        onClick={addExercise}
      ></img>

      <div className="flex flex-col gap-8 w-80 self-center mb-10">
        <p className="self-left text-2xl ">Presets</p>
        <PresetWorkoutOptionsButtons buildWorkout={buildWorkout} />
      </div>
    </div>
  );
}
