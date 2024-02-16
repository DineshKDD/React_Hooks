import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Incre":
      return state + 1;
    case "Decre":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function Demo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count - {count}
      <button onClick={() => dispatch("Incre")}>Incre</button>
      <button onClick={() => dispatch("Decre")}>Decre</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
}

export default Demo;
