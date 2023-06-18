import { useEffect, useState } from "react";
import workouts from "./data/workouts.json";
import { PresetWorkoutOptionsButtons } from "./components/PresetWorkoutOptionsButtons.jsx";
import { OptionsMenu } from "./components/Options/OptionsMenu";
import { HomeScreen } from "./components/Home/HomeScreen";

function App() {
  const [exercises, setExercises] = useState([]);
  const [screen, setScreen] = useState("Home");
  const [startingTime, setStartingTime] = useState(1200);

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

  const buildWorkout = (workoutName) => {
    setExercises(
      workouts[workoutName].map((exercise) => {
        return {
          name: exercise,
          numSets: 0,
          id: crypto.randomUUID(),
        };
      })
    );
  };

  return (
    <>
      {screen === "Home" && (
        <HomeScreen
          exercises={exercises}
          incrementNumSets={incrementNumSets}
          decrementNumSets={decrementNumSets}
          setScreen={setScreen}
          startingTime={startingTime}
        />
      )}
      {screen === "Options" && (
        <OptionsMenu
          setScreen={setScreen}
          startingTime={startingTime}
          setStartingTime={setStartingTime}
        />
      )}
    </>
  );
}

export default App;
