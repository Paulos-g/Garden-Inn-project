import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.ImgUrl} alt="" />
      <div className="card-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <Button text="Learn more" className="cardBtn" />
      </div>
    </div>
  );
}
export default Card;
