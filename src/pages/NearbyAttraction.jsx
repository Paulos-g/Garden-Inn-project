// import React, { useState } from "react";
import React from "react";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import Header from "../components/Headers";
import "aos/dist/aos.css";
// import { useEffect } from "react";
import Fancy from "../components/FancyIcon";
function NearbyAttraction() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 800,
  //       once: true,
  //     });
  //   }, []);
  return (
    <div>
      <Nav />

      <Heading
        type="content-container"
        sTitle="Garden Inn · Bole Medhanialem"
        bTitle="Explore What's Around You"
        descrp="Bole Medhanialem is one of Addis Ababa's most vibrant
       neighbourhoods — malls, markets, cafés, cultural landmarks
        and the international airport, all within walking distance."
      />
    </div>
  );
}
export default NearbyAttraction;
