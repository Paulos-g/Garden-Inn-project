import React from "react";

function Header({ text, className = "" }) {
  return <h2 className={`heading ${className}`.trim()}>{text}</h2>;
}
export default Header;
