import React from "react";

function Header({ text, sText, className = "" }) {
  return (
    <div>
      <p className="sText">{sText}</p>
      <h2 className={`heading ${className}`.trim()}>{text}</h2>;
    </div>
  );
}
export default Header;
