import React from "react";

function Service(props) {
  return (
    <div className="icon-container">
      <i className={props.icon}></i>
      <p>{props.title}</p>
    </div>
  );
}
export default Service;
