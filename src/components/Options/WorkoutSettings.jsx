import { ExerciseTab } from "./ExerciseTab";
import plusImg from "../../assets/plus.png";

export function WorkoutSettings({
  changeExerciseName,
  exercises,
  removeExercise,
  addExercise,
}) {
  return (
    <div className="flex flex-col gap-16">
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
    </div>
  );
}
