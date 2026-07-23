import React from "react";
import Nav from "../components/nav-bar";
import Footer from "../components/Footer";
import "./Restaurant.css";
import Heading from "../components/Heading";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function Restaurant() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
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
            <div className="venue-card terrace" data-aos="zoom-in" data-aos-delay="100">
              <h3>The Garden Terrace</h3>
              <p>Al fresco dining amid lush greenery</p>
            </div>
            <div className="venue-card private" data-aos="zoom-in" data-aos-delay="200">
              <h3>Private Dining</h3>
              <p>Up to 12 guests</p>
            </div>
            <div className="venue-card bar" data-aos="zoom-in" data-aos-delay="300">
              <h3>The Bar</h3>
              <p>Craft drinks & Brau</p>
            </div>
          </div>
        </section>

        {/* Reservations Section */}
        <section className="reservations-section">
          <div className="reservation-heading" data-aos="fade-up">
            <p className="reservation-subtitle">RESERVATIONS</p>
            <h2 className="reservation-title">Book your table</h2>
          </div>
          <div className="reservation-form-container" data-aos="fade-up" data-aos-delay="200">
            <form className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME</label>
                  <input type="text" placeholder="Abebe Kebede" />
                </div>
                <div className="form-group">
                  <label>PHONE</label>
                  <input type="text" placeholder="+251 9_ _ _ _ _ _" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>DATE</label>
                  <input type="date" placeholder="mm/dd/yyyy" />
                </div>
                <div className="form-group">
                  <label>TIME</label>
                  <select>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>GUESTS</label>
                  <select>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5+ guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>OCCASION</label>
                  <select>
                    <option>Regular dining</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-confirm">
                Confirm Reservation
              </button>
              <p className="form-footer-text">
                We'll confirm your booking via phone within 30 minutes.
              </p>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Restaurant;
