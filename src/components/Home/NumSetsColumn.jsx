import { SetCounter } from "./SetCounter";

export function NumSetsColumn({
  exercises,
  incrementNumSets,
  decrementNumSets,
}) {
  return (
    <div className="flex flex-col text-center gap-9">
      <p className="select-none text-2xl"># Sets</p>
      <ul className="flex flex-col text-center gap-9 ">
        {exercises.map((exercise) => {
          return (
            <li key={exercise.id} className="text-xl">
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
