import React from "react";
import Button from "./Button";

function Heading({
  sTitle,
  bTitle,
  descrp,
  type,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h3>{sTitle}</h3>
        <h1>{bTitle}</h1>
        <p>{descrp}</p>
        {(buttonText || secondaryButtonText) && (
          <div className="hero-actions">
            {buttonText && (
              <Button
                text={buttonText}
                to={buttonLink}
                className="hero-btn hero-btn--primary"
              />
            )}
            {secondaryButtonText && (
              <Button
                text={secondaryButtonText}
                to={secondaryButtonLink}
                className="hero-btn hero-btn--secondary"
              />
            )}
          </div>
        )}
      </div>
      {type && <div className={type}></div>}
    </section>
  );
}

export default Heading;
