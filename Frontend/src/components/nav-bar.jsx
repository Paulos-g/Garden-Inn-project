import React, { useState } from "react";
import GardenInnLogo from "../assets/GardenInn.png";
import Button from "./Button";
import GardenImage from "./img";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { label: "Home", to: "/", type: "link" },
    { label: "Rooms", to: "/rooms", type: "link" },
    { label: "Services", to: "/Services", type: "link" },
    { label: "Nearby Attractions", to: "/Nearby", type: "link" },
    { label: "Restaurant Service", to: "/Restaurant", type: "link" },
    { label: "Garden Brau", to: "#Garden-Brau", type: "anchor" },
  ];

  return (
    <>
      <section id="Home"></section>

      {/* Overlay */}
      <div
        className={isOpen ? "nav-overlay active" : "nav-overlay"}
        onClick={closeMenu}
      />

      <div className="Nav-container">
        <a href="/" className="logo">
          <GardenImage imgUrl={GardenInnLogo} />
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map((item, i) =>
            item.type === "link" ? (
              <li key={i}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ) : (
              <li key={i}>
                <a href={item.to}>{item.label}</a>
              </li>
            )
          )}
        </ul>

        <Button className="Book-btn" text="BOOK NOW" />

        {/* Hamburger icon — visible on mobile */}
        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={isOpen ? "mobile-menu open" : "mobile-menu"}>
        <ul className="mobile-nav-links">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="mobile-nav-item"
              style={{ "--i": i }}
            >
              {item.type === "link" ? (
                <Link to={item.to} onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.to} onClick={closeMenu}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li className="mobile-nav-item mobile-book-btn" style={{ "--i": navItems.length }}>
            <Button text="BOOK NOW" />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
