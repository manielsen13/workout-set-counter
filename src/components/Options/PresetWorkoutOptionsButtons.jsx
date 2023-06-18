import workouts from "../../data/workouts.json";

export function PresetWorkoutOptionsButtons({ buildWorkout }) {
  return (
    <ul className="flex flex-wrap gap-10 ">
      {Object.keys(workouts).map((workoutName) => {
        return (
          <li key={crypto.randomUUID()}>
            <button
              className="select-none"
              onClick={() => buildWorkout(workoutName)}
            >
              {workoutName}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
