import React from "react";
import Header from "../components/Headers";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Fancy from "../components/FancyIcon";
import RoomNav from "../components/RoomNav";
import Card from "../components/card";
import SingleRoomImg from "../assets/Single_room.webp";
import TwinRoomImg from "../assets/Twin_room.jpg";
import DoubleRoomImg from "../assets/Double_room.jpg";
import Service from "../components/ServicesIcons";
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
        <div data-aos="fade-right">
          <Card
            ImgUrl={DoubleRoomImg}
            badge="MOST POPULAR"
            P="KING-SIZED LUXURY"
            heading="Double Room"
            text="Sophisticated king-sized sanctuary with premium linens, a rain shower, and sweeping garden views. Perfect for couples seeking refined comfort."
            roomSize="32 m²"
            guests="2 guests"
            amenities={["King Bed", "Rain Shower", "Garden View", "Mini Bar"]}
            buttonText="Book Now"
            price="$150 / night"
          />
        </div>
        <Card
          ImgUrl={TwinRoomImg}
          P="FLEXIBLE COMFORT"
          heading="Twin Room"
          text="Well-appointed twin room with two premium single beds, ideal for friends or colleagues. Quality bedding and thoughtful amenities throughout."
          roomSize="28 m²"
          guests="2 guests"
          amenities={["2 Single Beds", "Desk", "City View", "Coffee Maker"]}
          buttonText="Book Now"
          price="$120 / night"
        />
        <div data-aos="fade-left">
          <Card
            ImgUrl={SingleRoomImg}
            badge="BEST VALUE"
            P="EFFICIENT ELEGANCE"
            heading="Single Room"
            text="Elegant single room with a plush single bed and premium linens, everything you need, nothing you don't, designed for the solo traveler."
            roomSize="22 m²"
            guests="1 guests"
            amenities={[
              "Single Bed",
              "Work Desk",
              "Courtyard View",
              "Coffee Maker",
              "43' Tv",
              "buuuu",
            ]}
            startPrice="Starting from"
            buttonText="Book Now"
            price="$100 / night"
          />
        </div>
      </div>
      <Header sText="THE GARDEN INN PROMISE" text="Every Stay Includes" />
      <Fancy />
      <div data-aos="fade-up">
        <div className="icons">
          <Service
            icon="fa-solid fa-wifi"
            title="High speed internet"
            description="Ultra-fast WiFi throughout the hotel"
          />
          <Service
            icon="fa-solid fa-plate-wheat"
            title="Breakfast"
            description="Complimentary daily breakfast"
          />
          <Service
            icon="fa-solid fa-shuttle-space"
            title="Airport shuttle"
            description="Free airport transportation service"
          />
          <Service
            icon="fa-solid fa-leaf"
            title="Eco certified"
            description="Environmentally responsible practices"
          />
          <Service
            icon="fa-solid fa-lock"
            title="Fully secured"
            description="24/7 security & surveillance"
          />
          <Service
            icon="fa-solid fa-spa"
            title="Sauna & spa"
            description="Access to premium wellness facilities"
          />
        </div>
      </div>
    </div>
  );
}
export default Room;
