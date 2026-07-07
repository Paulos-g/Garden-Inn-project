import React, { useState } from "react";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";
import Header from "../components/Headers";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fancy from "../components/FancyIcon";
import ServiceCard from "../components/ServiceCard";
import SuggestionCard from "../components/SuggestionCard";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
function NearbyAttraction() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
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
      <Header sText="Bole Medhanialem Area" text="Nearby Attractions" />
      <Fancy />
      <p
        style={{
          textAlign: "center",
          color: "#587c9b",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        Everything you need is on your doorstep. From iconic churches and <br />
        shopping malls to the best coffee in Africa — Bole Medhanialem has it
        all.
      </p>
    </div>
  );
}
export default NearbyAttraction;
