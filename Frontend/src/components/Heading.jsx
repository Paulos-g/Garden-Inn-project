import React from "react";
import Button from "./Button";

function Heading({ sTitle, bTitle, descrp, type, buttonText, buttonLink }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h3>{sTitle}</h3>
        <h1>{bTitle}</h1>
        <p>{descrp}</p>
        {buttonText && <Button text={buttonText} to={buttonLink} />}
      </div>
      {type && <div className={type}></div>}
    </section>
  );
}
export default Heading;
