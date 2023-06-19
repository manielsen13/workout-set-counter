import workouts from "../../data/workouts.json";

export function PresetWorkoutOptionsButtons({ buildWorkout }) {
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-5 text-lg">
      {Object.keys(workouts).map((workoutName) => {
        return (
          <li key={crypto.randomUUID()}>
            <button
              className="select-none p-2 pl-5 pr-5 bg-customPurple rounded-md"
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
