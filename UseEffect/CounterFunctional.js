import React, { useState, useEffect } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Updating");
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>add{count}</button>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default CounterFunctional;
