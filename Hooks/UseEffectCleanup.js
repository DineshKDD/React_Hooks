import React, { useState } from "react";
import MouseEffectsFun from "./MouseEffectsFun";

function UseEffectCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <MouseEffectsFun />}
    </div>
  );
}

export default UseEffectCleanup;
