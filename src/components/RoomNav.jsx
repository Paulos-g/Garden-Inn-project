import React from "react";

function RoomNav() {
  return (
    <div className="nav-cont">
      <ul className="nav-list">
        <li>
          <a className="active" href="#">
            All
          </a>
        </li>
        <li>
          <a href="#">Single</a>
        </li>
        <li>
          <a href="#">Twin</a>
        </li>
        <li>
          <a href="#">Double</a>
        </li>
        <li>
          <a href="#">Suite</a>
        </li>
        <li>
          <a href="#">Family</a>
        </li>
      </ul>
    </div>
  );
}

export default RoomNav;
