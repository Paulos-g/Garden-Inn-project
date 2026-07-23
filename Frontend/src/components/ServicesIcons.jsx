import React from "react";

function Service(props) {
  return (
    <div className="icon-container">
      <i className={props.icon}></i>
      <p className="service-title">{props.title}</p>
      {props.description && (
        <p className="service-description">{props.description}</p>
      )}
    </div>
  );
}
export default Service;
