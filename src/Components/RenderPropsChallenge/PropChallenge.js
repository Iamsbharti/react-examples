import React from "react";
import FetchFunctionl from "./FetchFunctional";

function PropChallange() {
  return (
    <div>
      <FetchFunctionl
        render={({ loading, data }) => {
          console.log(loading);
          return loading ? (
            <h1>API is Loading..</h1>
          ) : (
            <p>{JSON.stringify(data)}</p>
          );
        }}
      />
    </div>
  );
}

export default PropChallange;
