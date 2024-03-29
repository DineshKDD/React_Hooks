import React, { useEffect, useState } from "react";

function MouseEffectsFun() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks:{x} - Hooks:{y}
    </div>
  );
}

export default MouseEffectsFun;
