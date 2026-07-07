import React from "react";

function RoomNav({
  setCategory,
  twin,
  double,
  single,
  firstT,
  secondT,
  thirdT,
  fourthT,
  fifthT,
  sixthF,
}) {
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
            {firstT}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory(single);
            }}
          >
            {secondT}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory(twin);
            }}
          >
            {thirdT}
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory(double);
            }}
          >
            {fourthT}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RoomNav;
