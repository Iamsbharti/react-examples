import { useState } from "react";

function useToggler(defaultOnValue = false) {
  const [isToggledOn, setIsToggledOn] = useState(defaultOnValue);

  function toggle() {
    setIsToggledOn(prevOnValue => !prevOnValue);
  }
  return [isToggledOn, toggle];
}
export default useToggler;
