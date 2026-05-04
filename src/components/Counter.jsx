import React from "react";

function Counter(props) {
  return (
    <>
      <div className="counter-container">
        <div className="counter-box">
          <h3>{props.Number}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
export default Counter;
