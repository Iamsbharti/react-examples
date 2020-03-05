import React from "react";
import UserContext from "./userContext";
import Header from "./Header";

function FuContextApp() {
  return (
    <div>
      <Header />
      <main>
        <UserContext.Consumer>
          {username => <h1>No New Notifications, {username}</h1>}
        </UserContext.Consumer>
      </main>
    </div>
  );
}
export default FuContextApp;
