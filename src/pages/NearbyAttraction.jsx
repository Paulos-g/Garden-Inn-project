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
  return <div></div>;
}
export default NearbyAttraction;
