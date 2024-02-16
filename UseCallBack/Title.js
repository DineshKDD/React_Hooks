import React from "react";

function Title(props) {
  console.log("renderng title");
  return <div>UseCallBack Method{props.children}</div>;
}

export default React.memo(Title);
