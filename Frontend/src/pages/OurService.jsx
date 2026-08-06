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
import SaunaImg from "../assets/sauna.jpg";
import BreweryImg from "../assets/BarImage.jpg";
import RestaurantImg from "../assets/restaurant.jpg";
import AirportImg from "../assets/reception.png";
import WifiImg from "../assets/machineimage.png";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function OurService() {
  const [selectedService, setSelectedService] = useState(0); // to display the UI
  const [serviceName, setService] = useState(""); // to send the selected servvice to the DB
  const [date, setDate] = useState("");
  const [guest, setGuestNo] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const navigate = useNavigate();

  const handleService = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await api.post(
        "/service/post",
        {
          serviceName,
          guest,
          date,
        },
        { withCredentials: true },
      );
      navigate("/");
      toast.success("Service Booked succesfully");
    } catch (error) {
      toast.error("Cannot book service");

      console.error("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      id: 1,
      title: "Sauna & Spa",
      category: "PURE RELAXATION",
      badge: "WELLNESS",
      image: SaunaImg,
      description:
        "Step into a sanctuary of calm at Garden Inn's private sauna and spa. Our specialist therapists offer bespoke treatments tailored to your needs — whether it's a revitalising steam session, a deep-tissue massage, or a nourishing body wrap.",
      features: [
        "Traditional Finnish sauna",
        "Deep tissue & Swedish massage",
        "Open daily 8am – 9pm",
        "Aromatherapy steam room",
        "Facial & skin treatments",
        "Couples packages available",
      ],
      stats: [
        { number: "12+", label: "Treatments" },
        { number: "30+", label: "Expert Therapists" },
        { number: "4.9", label: "Guest Rating" },
      ],
      buttonText: "Book Treatment",
    },
    {
      id: 2,
      title: "Garden Brau",
      category: "CRAFTED IN HOUSE",
      badge: "BREWERY",
      image: BreweryImg,
      description:
        "Enjoy our onsite brewery — over 35 years of craft tradition in every glass. Our expert brewers use 100% natural local ingredients to produce ales, lagers, and seasonal specials that you won't find anywhere else.",
      features: [
        "Locally sourced grain & hops",
        "Seasonal & limited brews",
        "Bar open Sat–Sun 11am – 6pm",
        "6 signature craft ales on tap",
        "Guided brewery tours daily",
        "Take-home bottles available",
      ],
      stats: [
        { number: "35+", label: "Years Brewing" },
        { number: "100%", label: "Natural" },
        { number: "12", label: "Partner Farms" },
      ],
      buttonText: "Order Now",
    },
    {
      id: 3,
      title: "Our Restaurant",
      category: "ORGANIC & ELEVATED",
      badge: "DINING",
      image: RestaurantImg,
      description:
        "Experience meals in their most organic form — every dish served with love and companionship. Our head chef sources produce daily from local farms, bringing seasonal Ethiopian and international cuisine to your table.",
      features: [
        "Full Ethiopian & international menu",
        "Private dining room for 20",
        "Mon–Fri 7am – 11pm",
        "Wood-fired speciality dishes",
        "Event catering & banquets",
        "Traditional coffee ceremony",
      ],
      stats: [
        { number: "Farm-to-Table", label: "Sourcing" },
        { number: "Open Daily", label: "Hours" },
        { number: "Private Dining", label: "Available" },
      ],
      buttonText: "Make Reservation",
    },
    {
      id: 4,
      title: "Airport Shuttle",
      category: "DOOR TO DOOR",
      badge: "AIRPORT SHUTTLE",
      image: AirportImg,
      description:
        "Just 1 km from Bole International Airport, Garden Inn offers complimentary 24/7 shuttle transfers for all guests. Our courteous drivers track your flight in real time so you never wait at arrivals.",
      features: [
        "Arrivals & departures covered",
        "Real-time flight tracking",
        "Fully insured fleet",
        "Child seats on request",
        "24 hours, 7 days a week",
        "Complimentary for all guests",
      ],
      stats: [
        { number: "24/7", label: "Available" },
        { number: "1 km", label: "from Airport" },
        { number: "Flight", label: "Tracked" },
      ],
      buttonText: "Book Transfer",
    },
    {
      id: 5,
      title: "High-Speed Wi-Fi",
      category: "ALWAYS CONNECTED",
      badge: "HIGH-SPEED WI-FI",
      image: WifiImg,
      description:
        "Stay seamlessly connected with our fibre-optic Wi-Fi covering every corner of the hotel — rooms, restaurant, spa, and garden terrace. Ideal for remote workers and travellers alike.",
      features: [
        "Fibre-optic 1 Gbps connection",
        "Full indoor & outdoor coverage",
        "Dedicated co-working lounge",
        "Printing & scanning on request",
        "WPA3-secured private network",
        "Complimentary, no login cap",
      ],
      stats: [
        { number: "1 Gbps", label: "Speed" },
        { number: "Full", label: "Coverage" },
        { number: "Free", label: "for Guests" },
      ],
      buttonText: "Learn More",
    },
  ];

  return (
    <div>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          sTitle="Garden Inn · Addis Ababa"
          type="content-container"
          bTitle="Exceptional Services At Every Turn"
          buttonText="Order Now"
          descrp="From our craft brewery to world-class wellness, every service at Garden Inn is crafted to make your stay unforgettable."
        />
        <Header sText="WHAT WE OFFER" text="Our Services" />
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
          Six curated experiences — each one a reason on its own to choose
          Garden <br /> Inn. Click any service to highlight it.
        </p>
      </div>
      <div data-aos="fade-up" style={{ marginTop: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(index)}
              style={{ cursor: "pointer" }}
            >
              <ServiceCard
                title={service.title}
                category={service.category}
                badge={service.badge}
                image={service.image}
                description={service.description}
                features={service.features}
                stats={service.stats}
                buttonText={service.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
      <Header
        style={{ marginTop: "80px" }}
        sText="Guest Voices"
        text="What Our Guests Say"
      />
      <Fancy />
      <div
        data-aos="fade-up"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "60px auto",
          padding: "0 20px",
        }}
      >
        <SuggestionCard
          rating={5}
          quote="The sauna and spa experience was unlike anything I've had at a hotel. Pure indulgence — I booked an extra night just to go back."
          guestName="Miriam T."
          guestLocation="Nairobi"
          serviceBadge="Sauna & Spa"
        />
        <SuggestionCard
          rating={5}
          quote="Garden Brau is the real deal. We did the brewery tour and the tasting — the head brewer knows his craft. The seasonal ale was outstanding."
          guestName="James O."
          guestLocation="London"
          serviceBadge="Garden Brau"
        />
        <SuggestionCard
          rating={5}
          quote="Shuttle was waiting at arrivals before I even got my bags. The driver tracked my delayed flight and still got there first. Impressive."
          guestName="Asel K."
          guestLocation="Dubai"
          serviceBadge="Airport Shuttle"
        />
      </div>
      <form onSubmit={handleService}>
        <div className="form-container">
          <h2>Reserve a Service</h2>

          <label>Service</label>
          <select
            name="service"
            className="form-input"
            value={serviceName}
            required
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="Spa">Spa</option>
            <option value="Sauna">Sauna</option>
            <option value="Gym">Gym</option>
          </select>

          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="Enter number of guests"
            value={guest}
            required
            className="form-input"
            onChange={(e) => setGuestNo(e.target.value)}
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            className="form-input"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="submit-btn">
            {loading ? "Reserving Service..." : "Reserve"}
          </button>
        </div>
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
export default OurService;
