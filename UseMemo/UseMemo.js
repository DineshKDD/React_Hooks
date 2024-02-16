import React, { useState, useMemo } from "react";

function UseMemo() {
  const [One, setOne] = useState(0);
  const [Two, setTwo] = useState(0);

  const increOne = () => {
    setOne(One + 1);
  };
  const increTwo = () => {
    setTwo(Two + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 299999999) i++;
    return One % 2 === 0;
  }, [One]);
  return (
    <div>
      <button onClick={increOne}>setOne-{One}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={increTwo}>setTwo-{Two}</button>
    </div>
  );
}

export default UseMemo;
