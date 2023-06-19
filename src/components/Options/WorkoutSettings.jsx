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
    <div className="flex flex-col gap-5">
      <p className="self-center">This Workout's Exercises</p>

      <ul className="w-screen flex flex-col gap-10">
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

      <img
        src={plusImg}
        className="w-6 h-auto select-none self-center"
        onClick={addExercise}
      ></img>

      <div className="flex flex-col gap-8">
        <p className="self-left">Presets</p>
        <PresetWorkoutOptionsButtons buildWorkout={buildWorkout} />
      </div>
    </div>
  );
}
