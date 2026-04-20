import React from "react";

function Button({ text, className }) {
  return <button className={`bookBtn ${className || ""}`}>{text}</button>;
}
export default Button;
