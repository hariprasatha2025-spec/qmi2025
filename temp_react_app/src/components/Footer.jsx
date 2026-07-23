import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-bg-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-text">
              Department of Mathematics (SAS),<br/>
              Vellore Institute of Technology,<br/>
              Chennai – 600127, Tamil Nadu, India
            </p>
            <p className="footer-text mt-2">
              <strong>Email:</strong> <a href="mailto:qmivitc2025@gmail.com" className="footer-link">qmivitc2025@gmail.com</a>
            </p>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/organizers">Organizers</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-title">Campus Map</h3>
            <div className="map-container">
              <iframe 
                title="VIT Chennai Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.178862832812!2d80.15363987462314!3d12.840640918367667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259aa7ef4c4b7%3A0xeab3ff5b05a6e94f!2sVIT%20Chennai%20Campus!5e0!3m2!1sen!2sin!4v1692960123456!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
            <a href="https://maps.google.com/?q=VIT+Chennai+Campus" target="_blank" rel="noreferrer" className="btn btn-outline-light mt-3">
              View on Google Maps
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 QMI Workshop – VIT Chennai | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
