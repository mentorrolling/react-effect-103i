import React, { useState } from "react";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      //agregar la tarea al array
      setTareas([...tareas, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <h1>Lista de tareas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center ">
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          {tareas.map((item, index) => (
            <div key={index} className="card mt-2">
              <div className="card-body">
                {item}

                <button>x</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
