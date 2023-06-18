import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

export function SetCounter({ exercise, incrementNumSets, decrementNumSets }) {
  const handleIncreaseSetsButtonPressed = () => {
    if (exercise.numSets === 9) {
      return;
    }
    incrementNumSets(exercise.id);
  };

  const handleDecreaseSetsButtonPressed = () => {
    if (exercise.numSets === 0) {
      return;
    }
    decrementNumSets(exercise.id);
  };

  return (
    <div className="flex gap-5 justify-center">
      <img
        src={minusImg}
        className="w-5 h-5 select-none"
        onClick={handleDecreaseSetsButtonPressed}
      ></img>
      <p className="select-none">{exercise.numSets}</p>
      <img
        src={plusImg}
        className="w-5 h-5 select-none"
        onClick={handleIncreaseSetsButtonPressed}
      ></img>
    </div>
  );
}
