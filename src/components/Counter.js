import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className="container-fluid bg-dark d-flex">
      <div className="container box text-center">
        <div className="row">
          <h3 className="col-12 text-dark fw-bold">Count</h3>
        </div>
        <div className="row">
          <h3 className="col-12 text-info">{counter}</h3>
        </div>
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary" onClick={decrement}>
              {" "}
              Decrement
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary" onClick={increment}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
