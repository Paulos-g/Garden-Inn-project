import React from "react";
import GardenInnLogo from "../assets/GardenInn.png";
import Button from "./Button";
import GardenImage from "./img";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <section id="Home"></section>
      <div className="Nav-container">
        <a href="/" className="logo">
          <GardenImage imgUrl={GardenInnLogo} />
        </a>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Nearby">Nearby Attractions</Link>
          </li>
          <li>
            <Link to="/Restaurant">Restaurant Service</Link>
          </li>
          <li>
            <a href="#Garden-Brau">Garden Brau</a>
          </li>
        </ul>
        <Button className="Book-btn" text="BOOK NOW" />
      </div>
    </>
  );
}
export default Nav;
