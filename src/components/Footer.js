import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-keywords">
        <div className="keywords-scroll">

          {[
            'Local Travel',
            'Outstation',
            'Airport Pickup',
            '24/7 Service',
            'Pro Drivers',
            'Clean Vehicles',
            'Advance Booking',
            'On-Time Service',
            'Safe Rides',
            'AC Cars',
            'Corporate Travel'
          ].map((kw, i) => (

            <span key={i} className="kw-tag">
              {kw}
            </span>

          ))}

        </div>
      </div>

      <div className="footer-main">

        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-logo">
              <img
                src="/logo.jpeg"
                alt="Goodday Tours and Travels"
                className="footer-logo-img"
              />
            </div>

            <p className="footer-tagline">
              Safe, comfortable and reliable travel services — available 24/7 for local, outstation and airport transfers across Tamil Nadu.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="footer-col">

            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

          </div>

          {/* Services */}
          <div className="footer-col">

            <h4>Our Services</h4>

            <ul>
              <li>🚗 Local City Travel</li>
              <li>🚙 Outstation Travel</li>
              <li>✈ Airport Pickup & Drop</li>
              <li>📅 Advance Booking</li>
              <li>👨‍✈️ Professional Drivers</li>
            </ul>

          </div>

          {/* Contact */}
          <div className="footer-col">

            <h4>Get In Touch</h4>

            <ul className="footer-contact-list">

              <li>
                📍 4/186H, Kalaivanar Nagar West Putheri,
                Behind Putheri Panchayat Office,
                Nagercoil 629001
              </li>

              <li>
                📞
                <a href="tel:+917305153332">
                  +91 73051 53332
                </a>
              </li>

              <li>
                ✉
                <a href="mailto:info@gooddaytoursandtravels.com">
                  info@gooddaytoursandtravels.com
                </a>
              </li>

              <li>🕐 24/7 Available</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © 2026 Goodday Tours and Travels.
            All rights reserved.
          </p>

          <p>
            Nagercoil, Tamil Nadu 629001
          </p>

        </div>

      </div>

    </footer>
  );
}