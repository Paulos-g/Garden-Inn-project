import React from "react";

function Cta() {
  return (
    <section className="booking-cta" data-aos="fade-up">
      <div className="booking-cta__inner">
        <p className="booking-cta__label">LIMITED AVAILABILITY</p>
        <h2 className="booking-cta__title">Ready to Book Your Stay?</h2>
        <p className="booking-cta__text">
          Our team is available 24/7 to help you find the perfect room.
          Reservations can also be made by phone.
        </p>
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
