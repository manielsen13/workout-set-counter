import { SetCounter } from "./SetCounter";

export function ExerciseRow({ exercise, incrementNumSets, decrementNumSets }) {
  return (
    <div className="flex pl-7 pr-7 w-96 self-center justify-between items-center text-xl break-words">
      <p className="select-none w-52">{exercise.name}</p>
      <SetCounter
        exercise={exercise}
        incrementNumSets={incrementNumSets}
        decrementNumSets={decrementNumSets}
      />
    </div>
  );
}
