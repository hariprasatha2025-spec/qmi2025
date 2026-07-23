import React from 'react';
import './Cards.css';

export const FeatureCard = ({ title, text, bgImage }) => {
  return (
    <div className="feature-card" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="feature-overlay">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-text">{text}</p>
      </div>
    </div>
  );
};

export const ProfileCard = ({ name, role, org, image }) => {
  return (
    <div className="profile-card">
      <div className="profile-img-container">
        <img src={image} alt={name} className="profile-img" />
      </div>
      <div className="profile-info">
        <h5 className="profile-name">{name}</h5>
        <p className="profile-role">{role}</p>
        <p className="profile-org">{org}</p>
      </div>
    </div>
  );
};
