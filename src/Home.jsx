import React from "react";
import Nav from "./components/nav-bar";
import Description from "./components/Description";
import GardenImage from "./components/img";
import Reception from "./assets/reception.png";
import Service from "./components/ServicesIcons";
import Image from "./components/Image";
import Card from "./components/card";
import doubleRoom from "./assets/Double_room.jpg";
import twinRoom from "./assets/Twin_room.jpg";
import singleRoom from "./assets/Single_room.webp";
import Button from "./components/Button";
import Header from "./components/Headers";

function Home() {
  return (
    <>
      <Nav />
      <section className="hero"></section>
      <Header
        text={
          <>
            Welcome to <br /> Garden Inn Appartments & Hotels
          </>
        }
      />

      <div className="descriptContainer">
        <Description />
        <img className="receptionImg" src={Reception} alt="reception image" />
      </div>
      <div className="icons">
        <Service icon="fa-solid fa-wifi" title="High speed internet" />
        <Service icon="fa-solid fa-bed" title="Comfy bed" />
        <Service
          icon="fa-solid fa-location-dot"
          title="1 km from bole airport"
        />
        <Service icon="fa-solid fa-bus" title="24/7 shuttle service" />
        <Service icon="fa-solid fa-building shield" title="Highly secure" />
      </div>
      <Header text="Our Accommodations" />
      <div className="card">
        <Card
          ImgUrl={doubleRoom}
          alt="Double room"
          heading="Double room"
          text="“Sophisticated king-sized room with one plush king bed, high-quality
         linens, soft lighting, and tasteful contemporary design. A calm, stylish 
         space equipped with essential modern amenities for a relaxing stay"
        />
        <Card
          ImgUrl={twinRoom}
          alt="twin room"
          heading="Twin room"
          text="Well-appointed twin classic room with two single beds,
         quality bedding, soft lighting, and a calm, functional design."
        />
        <Card
          ImgUrl={singleRoom}
          alt="single rooom"
          heading="Single room"
          text="Elegant single room featuring a comfortable single bed
        , premium linens, warm ambient lighting, and refined décor. Includes
         air conditioning,
         high-speed WiFi, and a private bathroom for a relaxing stay"
        />
      </div>
    </>
  );
}
export default Home;
