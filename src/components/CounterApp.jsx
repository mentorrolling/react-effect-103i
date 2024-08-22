import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  //hacer algo cuando se monta el componente
  useEffect(() => {
    //es el efecto cuando se monta o las acciones
    console.log("El componente se montó");

    //Cuando se desmionta el componente
    return () => {
      //es el efecto cuando se desmonta o las acciones
      console.warn("Se desmontó el componente");
    };
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <h4>Contador: {counter}</h4>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-warning"
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
