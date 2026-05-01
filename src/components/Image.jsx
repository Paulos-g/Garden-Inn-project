import React from "react";

function Image(props) {
  return (
    <div className="img">
      <img src={props.imgURL} alt="" className={props.className} />
    </div>
  );
}
export default Image;
