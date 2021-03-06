import React from "react";
import DataFetch from "./DataFetch";

function RenderPropChallangeApp(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <DataFetch>
        {({ loading, data }) => {
          return loading ? (
            <h1>API is Loading..</h1>
          ) : (
            <p>{JSON.stringify(data)}</p>
          );
        }}
      </DataFetch>
    </div>
  );
}
export default RenderPropChallangeApp;
