import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" Count={age}></Count>
      <Button handleClick={incrementAge}>incrementAge</Button>
      <Count text="salary" Count={salary}></Count>
      <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}

export default ParentComponent;
