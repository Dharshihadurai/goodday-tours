import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import WhatsAppButton from '../WhatsApp';

const values = [
  {
    icon: '🚕',
    title: 'Local Travel',
    desc: 'Quick and convenient rides within the city for your daily travel needs.'
  },
  {
    icon: '🛣️',
    title: 'Outstation Travel',
    desc: 'Comfortable long-distance journeys with reliable and smooth service.'
  },
  {
    icon: '✈️',
    title: 'Airport Pickup & Drop',
    desc: 'On-time airport transfers to ensure a hassle-free travel experience.'
  },
  {
    icon: '🕒',
    title: '24/7 Availability',
    desc: 'Travel anytime with our round-the-clock service availability.'
  },
  {
    icon: '📅',
    title: 'Advance Booking',
    desc: 'Plan your trips in advance and avoid last-minute stress.'
  },
  {
    icon: '👨‍✈️',
    title: 'Professional Drivers',
    desc: 'Experienced drivers ensuring safety and a pleasant journey.'
  },
  {
    icon: '🚗',
    title: 'Clean Vehicles',
    desc: 'Well-maintained vehicles for a comfortable ride.'
  },
  {
    icon: '⏱️',
    title: 'On-Time Service',
    desc: 'Punctual pickups and drop-offs every time.'
  },
  {
    icon: '📍',
    title: 'Doorstep Pickup',
    desc: 'Convenient pickup and drop exactly where you need.'
  }
];

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="page-hero">
        <h1>About <span>GoodDay Travels</span></h1>
        <p>Your trusted taxi and travel partner</p>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>About Us</span>
        </nav>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <div className="container story-grid">
          <div className="story-images fade-up">
            <div className="story-img-main">
              <img src="/car.jpeg" alt="Travel team" />
            </div>
            <div className="story-img-side">

              <div className="story-badge">
                <span className="badge-num">6+</span>
                <span className="badge-text">Years of Experience</span>
              </div>
            </div>
          </div>

          <div className="story-text fade-up fade-up-delay-2">
            <p className="section-label">Our Story</p>

            <h2 className="section-title">
              Reliable Travel Solutions <span>for Every Journey</span>
            </h2>

            <div className="divider" />

            <p>
              At Goodday Tours and Travels, we are dedicated to providing safe,
              comfortable, and reliable travel services for every journey.
              With a focus on quality and customer satisfaction, we make travel
              simple, smooth, and stress-free.
            </p>

            <p style={{ marginTop: '1rem' }}>
              With 6 years of experience in the travel industry,
              Goodday Tours and Travels has been providing reliable
              and comfortable travel services for customers across Tamil Nadu.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <Link to="/contact" className="btn-primary">
                Book a Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="values-section">

        <div className="container">

          <div
            className="section-header"
            style={{ textAlign: 'center' }}
          >

            <h2 className="section-title">
              Our <span>Services</span>
            </h2>

          </div>

          <div className="values-grid">

            {values.map((v, i) => (

              <div
                key={i}
                className="value-card"
              >
                <span className="value-icon">
                  {v.icon}
                </span>

                <h3>{v.title}</h3>

                <p>{v.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container why-inner">

          <div className="fade-up">
            <p className="section-label" style={{ color: '#e8b84b' }}>
              Why GoodDay
            </p>

            <h2 className="section-title" style={{ color: '#fff' }}>
              Why Travellers <span style={{ color: '#e8b84b' }}>Choose Us</span>
            </h2>

            <div className="divider" />
          </div>

          <div className="why-list fade-up fade-up-delay-1">

            {[
              '✈  6+ years of trusted travel service',
              '🌟 50,000+ satisfied customers',
              '📞 24/7 dedicated support team',
              '💰 Best price guarantee on all packages',
              '🌍 Trusted travel partner for family trips',
              '🔒 100% secure payment processing',
            ].map((item, i) => (

              <div key={i} className="why-item">
                {item}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}