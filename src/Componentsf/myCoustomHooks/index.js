import React, { useState } from "react";
import useCounter from "./useCounter";

const Counter = () => {
    const [count , increament, decrement] = useCounter();
  return (
    <div style={{ marginTop: "30vh" }}>
      <h3> Custom Hooks </h3>
      <button className="btn btn-outline-success mx-5" onClick={increament}>
        Increments
      </button>
      {count}
      <button className="btn btn-outline-success mx-5" onClick={decrement}>
        Decrements
      </button>
    </div>
  );
};

export default Counter;
