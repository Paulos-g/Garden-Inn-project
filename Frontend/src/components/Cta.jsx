import React from "react";

function Cta({ sTitle, bTitle, descrp }) {
  return (
    <section className="booking-cta" data-aos="fade-up">
      <div className="booking-cta__inner">
        <p className="booking-cta__label">{sTitle}</p>
        <h2 className="booking-cta__title">{bTitle}</h2>
        <p className="booking-cta__text">{descrp}</p>
        <div className="booking-cta__actions">
          <button className="cta-btn cta-btn--outline">
            <i className="fa-solid fa-phone" style={{ marginRight: 8 }}></i>{" "}
            Call Reception
          </button>
          <button className="cta-btn cta-btn--primary">Book Online Now</button>
        </div>
      </div>
    </section>
  );
}
export default Cta;
