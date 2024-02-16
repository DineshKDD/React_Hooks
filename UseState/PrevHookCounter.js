import React, { useState } from "react";

function PrevHookCounter() {
  const prevValue = 0;
  const [count, setCount] = useState(prevValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(prevValue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement
      </button>
      <button onClick={incrementFive}></button>
    </div>
  );
}

export default PrevHookCounter;
