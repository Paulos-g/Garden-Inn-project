import React from "react";
import Nav from "../components/nav-bar";
import Description from "../components/Description";
import GardenImage from "../components/img";
import Reception from "../assets/reception.png";
import Service from "../components/ServicesIcons";
import Image from "../components/Image";
import Card from "../components/card";
import doubleRoom from "../assets/Double_room.jpg";
import twinRoom from "../assets/Twin_room.jpg";
import singleRoom from "../assets/Single_room.webp";
import Button from "../components/Button";
import Header from "../components/Headers";
import Bar from "../assets/BarImage.jpg";
import restaurant from "../assets/restaurant.jpg";
import Check from "../components/checkinout";
import Icon from "../components/Icons";
import Machine from "../assets/machineimage.png";
import Fancy from "../components/FancyIcon";
import TextBox from "../components/Textbox";
import Counter from "../components/Counter";
import Map from "../components/map";
import Address from "../components/Adress";
import TwoColumn from "../components/Two_row";
import Sauna from "../assets/sauna.jpg";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          sTitle="Welcome to Garden Inn"
          bTitle={
            <>
              Comfort Stay <br />
              in the Heart of Nature
            </>
          }
          descrp=" Experience warm hospitality, modern comfort, and peacefull
              environment for truly, memorable stay"
          type="hero-image"
        />
      </div>
      <Check />
      <div data-aos="fade-up">
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
      </div>
      <Header text="Your Stay Begins Here" />
      <Fancy />
      <section id="Rooms">
        <div className="room-container">
          <div className="room-text">
            <h3 className="roomsHeading">Our Rooms</h3>
            <h1>
              Rooms & Suites <br /> Designed for You
            </h1>
            <p>
              From cozy rooms to spacious suits, Every space is crafted for your
              comfort and relaxation
            </p>
            <button className="viewBtn">
              View All rooms <Icon icon="fa-solid fa-arrow-right" />{" "}
            </button>
          </div>
          <div className="card">
            <div data-aos="fade-right">
              <Card
                ImgUrl={doubleRoom}
                alt="Double room"
                heading="Double Room"
                price="Starting from $150/ night"
                text="Sophisticated king-sized room with one plush king bed, high-quality
               linens"
              />
            </div>
            <Card
              ImgUrl={twinRoom}
              alt="twin room"
              heading="Twin room"
              price="Starting from $120/ night"
              text="Well-appointed twin classic room with two single beds,
             quality bedding"
            />
            <div data-aos="fade-left">
              <Card
                ImgUrl={singleRoom}
                alt="single rooom"
                heading="Single room"
                price="Starting from  $100/ night"
                text="Elegant single room featuring a comfortable single bed and premium linens"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id="Restaurant-Service"></section>
      <Header text="Step Into Relaxation & Flavor" />
      <Fancy />
      <section id="Restaurant-Service">
        <div className="room-container">
          <div className="room-text">
            <h3>Our services</h3>
            <h1>Luxury Bar & Restaurants for Your Stay.</h1>
            <p>From Our Exclusive bar into Spacious restaurant classy vibes</p>
          </div>

          <div className="card">
            <div className="romms-partion">
              <div data-aos="fade-right">
                <Card
                  ImgUrl={Bar}
                  alt="restaurant uimage"
                  heading="Garden Brau"
                  text="Enjoy our onsite brewey which we have been making for over 20 years,
               with our best chemists experience luxury on its another form"
                />
              </div>
              <div data-aos="fade-left">
                <Card
                  ImgUrl={restaurant}
                  alt="restaurant image"
                  heading="Our Restaurant"
                  text="Experience Meals in their organic nature, where every dish served with love
               and companinon, Try our famous chicken roast with rice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Header text="Crafted In House.Perfected In Taste" />
      <section id="Garden-Brau">
        <Fancy />
        <div className="card" data-aos="fade-up">
          <div className="beer-container">
            <div className="beer-img-cont">
              <Image imgURL={Machine} className="machine-image" />
            </div>
            <div className="beer-text-cont">
              <Header text={<>Brewed Here </>} className="brewText" />
              <Fancy />
              <div className="text-box-container">
                <TextBox text="Locally Sourced" />
                <TextBox text="Since 1992" />
                <TextBox text=" Craft brewed " />
              </div>

              <p className="brewDescription">
                Welcome to a stay where comfort meets craftsmanship. Our hotel
                is renowned for its locally brewed beer, carefully crafted by
                expert brewers with decades of experience. Each sip reflects
                tradition, quality, and passion, bringing you an authentic taste
                of the region. Relax in our cozy rooms after enjoying a
                refreshing glass straight from our in-house brewery. <br />{" "}
                <br /> The aroma of freshly brewed beer fills the atmosphere,
                creating a unique and inviting experience for every guest.
                Whether you’re here to unwind or explore, our expert team
                ensures every brew is perfected to delight your senses. At our
                hotel, great hospitality and exceptional beer come together in
                one unforgettable experience.
              </p>

              <div className="counter-container">
                <Counter
                  Number="35+"
                  text={
                    <>
                      YEARS <br /> BREWING
                    </>
                  }
                />
                <Counter
                  Number="100%"
                  text={
                    <>
                      NATURAL
                      <br /> INGREDIENTS
                    </>
                  }
                />
                <Counter
                  Number="12"
                  text={
                    <>
                      PARTNER <br /> COMPANIES
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Header text="Restore & Relax " />
        <Fancy />
        <div data-aos="fade-up">
          <div className="beer-container">
            <div>
              <div className="beer-img-cont">
                <Image imgURL={Sauna} className="sauna-image" />
              </div>
            </div>
            <div>
              <Header text="Sauna & Spa" className="brewText" />
              <Fancy />
              <div className="text-box-container">
                <TextBox text="Pure Relaxation" />
                <TextBox text="Since 1992" />
                <TextBox text=" Expert Therapists " />
              </div>
              <p className="brewDescription">
                Step into a sanctuary of calm at Garden Inn's private sauna and
                spa . From the moment you enter, the warmth of natural wood, the
                scent of eucalyptus, and the hush of tranquility draw you away
                from the world. Our specialist therapists offer bespoke
                treatments tailored to your needs — whether it's a revitalizing
                steam session, a deep-tissue massage, or a nourishing body wrap.
                Every experience is curated to restore your energy and soothe
                your senses.
              </p>
              <div className="counter-container">
                <Counter Number="12+" text={<>TREATMENTS</>} />
                <Counter
                  Number="30+"
                  text={
                    <>
                      EXPRETISED
                      <br /> PROFFESIONALS
                    </>
                  }
                />
                <Counter Number="4.9" text={<>GUEST RATING</>} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Header text="Book Your stay Today & Enjoy" />
      <Fancy />
      <p className="location-text">Location & Hours </p>
      <Header
        text={
          <div className="find-text">
            Find <span>Us</span>
          </div>
        }
      />
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
        <Fancy />
      </div>
      <Header text="Explore More of Us" />

      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}
export default Home;
