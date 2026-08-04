import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Rooms";
import OurService from "./pages/OurService";
import NearbyAttraction from "./pages/NearbyAttraction";
import Restaurant from "./pages/Restaurant";
import Register from "./pages/Register";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/Services" element={<OurService />} />
        <Route path="/Nearby" element={<NearbyAttraction />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
