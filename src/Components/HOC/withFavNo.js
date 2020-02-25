import React from "react";

export function withFavNo(component) {
  const HocAppComponent = component;

  /**Return the modified App component with new props while retaining the old props */
  return function(props) {
    return <HocAppComponent favNo="42" {...props} />;
  };
}
