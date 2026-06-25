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
        </ul>
        <Button text="BOOK NOW" />
      </div>
    </>
  );
}
export default Nav;
