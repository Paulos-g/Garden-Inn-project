import React from "react";
import Header from "../components/Headers";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import Fancy from "../components/FancyIcon";
import RoomNav from "../components/RoomNav";
import Card from "../components/card";
import SingleRoomImg from "../assets/Single_room.webp";
import TwinRoomImg from "../assets/Twin_room.jpg";
import DoubleRoomImg from "../assets/Double_room.jpg";
import Service from "../components/ServicesIcons";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import room from "../components/Room_Description";
import { Form } from "react-router-dom";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Room() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [roomName, setRoomName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [loading, setLoading] = useState(false);

  const twinRoom = "Twin";
  const doubleRoom = "Double";
  const singgleRoom = "Single";

  const handleRoom = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post(
        "/book/booking",
        {
          roomName,
          checkIn,
          checkOut,
          guests,
        },

        {
          withCredentials: true,
        },
      );
      navigate("/");
      toast.success("Room booked succesfully!!!");
    } catch (error) {
      toast.error("Cannot book room At the moment");
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRooms =
    category === "All" ? room : room.filter((p) => p.category === category);
  return (
    <div>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          sTitle="Garden Inn · Addis Ababa"
          bTitle="Rooms & Suits Designed for You"
          descrp={
            <>
              From intimate single rooms to signature garden suits <br /> Every
              rooms crafted for your comfort{" "}
            </>
          }
          type="content-container"
          buttonText="Book Now"
          buttonLink="/rooms"
          secondaryButtonText="Create Account"
          secondaryButtonLink="/register"
        />
      </div>
      <div data-aos="fade-up">
        <Header text="Choose Your Room" />
        <Fancy />
        <p className="brewDescription" style={{ textAlign: "center" }}>
          Every room is a carefully considered retreat. Browse our collection
          and find the <br /> perfect space for your stay.
        </p>
        <RoomNav
          setCategory={setCategory}
          twin={twinRoom}
          double={doubleRoom}
          single={singgleRoom}
          firstT="All"
          secondT="Single"
          thirdT="Twin"
          fourthT="Double"
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
        {filteredRooms.map((room, index) => (
          <div
            key={room.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Card
              ImgUrl={room.image}
              badge={room.badge}
              P={room.cardCategory}
              heading={room.title}
              description={room.description}
              roomSize={room.roomSize}
              guests={room.guests}
              amenities={room.amenities}
              startPrice={room.startPrice}
              buttonText={room.buttonText}
              price={room.price}
            />
          </div>
        ))}
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
            icon="fa-solid fa-van-shuttle"
            title="Airport shuttle"
            description="Complimentary 24/7 transfers to Bole Airport."
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
      <form className="booking-form" onSubmit={handleRoom}>
        <h2>Book Your Room</h2>

        <div className="input-group">
          <label>Room Type</label>
          <select
            name="roomName"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
          >
            <option value="">Select Room</option>
            <option value="Single Room">Single Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite">Suite</option>
            <option value="Family Room">Family Room</option>
          </select>
        </div>

        <div className="input-group">
          <label>Check In</label>
          <input
            type="date"
            name="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Check Out</label>
          <input
            type="date"
            name="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <button type="submit">{loading ? "Booking..." : "Book now"}</button>
      </form>
      <Cta
        sTitle="LIMITED AVAILABILITY"
        bTitle="Ready to Book Your Stay?"
        descrp="    Our team is available 24/7 to help you find the perfect room.
          Reservations can also be made by phone."
      />
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}
export default Room;
