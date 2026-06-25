import React from "react";
import Header from "../components/Headers";
import Heading from "../components/Heading";
import Nav from "../components/nav-bar";

function Room() {
  return (
    <div>
      <Nav />
      <Heading
        sTtitle="GARDEN INN ADDIS ABABA"
        bTitle="Rooms & Suits Designed for You"
        descrp={
          <>
            From inttimate single rooms to signature garden suits <br /> Every
            rooms crafted for your comfort{" "}
          </>
        }
      />
      ;{" "}
    </div>
  );
}
export default Room;
