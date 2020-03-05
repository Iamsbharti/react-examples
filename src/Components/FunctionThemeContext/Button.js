import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button className={`${props.theme}-theme`}>Switch Theme</button>;
}

Button.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"])
};
Button.defaultProps = {
  theme: "dark"
};
export default Button;
