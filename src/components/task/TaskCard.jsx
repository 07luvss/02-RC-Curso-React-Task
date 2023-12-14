import React from "react";

export const TaskCard = ({item, onClickDelete  }) => {

  return (
    <div className="col-sm-3 gy-3 gx-3 mx-2">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p>Tarea #{item.id}</p>
          <h5 className="card-tittle">{item.tittle}</h5>
          {/* <p className="card-text">{item.description}</p> */}

          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => onClickDelete(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};