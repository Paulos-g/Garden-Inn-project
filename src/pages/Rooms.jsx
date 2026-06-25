import React, { use } from "react";
import Header from "../components/Headers";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Room() {
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
          sTtitle="GARDEN INN ADDIS ABABA"
          bTitle="Rooms & Suits Designed for You"
          descrp={
            <>
              From inttimate single rooms to signature garden suits <br /> Every
              rooms crafted for your comfort{" "}
            </>
          }
        />
      </div>
    </div>
  );
}
export default Room;
