import React from "react";
import DataFetch from "./DataFetch";

function RenderPropChallangeApp() {
  return (
    <DataFetch>
      {({ loading, data }) => {
        return loading ? (
          <h1>API is Loading..</h1>
        ) : (
          <p>{JSON.stringify(data)}</p>
        );
      }}
    </DataFetch>
  );
}
export default RenderPropChallangeApp;
