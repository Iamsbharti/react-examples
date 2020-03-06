import React from "react";
import { UserContextProvider } from "./userContext";
import ChallengeApp from "./ChallengeApp";

function ChallengeIndex() {
  return (
    <UserContextProvider>
      <ChallengeApp />
    </UserContextProvider>
  );
}
export default ChallengeIndex;
