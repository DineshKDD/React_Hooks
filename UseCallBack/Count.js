import React from "react";

function Count(props) {
  console.log("Rendering", props.text);
  return <div>{props.Count}</div>;
}

export default React.memo(Count);
