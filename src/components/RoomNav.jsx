import React from "react";

function RoomNav({ setCategory }) {
  return (
    <div className="nav-cont">
      <ul className="nav-list">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("All");
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Single");
            }}
          >
            Single
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Twin");
            }}
          >
            Twin
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Double");
            }}
          >
            Double
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RoomNav;
