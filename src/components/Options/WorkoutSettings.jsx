import { ExerciseTab } from "./ExerciseTab";

export function WorkoutSettings({
  changeExerciseName,
  exercises,
  removeExercise,
}) {
  return (
    <>
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
    </>
  );
}
