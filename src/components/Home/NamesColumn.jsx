export function NamesColumn({ exercises }) {
  return (
    <div className="flex text-left flex-col gap-9">
      <p className="select-none text-2xl">Exercise</p>
      <ul className="flex text-left flex-col gap-9 text-xl">
        {exercises.map((exercise) => {
          return (
            <li className="select-none" key={exercise.id}>
              {exercise.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
