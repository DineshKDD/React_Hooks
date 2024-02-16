import React, { useContext } from "react";
import { UserContext } from "../App";

function ComA() {
  const countContext = useContext(UserContext);
  return (
    <div>
      ComA - {countContext.countState}
      <button onClick={() => countContext.countDispatch("Incre")}>Incre</button>
      <button onClick={() => countContext.countDispatch("Decre")}>Decre</button>
      <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
    </div>
  );
}

export default ComA;
