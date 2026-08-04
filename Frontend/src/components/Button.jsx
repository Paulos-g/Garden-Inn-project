import React from "react";
import { Link } from "react-router-dom";

function Button({ text, className, to }) {
  const button = (
    <button type="button" className={`bookBtn ${className || ""}`}>
      {text}
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
}

export default Button;
