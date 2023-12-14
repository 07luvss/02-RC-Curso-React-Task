import React from "react";
import { useState } from "react";

export const TaskAdd = ({ onClickTaskAdd }) => {
  const [dataDescription, setDescription] = useState("");

  const onChangeDescription = (event) => {
    // console.log(event.target.value);
    setDescription(event.target.value);
  };

  return (
    <>
      <div className="mb-3 col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Agrega una tarea"
          onChange={onChangeDescription}
        />
      </div>
      <div className="mb-3 col-5">
        <button
          className="btn btn-success"
          onClick = {() => onClickTaskAdd (dataDescription)}
        >
          AGREGAR
        </button>
      </div>
    </>
  );
};
