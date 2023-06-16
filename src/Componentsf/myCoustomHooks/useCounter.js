import React, { useState } from 'react'

const useCounter = (initialState = 0) => {
    const [count, setCount] = useState(initialState);
    const increament = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
  return  [count , increament, decrement]

}

export default useCounter