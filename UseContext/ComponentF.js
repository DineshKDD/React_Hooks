import React from "react";
import { UserContext, ChannelContext } from "./UserContext";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext>
              {(channel) => {
                return (
                  <div>
                    User context value {user} , and channel context value{" "}
                    {channel}
                  </div>
                );
              }}
            </ChannelContext>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
