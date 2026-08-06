import React from "react";
import { Link } from "react-router-dom";

function Button({ text, className, to, buttonLink }) {
  const destination = to || buttonLink;

  const button = (
    <button type="button" className={`bookBtn ${className || ""}`}>
      {text}
    </button>
  );

  return destination ? <Link to={destination}>{button}</Link> : button;
}

export default Button;
