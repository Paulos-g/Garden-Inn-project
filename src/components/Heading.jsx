import React from "react";
import Button from "./Button";

function Heading({ sTitle, bTitle, descrp, type }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h3>{sTitle}</h3>
        <h1>{bTitle}</h1>
        <p>{descrp}</p>
        <Button text="Explore Rooms" />
      </div>
      <div
        className={type === "hero-image" ? "hero-image" : "content-container"}
      ></div>
    </section>
  );
}
export default Heading;
