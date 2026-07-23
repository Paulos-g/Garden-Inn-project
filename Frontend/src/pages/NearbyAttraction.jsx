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
import RoomNav from "../components/RoomNav";
import places from "../components/NearbyDescription";
import Card from "../components/card";
import Map from "../components/map";
import Address from "../components/Adress";
function NearbyAttraction() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [category, setCategory] = useState("All");
  const filteredPlaces =
    category === "All"
      ? places
      : places.filter((place) => place.category === category);

  return (
    <div>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          type="content-container"
          sTitle="Garden Inn · Bole Medhanialem"
          bTitle="Explore What's Around You"
          descrp="Bole Medhanialem is one of Addis Ababa's most vibrant
       neighbourhoods — malls, markets, cafés, cultural landmarks
        and the international airport, all within walking distance."
        />
      </div>
      <div data-aos="fade-up">
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
          Everything you need is on your doorstep. From iconic churches and{" "}
          <br />
          shopping malls to the best coffee in Africa — Bole Medhanialem has it
          all.
        </p>
        <RoomNav
          setCategory={setCategory}
          firstT="All"
          secondT="Landmarks"
          thirdT="Shopping Malls"
          fourthT="Supermarkets"
          fifthT="Dining"
          sixthF="Beauty Salon"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          justifyContent: "center",
          gap: "30px",
          margin: "40px auto",
          maxWidth: "1400px",
          padding: "0 20px",
        }}
      >
        {filteredPlaces.map((places, index) => (
          <div
            key={places.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Card
              ImgUrl={places.image}
              badge={places.tag}
              // P={places.category}
              heading={places.name}
              description={places.description}
              roomSize={places.roomSize}
              tips={places.tips}
              info1={places.distance}
              info2={places.distanceNum}
            />
          </div>
        ))}
      </div>
      <Header sText="Find Us" text="We're Right in the Heart of It" />
      <Fancy />
      <div data-aos="fade-up">
        <div className="map-box">
          <div className="map-partition">
            <Map />
            <div className="location-text">
              <Header text="How to reach Us" className="reach-heading" />
              <hr style={{ border: "1px solid #b8860b", margin: "16px 0" }} />
              <Address
                Heading="Address"
                Icon="fa-solid fa-location-dot"
                Area="Bole Avenue Behind Edna Mall"
                street="8th street, Rwanda"
                Country="ADDIS ABABA, ETHIOPIA"
              />
              <Address
                Heading="Opening Hours"
                Icon="fa-solid fa-clock"
                Area=" Restaurant |Mon-Fri 24Hrs 7am-11pm| "
                street="Brewery |Sat-Sun 24Hrs  11am-6pm| "
              />
            </div>
          </div>
        </div>
        <Cta
          sTitle="Your Base Camp in Bole"
          bTitle="Stay at Garden Inn & Explore Everything"
          descrp="    The perfect location in Addis Ababa
           — walk to malls, churches and restaurants, with
            the airport just 1 km away and our free shuttle
             always on standby."
        />
        <Footer />
      </div>
    </div>
  );
}
export default NearbyAttraction;
