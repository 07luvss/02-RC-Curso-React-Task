import { TaskCard } from "./TaskCard";
import { TaskAdd } from "./TaskAdd";
import { useState } from "react";

import { dataTask } from "../../data/Task";

export const Task = () => {
  const [dataTaskState, setdataTaskState] = useState(dataTask);

  //Desde el componente llega el valor, como propiedad de la función.
  const onClickTaskAdd = (value) => {
    const newTaskObj = {
      id: dataTaskState[dataTaskState.length - 1].id + 1,
      tittle: value,
      //description: value.description,
    };

    setdataTaskState([...dataTaskState, newTaskObj]);
  };

  const onClickDelete = (value) => {
    console.log(`Elimirá la tarea #${value}`);
    const newArrDataTask = dataTaskState.filter(item => item.id != value);
    setdataTaskState(newArrDataTask);
    console.log(dataTaskState)
  };

  return (
    <div className="container" id="featured-3">
      <div className="row py-5">
        {dataTaskState.map(item => (
          <TaskCard
            item={item}
            key={item.id}
            onClickDelete={(value) => onClickDelete(value)}
          />
        ))}
      </div>
      <div>
        <TaskAdd onClickTaskAdd={(value) => onClickTaskAdd(value)} />
      </div>
    </div>
  );
};