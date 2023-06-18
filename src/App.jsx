import { useState } from "react";
import { Timer } from "./components/Timer";
import { NamesColumn } from "./components/NamesColumn";
import { NumSetsColumn } from "./components/NumSetsColumn";

function App() {
  const [exercises, setExercises] = useState([
    { name: "DB Press", numSets: 1, id: crypto.randomUUID() },
  ]);

  const incrementNumSets = (exerciseId) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, numSets: exercise.numSets + 1 };
        }
        return exercise;
      })
    );
  };
  const decrementNumSets = (exerciseId) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, numSets: exercise.numSets - 1 };
        }
        return exercise;
      })
    );
  };

  return (
    <>
      <button className="absolute select-none right-7 top-5">Options</button>

      <Timer />

      <>
        <div className="flex justify-around mt-20">
          <NamesColumn exercises={exercises} />
          <NumSetsColumn
            exercises={exercises}
            incrementNumSets={incrementNumSets}
            decrementNumSets={decrementNumSets}
          />
        </div>
      </>
    </>
  );
}

export default App;
