import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  SecondCounter: 2,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Incre":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decre":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Incre1":
      return { ...state, SecondCounter: state.SecondCounter + action.value };
    case "Decre2":
      return { ...state, SecondCounter: state.SecondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function ObjectDemo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count - {count.firstCounter}
      <button onClick={() => dispatch({ type: "Incre", value: 1 })}>
        Incre
      </button>
      <button onClick={() => dispatch({ type: "Decre", value: 1 })}>
        Decre
      </button>
      scount -{count.SecondCounter}
      <button onClick={() => dispatch({ type: "Incre1", value: 1 })}>
        Incre
      </button>
      <button onClick={() => dispatch({ type: "Decre2", value: 1 })}>
        Decre
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default ObjectDemo;
