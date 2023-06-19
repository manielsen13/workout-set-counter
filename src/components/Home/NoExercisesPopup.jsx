import { PresetWorkoutOptionsButtons } from "../Displays/PresetWorkoutOptionsButtons";

export function NoExercisesPopup({ buildWorkout, setScreen }) {
  return (
    <div className="flex flex-col gap-7">
      <button
        onClick={() => {
          setScreen("Options");
        }}
        className="select-none text-2xl p-2 pl-5 pr-5 bg-customBlue rounded-md w-fit self-center"
      >
        Build New
      </button>
      <div className="flex flex-col gap-8">
        <p className="text-2xl">Presets</p>
        <PresetWorkoutOptionsButtons buildWorkout={buildWorkout} />
      </div>
    </div>
  );
}
