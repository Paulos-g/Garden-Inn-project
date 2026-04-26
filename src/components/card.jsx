import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.ImgUrl} alt="" />
      <div className="card-text">
        <div className="heading-price">
          <h2>{props.heading}</h2>
          <p className="price-text">{props.price}</p>
        </div>

        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default Card;
