import React from "react";
import useToggler from "./useToggler";

function Favorite() {
  const [like, toggle] = useToggler(false);
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{like ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}
export default Favorite;
