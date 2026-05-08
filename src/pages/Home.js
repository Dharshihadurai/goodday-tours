import WhatsAppButton from '../WhatsApp';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const destinations = [
  { tag: 'Morris Garages', img: '/car.jpeg' },
  { tag: 'MG Windsor', img: '/car15.png' },
  { tag: 'Tata', img: '/car14.png' },
  { tag: 'KIA', img: '/car1.jpeg' },
  { tag: 'Mahindra', img: '/car5.jpeg' },
  { tag: 'Toyota', img: '/car4.jpeg' },
];

const stats = [
  { num: '6+', label: 'Years of Experience' },
  { num: '100K+', label: 'Successful Trips' },
  { num: '24/7', label: 'Customer Support' },
  { num: '15+', label: 'Destinations' },
];

const services = [
  { icon: '🚘', title: 'Pickup & Drop', desc: 'On-time airport, railway station, and hotel pickup & drop services.' },
  { icon: '👨‍👩‍👧', title: 'Family Tours', desc: 'Safe and comfortable travel planning for families and groups.' },
  { icon: '🛕', title: 'Temple Tours', desc: 'Spiritual and heritage tours to famous temples across India.' },
  { icon: '🎒', title: 'Customized Trips', desc: 'Plan your journey based on your budget and travel needs.' },
];

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content fade-up">

          <p className="section-label" style={{ color: '#e8b84b' }}>
            Welcome to
          </p>

          <h1 className="hero-title">
            Goodday Tours,<br />
            <span>And Travels</span>
          </h1>

          <p className="hero-subtitle fade-up fade-up-delay-1">
            Discover amazing destinations, unforgettable experiences, and hassle-free travel with us.
          </p>

          <div className="hero-buttons fade-up fade-up-delay-2">
            <Link
              to="/contact"
              className="btn-outline"
              style={{ borderColor: '#fff', color: '#fff' }}
            >
              Book Taxi Now
            </Link>
          </div>

        </div>
      </section>

      <WhatsAppButton />

      {/* STATS */}
      <section className="stats-strip">
        <div className="container stats-grid">

          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-item fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}

        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations-section">
        <div className="container">

          <div className="section-header fade-up">
            <h2 className="section-title">
              Our Travel <span>Fleet</span>
            </h2>

            <div className="divider" />

            <p className="section-desc">
              We offer a variety of clean and comfortable vehicles to suit your travel needs.
            </p>
          </div>

          <div className="destinations-grid">

            {destinations.map((d, i) => (
              <div
                key={i}
                className="dest-card fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="dest-img-wrap">

                  <img
                    src={d.img}
                    alt={d.tag}
                    className="dest-img"
                  />

                  <span className="dest-tag">
                    {d.tag}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">

          <div className="section-header fade-up" style={{ textAlign: 'center' }}>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">
              Our <span>Services</span>
            </h2>
            <div className="divider" />
          </div>

          <div className="services-grid">

            {services.map((s, i) => (
              <div
                key={i}
                className="service-card fade-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner fade-up">
        <div className="container cta-inner">

          <div>
            <h2>Ready for Your Next Adventure?</h2>
            <p>Contact us today and let's plan the perfect trip together.</p>
          </div>

          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>

            <Link
              to="/gallery"
              className="btn-outline"
              style={{ borderColor: '#fff', color: '#fff' }}
            >
              View Gallery
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}