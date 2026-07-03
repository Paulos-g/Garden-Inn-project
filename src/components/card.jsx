import React from "react";
import Button from "./Button";
import Icon from "./Icons";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.ImgUrl} alt="" />
      <div className="card-text">
        <div className="heading-price">
          <p
            style={{ color: "#f2ad74", fontFamily: "Playfair Display, serif " }}
          >
            {props.P}
          </p>
          <h2>{props.heading}</h2>
        </div>

        <p>{props.text}</p>
        {props.buttonText && <Button text={props.buttonText} />}

        <hr style={{ border: "1px solid #b8860b", margin: "16px 0" }} />
        <h2 className="price-text">{props.price}</h2>
        <hr style={{ border: "1px solid #b8860b", margin: "16px 0" }} />
      </div>
    </div>
  );
}
export default Card;
