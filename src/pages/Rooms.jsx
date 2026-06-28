import React from "react";
import Header from "../components/Headers";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fancy from "../components/FancyIcon";
import RoomNav from "../components/RoomNav";
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
          sTitle="GARDEN INN ADDIS ABABA"
          bTitle="Rooms & Suits Designed for You"
          descrp={
            <>
              From intimate single rooms to signature garden suits <br /> Every
              rooms crafted for your comfort{" "}
            </>
          }
          type="content-container"
          buttonText="Book Now"
        />
      </div>
      <Header text="Choose Your Room" />
      <Fancy />
      <p className="brewDescription" style={{ textAlign: "center" }}>
        Every room is a carefully considered retreat. Browse our collection and
        find the <br /> perfect space for your stay.
      </p>
      <RoomNav />
    </div>
  );
}
export default Room;
