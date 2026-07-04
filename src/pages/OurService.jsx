import React from "react";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

function OurService() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          sTitle="Garden Inn · Addis Ababa"
          type="content-container"
          bTitle="Exceptional Services At Every Turn"
          buttonText="Order Now"
          descrp="From our craft brewery to world-class wellness, every service at Garden Inn is crafted to make your stay unforgettable."
        />
      </div>
    </div>
  );
}
export default OurService;
