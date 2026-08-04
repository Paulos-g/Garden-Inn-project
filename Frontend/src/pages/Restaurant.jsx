import React from "react";
import Nav from "../components/nav-bar";
import Footer from "../components/Footer";
import "./Restaurant.css";
import Heading from "../components/Heading";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

function Restaurant() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [tableNo, setTableNo] = useState("");
  const [guestNo, setGuestNo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post(
        "/tables/reserve",
        {
          tableNo,
          guestNo,
          date,
        },
        {
          withCredentials: true,
        },
      );
      toast.success("Table reserved successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Cannot reserve table.");
    } finally {
      setIsLoading(false);
    }
  };

  const menuItems = {
    breakfast: [
      {
        name: "Garden Omelette",
        tag: "Popular",
        desc: "3 eggs, seasonal herbs, goat cheese",
        price: "ETB 180",
      },
      {
        name: "Injera Breakfast Platter",
        tag: "",
        desc: "Ful, tibs, fresh tomato, greens",
        price: "ETB 150",
      },
      {
        name: "French Toast",
        tag: "New",
        desc: "Sourdough, honey, garden berries",
        price: "ETB 160",
      },
      {
        name: "Fresh Juice Board",
        tag: "",
        desc: "Avocado, mango, or mixed fruit",
        price: "ETB 90",
      },
    ],
    lunch: [
      {
        name: "Grilled Tilapia",
        tag: "",
        desc: "Lemon butter, garden herbs, rice",
        price: "ETB 320",
      },
      {
        name: "Garden Salad Bowl",
        tag: "Popular",
        desc: "Mixed greens, tomato, vinaigrette",
        price: "ETB 140",
      },
      {
        name: "Lamb Tibs Sandwich",
        tag: "",
        desc: "Spiced lamb, awaze, fresh bread",
        price: "ETB 280",
      },
      {
        name: "Shiro Stew",
        tag: "New",
        desc: "Slow-cooked, spiced chickpea paste",
        price: "ETB 130",
      },
    ],
    dinner: [
      {
        name: "Beef Tenderloin",
        tag: "Popular",
        desc: "Garden herb crust, roasted veg",
        price: "ETB 580",
      },
      {
        name: "Vegetarian Injera Feast",
        tag: "",
        desc: "Beyaynetu — 7 seasonal sides",
        price: "ETB 220",
      },
      {
        name: "Whole Roasted Chicken",
        tag: "",
        desc: "Berbere spice, honey glaze, fries",
        price: "ETB 420",
      },
      {
        name: "Chef's Tasting Board",
        tag: "New",
        desc: "Rotating selection, serves 2",
        price: "ETB 750",
      },
    ],
  };

  return (
    <>
      <Nav />
      <div data-aos="fade-up">
        <Heading
          sTitle="Garden Inn · Addis Ababa"
          type="content-container"
          bTitle="Dining at Garden Inn"
          buttonText="Order Now"
          descrp="Fresh ingredients from our own garden, crafted into meals that feel like home — only better. Open for breakfast, lunch, and dinner."
        />
      </div>
      <div className="restaurant-page" style={{ marginTop: "30px" }}>
        {/* Top Header Section */}
        <section className="restaurant-header" data-aos="fade-right">
          <div className="restaurant-header-top">
            <button className="btn-reserve">Reserve a Table</button>
            <button className="btn-menu">View Full Menu</button>
          </div>
          <div className="restaurant-schedules">
            <div className="schedule-item">
              <strong>Breakfast</strong> 7:00 - 10:30 AM
            </div>
            <div className="schedule-item">
              <strong>Lunch</strong> 12:00 - 3:00 PM
            </div>
            <div className="schedule-item">
              <strong>Dinner</strong> 6:00 - 10:00 PM
            </div>
            <div className="schedule-item">
              <strong>Daily</strong> All week
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="menu-section">
          <div className="menu-heading" data-aos="fade-up">
            <p className="menu-subtitle">OUR MENU</p>
            <h2 className="menu-title">
              Crafted with the <span>garden's best</span>
            </h2>
          </div>

          <div className="menu-cards-container">
            {/* Breakfast Card */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="100">
              <div className="menu-card-header">
                <div className="menu-icon breakfast-icon"></div>
                <div>
                  <h3>Breakfast</h3>
                  <p>Served 7:00 - 10:30 AM</p>
                </div>
              </div>
              <div className="menu-items">
                {menuItems.breakfast.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <div className="menu-item-info">
                      <div className="menu-item-name">
                        {item.name}
                        {item.tag && (
                          <span
                            className={`menu-tag ${item.tag.toLowerCase()}`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="menu-item-desc">{item.desc}</div>
                    </div>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lunch Card */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="200">
              <div className="menu-card-header">
                <div className="menu-icon lunch-icon"></div>
                <div>
                  <h3>Lunch</h3>
                  <p>Served 12:00 - 3:00 PM</p>
                </div>
              </div>
              <div className="menu-items">
                {menuItems.lunch.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <div className="menu-item-info">
                      <div className="menu-item-name">
                        {item.name}
                        {item.tag && (
                          <span
                            className={`menu-tag ${item.tag.toLowerCase()}`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="menu-item-desc">{item.desc}</div>
                    </div>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dinner Card */}
            <div className="menu-card" data-aos="fade-up" data-aos-delay="300">
              <div className="menu-card-header">
                <div className="menu-icon dinner-icon"></div>
                <div>
                  <h3>Dinner</h3>
                  <p>Served 6:00 - 10:00 PM</p>
                </div>
              </div>
              <div className="menu-items">
                {menuItems.dinner.map((item, index) => (
                  <div className="menu-item" key={index}>
                    <div className="menu-item-info">
                      <div className="menu-item-name">
                        {item.name}
                        {item.tag && (
                          <span
                            className={`menu-tag ${item.tag.toLowerCase()}`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="menu-item-desc">{item.desc}</div>
                    </div>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Venues Section */}
        <section className="venues-section">
          <div className="venues-container">
            <div
              className="venue-card terrace"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3>The Garden Terrace</h3>
              <p>Al fresco dining amid lush greenery</p>
            </div>
            <div
              className="venue-card private"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3>Private Dining</h3>
              <p>Up to 12 guests</p>
            </div>
            <div
              className="venue-card bar"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3>The Bar</h3>
              <p>Craft drinks & Brau</p>
            </div>
          </div>
        </section>

        {/* Reservations Section */}
        <div className="table-container">
          <form className="table-form" onSubmit={handleReservation}>
            <h2>Reserve a Table</h2>
            <p>Reserve your dining experience in just a few steps.</p>

            <div className="form-group">
              <label>Table Number</label>
              <select
                name="tableNo"
                value={tableNo}
                onChange={(e) => setTableNo(e.target.value)}
                required
              >
                <option value="">Select Table</option>
                {[101, 201, 301, 401, 501, 601].map((table) => (
                  <option key={table} value={table}>
                    Table {table}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <input
                type="number"
                name="guestNo"
                min="1"
                max="20"
                placeholder="Enter guests"
                value={guestNo}
                onChange={(e) => setGuestNo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Reservation Date</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Restaurant;
