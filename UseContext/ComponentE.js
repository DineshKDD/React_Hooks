import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "./UserContext";
function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <ComponentF></ComponentF>
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
