import { useEffect, useState } from "react";
import workouts from "./data/workouts.json";

import { OptionsMenu } from "./components/Options/OptionsMenu";
import { HomeScreen } from "./components/Home/HomeScreen";

function App() {
  const [exercises, setExercises] = useState(
    JSON.parse(window.localStorage.getItem("exercises")) || []
  );
  const [screen, setScreen] = useState(
    window.localStorage.getItem("screen") || "Home"
  );
  const [startingTime, setStartingTime] = useState(
    parseInt(window.localStorage.getItem("startingTime")) || 1200
  );

  useEffect(() => {
    window.localStorage.setItem("exercises", JSON.stringify(exercises));
    window.localStorage.setItem("screen", screen);
    window.localStorage.setItem("startingTime", startingTime.toString());
  }, [exercises, screen, startingTime]);

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

  const changeExerciseName = (exerciseId, name) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, name: name };
        }
        return exercise;
      })
    );
  };

  const removeExercise = (exerciseId) => {
    setExercises(
      exercises.filter((exercise) => {
        return exercise.id !== exerciseId;
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

  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        name: `Exercise ${exercises.length + 1}`,
        id: crypto.randomUUID(),
        numSets: 0,
      },
    ]);
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
          buildWorkout={buildWorkout}
        />
      )}
      {screen === "Options" && (
        <OptionsMenu
          setScreen={setScreen}
          startingTime={startingTime}
          setStartingTime={setStartingTime}
          changeExerciseName={changeExerciseName}
          exercises={exercises}
          removeExercise={removeExercise}
          addExercise={addExercise}
          buildWorkout={buildWorkout}
        />
      )}
    </>
  );
}

export default App;
