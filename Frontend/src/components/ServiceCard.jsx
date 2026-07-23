import React from "react";
import Button from "./Button";

function ServiceCard(props) {
  return (
    <div className="service-card-container">
      <div className="service-card-image-wrapper">
        {props.badge && (
          <span className="service-card-badge">{props.badge}</span>
        )}
        <img src={props.image} alt={props.title} />
      </div>

      <div className="service-card-content">
        <div className="service-card-header">
          {props.category && (
            <p className="service-card-category">{props.category}</p>
          )}
          <h2 className="service-card-title">{props.title}</h2>
        </div>

        <p className="service-card-description">{props.description}</p>

        {props.features && props.features.length > 0 && (
          <div className="service-card-features">
            {props.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="service-card-stats">
          {props.stats &&
            props.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-check">✓</span>
                <div className="stat-content">
                  <p className="stat-number">{stat.number}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>

        {props.buttonText && <Button text={props.buttonText} />}
      </div>
    </div>
  );
}

export default ServiceCard;
