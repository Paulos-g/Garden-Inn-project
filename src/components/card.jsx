import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icons";

function Card(props) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const displayedAmenities = showAllAmenities
    ? props.amenities
    : props.amenities?.slice(0, 4); //"Only call slice() if props.amenities exists."

  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        {props.badge && <span className="card-badge">{props.badge}</span>}
        <img src={props.ImgUrl} alt={props.heading} />
        <div className="card-image-info">
          {props.roomSize && (
            <span className="info-badge">{props.roomSize}</span>
          )}
          {props.guests && <span className="info-badge">{props.guests}</span>}
        </div>
      </div>

      <div className="card-text">
        <div className="heading-price">
          <p className="card-category">{props.P}</p>
          <h2>{props.heading}</h2>
        </div>

        {(props.info1 || props.info2) && (
          <div className="card-meta">
            {props.info1 && <span className="meta-item">{props.info1}</span>}
            {props.info2 && <span className="meta-item">{props.info2}</span>}
          </div>
        )}

        <p className="card-description">{props.description}</p>
        {props.tips && <p className="card-tips">{props.tips}</p>}

        {props.amenities && props.amenities.length > 0 && (
          <div className="amenities-section">
            <div className="amenities-list">
              {displayedAmenities?.map((amenity, index) => (
                <span key={index} className="amenity-tag">
                  {amenity}
                </span>
              ))}
            </div>
            {props.amenities.length > 4 && !showAllAmenities && (
              <button
                className="show-more-btn"
                onClick={() => setShowAllAmenities(true)}
              >
                +{props.amenities.length - 4} more
              </button>
            )}
          </div>
        )}

        <div className="card-footer">
          <div className="price-section">
            {props.startPrice && (
              <p className="starting-from">{props.startPrice}</p>
            )}
            <h3 className="price-text">{props.price}</h3>
          </div>
          {props.buttonText && <Button text={props.buttonText} />}
        </div>
      </div>
    </div>
  );
}
export default Card;
