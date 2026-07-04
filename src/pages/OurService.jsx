import React from "react";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";

function OurService() {
  return (
    <div>
      <Nav />
      <Heading
        sTitle="Garden Inn · Addis Ababa"
        type="content-container"
        bTitle="Exceptional Services At Every Turn"
        buttonText="Order Now"
        descrp="From our craft brewery to world-class wellness, every service at Garden Inn is crafted to make your stay unforgettable."
      />
    </div>
  );
}
export default OurService;
