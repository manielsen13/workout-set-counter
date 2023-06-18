import { SetCounter } from "./SetCounter";

export function NumSetsColumn({
  exercises,
  incrementNumSets,
  decrementNumSets,
}) {
  return (
    <div className="flex flex-col text-center gap-7">
      <p className="select-none"># Sets Complete</p>
      <ul className="flex flex-col text-center gap-7">
        {exercises.map((exercise) => {
          return (
            <li key={exercise.id}>
              <SetCounter
                exercise={exercise}
                incrementNumSets={incrementNumSets}
                decrementNumSets={decrementNumSets}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
