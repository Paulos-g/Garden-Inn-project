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
import Bar from "./assets/BarImage.jpg";
import restaurant from "./assets/restaurant.jpg";
import Check from "./components/checkinout";
import Icon from "./components/Icons";

function Home() {
  return (
    <>
      <Nav />
      <section className="hero">
        <div className="hero-text">
          <h3>Welcome to Garden Inn</h3>
          <h1>
            Comfort Stay <br />
            in the Heart of Nature
          </h1>
          <p>
            Experience warm hospitality, modern comfort, and peacefull
            environment for truly, memorable stay
          </p>
          <Button text="Explore Rooms" />
        </div>
        <div className="hero-image"></div>
      </section>
      {/* <div className="welcomeContainer">
        <div className="descriptContainer">
          <Description />
          <img className="receptionImg" src={Reception} alt="reception image" />
        </div>
      </div> */}
      <Check />
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
      <Header text="Your Stay Begins Here" />
      <section id="Rooms">
        <div className="room-container">
          <div className="room-text">
            <h3>Our Rooms</h3>
            <h2>
              Rooms & Suites <br /> Designed for You
            </h2>
            <p>
              From cozy rooms to spacious suits, Every space is crafted for your
              comfort and relaxation
            </p>
            <button className="viewBtn">
              View All rooms <Icon icon="fa-solid fa-arrow-right" />{" "}
            </button>
          </div>
          <div className="card">
            <Card
              ImgUrl={doubleRoom}
              alt="Double room"
              heading="Double room"
              price="Starting from $150/ night"
              text="Sophisticated king-sized room with one plush king bed, high-quality
         linens"
            />
            <Card
              ImgUrl={twinRoom}
              alt="twin room"
              heading="Twin room"
              price="Starting from $120/ night"
              text="Well-appointed twin classic room with two single beds,
         quality bedding"
            />
            <Card
              ImgUrl={singleRoom}
              alt="single rooom"
              heading="Single room"
              price="Starting from  $100/ night"
              text="Elegant single room featuring a comfortable single bed and premium linens"
            />
          </div>
        </div>
      </section>
      <br />
      <Header text="Step Into Relaxation & Flavor" />
      <section id="Restaurant Service">
        <div className="room-container">
          <div className="room-text">
            <h3>Our services</h3>
            <h2>Luxury Bar & Restaurants for Your Stay.</h2>
            <p>From Our Exclusive bar into Spacious restaurant classy vibes</p>
          </div>

          <div className="card">
            <Card
              ImgUrl={Bar}
              alt="restaurant uimage"
              heading="Garden Brau"
              text="Enjoy our onsite brewey which we have been making for over 20 years,
      with our best chemists experience luxury on its another form"
            />

            <Card
              ImgUrl={restaurant}
              alt="restaurant image"
              heading="Our restaurant"
              text="Experience Meals in their organic nature, where every dish served with love
      and companinon, Try our famous chicken roast with rice"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
