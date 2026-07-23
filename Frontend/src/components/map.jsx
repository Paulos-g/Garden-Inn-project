import React from "react";

function Map() {
  return (
    <div className="map-frame">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7498593563005!2d38.78370277478023!3d8.995149591064862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85027afb60d3%3A0x100095e40b65a040!2sBeer%20Garden%20Inn!5e0!3m2!1sen!2set!4v1779101927101!5m2!1sen!2set"
        width="600px"
        height="500px"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Garden INN location"
      ></iframe>
    </div>
  );
}
export default Map;
