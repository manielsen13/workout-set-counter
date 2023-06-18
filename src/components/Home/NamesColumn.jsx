export function NamesColumn({ exercises }) {
  return (
    <div className="flex text-center flex-col gap-7">
      <p className="select-none">Exercise</p>
      <ul className="flex text-center flex-col gap-7">
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
