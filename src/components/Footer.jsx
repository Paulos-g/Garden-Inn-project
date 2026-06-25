import Icon from "./Icons";
import Header from "./Headers";
import TextBox from "./Textbox";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

function Footer() {
  const [newInput, setNewInput] = useState("");
  return (
    <div className="footer-container">
      <div className="footer-container">
        <div className="footer-box">
          <div className="text">
            <h1>Garden Inn</h1>
            <p>Hotel & Appartments</p>
            <p>
              Where comfort meets craftsmanship. Experience locally <br />{" "}
              brewed beer, artisan cuisine, and a world-class spa — all <br />{" "}
              under one roof since 1992.
            </p>
          </div>
          <div className="explore-text">
            <h2>EXPLORE</h2>
            <ul className="footer-links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Rooms">Rooms</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Nearby Attractions">Nearby Attractions</a>
              </li>
              <li>
                <a href="#Restaurant Service">Restaurant Service</a>
              </li>
              <li>
                <a href="#Garden-Brau">Garden Brau</a>
              </li>
              <li>
                <a href="">Book Now</a>
              </li>
            </ul>
          </div>
          <div className="contact-section">
            <h2>CONTACT US</h2>
            <h3>Address</h3>
            <p>Bole Avenue Behind Edna Mall</p>
            <p>8th street Rwanda</p>
            <p></p>
            <h3>Reservation</h3>
            <p>+25191234567</p>
            <h3>Email</h3>
            <p>reservation@gardeninn.com</p>
            <h3>Reception</h3>
            <p>24/7 open</p>
          </div>
          <div className="subscribe-section">
            <h2>STAY IN TOUCH</h2>
            <Input newInput={newInput} setNewInput={setNewInput} />
            <h2>{newInput}</h2>
            <Button text="SUBSCRIBE" />
            <TextBox text="BEST BREW HOTEL 2024" />
            <TextBox text="Eco Certified" />
            <TextBox text="TripAdvisor Excellence" />
          </div>
        </div>
        <hr
          style={{
            border: "1px solid #b8860b",
            margin: "16px 0",
            marginTop: "60px",
          }}
        />
        <div className="footer-icons">
          <div className="Inside-footer">
            <p>Privacy and Policy</p>
            <p>Terms of Service</p>
            <p>Accesblity</p>
            <p>Site Map</p>
          </div>
          <div className="Inside-footer">
            <Icon icon="fa-regular fa-envelope" />
            <Icon icon="fa-brands fa-instagram" />
            <Icon icon="fa-brands fa-x-twitter" />
            <Icon icon="fa-brands fa-youtube" />
          </div>
        </div>
        <hr style={{ border: "1px solid #b8860b", margin: "16px 0" }} />
        <p>
          &copy;{new Date().getFullYear()} GARDEN INN APARTMENTS.ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </div>
  );
}
export default Footer;
