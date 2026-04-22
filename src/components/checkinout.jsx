import React from "react";
import Icon from "./Icons";
import Button from "./Button";

function Check() {
  return (
    <div>
      <div className="check-container">
        <Icon icon="fa-solid fa-calendar-days" title="Check in" />
        <Icon icon="fa-solid fa-calendar-check" title="Check out " />
        <Icon icon="fa-regular fa-user" title="Guests" />
        <Button text="Check Avaliablity" />
      </div>
    </div>
  );
}
export default Check;
