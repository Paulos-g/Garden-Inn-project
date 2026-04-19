import React from "react";

function Image(props) {
  return (
    <div className="img">
      <img src={props.imgURL} alt="" />
    </div>
  );
}
export default Image;
