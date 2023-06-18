import { PresetWorkoutOptionsButtons } from "../Displays/PresetWorkoutOptionsButtons";

export function NoExercisesPopup({ buildWorkout, setScreen }) {
  return (
    <div className="flex flex-col gap-7">
      <button
        onClick={() => {
          setScreen("Options");
        }}
      >
        Build New
      </button>
      <div className="flex flex-col gap-8">
        <p>Presets</p>
        <PresetWorkoutOptionsButtons buildWorkout={buildWorkout} />
      </div>
    </div>
  );
}
