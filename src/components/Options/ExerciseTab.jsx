import { useEffect, useRef, useState } from "react";
import trashIcon from "../../assets/trashIcon.png";
import editIcon from "../../assets/editIcon.png";
import saveIcon from "../../assets/saveIcon.png";

export function ExerciseTab({ exercise, changeExerciseName, removeExercise }) {
  const [nameFieldValue, setNameFieldValue] = useState(exercise.name);
  const [isEditing, setIsEditing] = useState(false);
  const fieldRef = useRef(null);
  const saveRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      fieldRef.current.focus();
      fieldRef.current.select();
    }
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameFieldValue.length === 0 || nameFieldValue.length > 20) {
      return;
    }
    changeExerciseName(exercise.id, nameFieldValue);
    setIsEditing(false);
  };

  const handleEdit = () => {
    console.log("Edit Button Pressed");
    setIsEditing(true);
  };

  const handleSave = () => {
    if (nameFieldValue.length === 0 || nameFieldValue.length > 20) {
      fieldRef.current.focus();
      return;
    }
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
    <div className="flex justify-between w-80">
      {isEditing ? (
        <form onSubmit={(e) => handleSubmit(e)} spellCheck="false">
          {nameFieldValue.length === 0 || nameFieldValue.length > 20 ? (
            <input
              type="text"
              value={nameFieldValue}
              onChange={(e) => setNameFieldValue(e.target.value)}
              ref={fieldRef}
              onBlur={(e) => handleBlur(e)}
              className="text-customBlack text-xl w-52 focus:border-customRed border-solid border-2 focus:outline-none"
            ></input>
          ) : (
            <input
              type="text"
              value={nameFieldValue}
              onChange={(e) => setNameFieldValue(e.target.value)}
              ref={fieldRef}
              onBlur={(e) => handleBlur(e)}
              className="text-customBlack text-xl w-52 focus:border-customBlue border-solid border-2 focus:outline-none"
            ></input>
          )}
        </form>
      ) : (
        <p className="select-none text-xl break-words w-60">{exercise.name}</p>
      )}

      <div className="flex gap-5 items-center">
        {isEditing ? (
          <img
            src={saveIcon}
            className="w-7 h-7 select-none p-1 bg-customGreen rounded-md"
            ref={saveRef}
            tabIndex="0"
            onClick={handleSave}
          ></img>
        ) : (
          <img
            src={editIcon}
            className="w-6 h-6 select-none"
            onClick={handleEdit}
            tabIndex="0"
          ></img>
        )}
        <img
          src={trashIcon}
          className="w-5 h-6 select-none"
          onClick={() => removeExercise(exercise.id)}
        ></img>
      </div>
    </div>
  );
}
