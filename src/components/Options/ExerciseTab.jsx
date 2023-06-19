import { useEffect, useRef, useState } from "react";
import trashIcon from "../../assets/trashIcon.png";
import editIcon from "../../assets/editIcon.png";
import saveIcon from "../../assets/saveIcon.png";

export function ExerciseTab({ exercise, changeExerciseName, removeExercise }) {
  const [nameFieldValue, setNameFieldValue] = useState(exercise.name);
  const [isEditing, setIsEditing] = useState(false);
  const fieldRef = useRef(null);
  //do something with this below
  const saveRef = useRef(null);
  const editRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      fieldRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e) => {
    //add checks in here for is empty and then for the length of characters
    e.preventDefault();
    changeExerciseName(exercise.id, nameFieldValue);
    setIsEditing(false);
  };

  const handleEdit = () => {
    console.log("Edit Button Pressed");
    setIsEditing(true);
  };

  const handleSave = () => {
    changeExerciseName(exercise.id, nameFieldValue);
    setIsEditing(false);
  };

  const handleBlur = (e) => {
    if (e.relatedTarget === saveRef.current) {
      return;
    }
    setNameFieldValue(exercise.name);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between">
      {isEditing ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={nameFieldValue}
            onChange={(e) => setNameFieldValue(e.target.value)}
            ref={fieldRef}
            onBlur={(e) => handleBlur(e)}
          ></input>
        </form>
      ) : (
        <p className="select-none">{exercise.name}</p>
      )}

      <div className="flex gap-5">
        {isEditing ? (
          <img
            src={saveIcon}
            className="w-7 h-auto select-none p-1 bg-green-300 rounded-md"
            ref={saveRef}
            tabIndex="0"
            onClick={handleSave}
          ></img>
        ) : (
          <img
            src={editIcon}
            className="w-6 h-auto select-none"
            onClick={handleEdit}
            ref={editRef}
            tabIndex="0"
          ></img>
        )}
        <img
          src={trashIcon}
          className="w-5 h-auto select-none"
          onClick={() => removeExercise(exercise.id)}
        ></img>
      </div>
    </div>
  );
}
