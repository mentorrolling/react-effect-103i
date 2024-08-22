import React from "react";
import CounterApp from "./CounterApp";

const CounterScreen = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <h1 className="fw-bold">Estoy con Bootstrap!!</h1>
          <button className="btn btn-primary">Hola</button>
        </div>
      </div>
      <div className="row">
        {show && (
          <div className="col">
            <h3>Counter App</h3>

            <CounterApp />
          </div>
        )}
      </div>
    </div>
  );
};

export default CounterScreen;
