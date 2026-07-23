import React from "react";
import { Link } from "react-router-dom";

function Button({ text, className, to }) {
  return (
    <Link to={to}>
      <button className={`bookBtn ${className || ""}`}>{text}</button>
    </Link>
  );
}
export default Button;
