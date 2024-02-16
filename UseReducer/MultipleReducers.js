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
function MultipleReducers() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      Count -{count}
      <button onClick={() => dispatch("Incre")}>Incre</button>
      <button onClick={() => dispatch("Decre")}>Decre</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <div>
        Count -{countTwo}
        <button onClick={() => dispatchTwo("Incre")}>Incre</button>
        <button onClick={() => dispatchTwo("Decre")}>Decre</button>
        <button onClick={() => dispatchTwo("Reset")}>Reset</button>
      </div>
    </div>
  );
}

export default MultipleReducers;
