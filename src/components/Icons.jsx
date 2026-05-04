import React from "react";

function Icon(props) {
  return (
    <div className="Icon-container">
      <i className={`${props.icon} ${props.className || ""}`.trim()}></i>
      <p>{props.title}</p>
    </div>
  );
}
export default Icon;
