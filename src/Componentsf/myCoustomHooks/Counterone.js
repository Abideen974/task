import React, { useState } from "react";
import useCounter from "./useCounter";

const Counterone = () => {
    const [count , increament, decrement] = useCounter(20);
  return (
    <div style={{ marginTop: "5vh" }}>
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

export default Counterone;