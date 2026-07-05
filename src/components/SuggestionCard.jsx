import React from "react";
import "./SuggestionCard.css";

function SuggestionCard({
  rating,
  quote,
  guestName,
  guestLocation,
  serviceBadge,
}) {
  return (
    <div className="suggestion-card">
      {/* Star Rating */}
      {/* <div className="suggestion-card-rating">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </div> */}

      {/* Guest Quote */}
      <p className="suggestion-card-quote">"{quote}"</p>

      {/* Guest Info and Badge */}
      <div className="suggestion-card-footer">
        <div className="suggestion-card-guest-info">
          <p className="suggestion-card-guest-name">{guestName}</p>
          <p className="suggestion-card-guest-location">
            Guest from {guestLocation}
          </p>
        </div>
        <span className="suggestion-card-badge">□ {serviceBadge}</span>
      </div>
    </div>
  );
}

export default SuggestionCard;
