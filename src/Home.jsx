import React from "react";
import Nav from "./components/nav-bar";
import Description from "./components/Description";
import GardenImage from "./components/img";
import Reception from "./assets/reception.png";
import Service from "./components/ServicesIcons";
import Image from "./components/Image";
// import BarImg from "./assets/BarImg.jpg";
import RestaurantImg from "./assets/restaurant.jpg";

function Home() {
  return (
    <>
      <Nav />
      <section className="hero"></section>
      <h2>
        Welcome To <br />
        Garden Inn Appartments & Hotels
      </h2>
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
      <h2>Our Accommodations</h2>
      {/* <Image imgURL={BarImg} alt="image of a bar" /> */}
      {/* <Image imgURL={RestaurantImg} alt="iage of restaurant" /> */}
    </>
  );
}
export default Home;
