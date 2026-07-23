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
              setCategory(single ? single : "landmark");
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
              setCategory(twin ? twin : "mall");
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
              setCategory(double ? double : "super");
            }}
          >
            {fourthT}
          </a>
        </li>
        {fifthT && (
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("dining");
              }}
            >
              {fifthT}
            </a>
          </li>
        )}
        {sixthF && (
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("beauty");
              }}
            >
              {sixthF}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default RoomNav;
