import React from "react";
import Button from "./Button";

function Heading({ sTtitle, bTitle, descrp }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h3>{sTtitle}</h3>
        <h1>{bTitle}</h1>
        <p>{descrp}</p>
        <Button text="Explore Rooms" />
      </div>
      <div className="hero-image"></div>
    </section>
  );
}
export default Heading;
