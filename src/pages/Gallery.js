import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import WhatsAppButton from '../WhatsApp';

const categories = ['All', 'KIA', 'MG', 'MAHINDRA', 'TATA', 'TOYOTA'];

const images = [
  {
    src: '/car.jpeg',
    title: 'MG Windsor 53KW EV',
    cat: 'MG',
    size: 'wide',
  },
  {
    src: '/car1.jpeg',
    title: 'KIA Carens',
    cat: 'KIA',
    size: 'wide',
  },
  {
    src: '/car2.jpeg',
    title: 'Mahindra Marrazo',
    cat: 'MAHINDRA',
    size: 'normal',
  },
  {
    src: '/car3.jpeg',
    title: 'TATA Nexon 45KW EV',
    cat: 'TATA',
    size: 'normal',
  },
  {
    src: '/car4.jpeg',
    title: 'TOYOTA',
    cat: 'TOYOTA',
    size: 'normal',
  },
 
  {
    src: '/car5.jpeg',
    title: 'Mahindra',
    cat: 'MAHINDRA',
    size: 'wide',
  },
  {
    src: '/car.jpeg',
    title: 'MG',
    cat: 'MG',
    size: 'normal',
  },
  {
    src: '/car15.png',
    title: 'MG Windsor',
    cat: 'MG',
    size: 'normal',
  },
  {
    src: '/car14.png',
    title: 'Tata',
    cat: 'TATA',
    size: 'normal',
  },
  
  {
    src: '/car11.png',
    title: 'Mahindra',
    cat: 'MAHINDRA',
    size: 'wide',
  },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === 'All' ? images : images.filter((img) => img.cat === active);

  return (
    <div className="gallery-page">

      {/* Hero */}
      <section className="page-hero">
        <h1>Our <span>Fleet</span></h1>
        <p>Comfortable, reliable vehicles for all your travel needs</p>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Fleet Gallery</span>
        </nav>
      </section>

      {/* Filter tabs */}
      <section className="gallery-section">
        <div className="container">

          <div className="gallery-filters fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item--${img.size} fade-up`}
                style={{ animationDelay: `${(i % 6) * 0.07}s` }}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.title} loading="lazy" />

                <div className="gallery-overlay">
                  <span className="gallery-cat">{img.cat}</span>
                  <h3>{img.title}</h3>
                  <span className="gallery-zoom">⤢ View</span>
                </div>

              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              No vehicles in this category yet.
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>

          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.title} />

            <div className="lightbox-info">
              <span>{lightbox.cat}</span>
              <h3>{lightbox.title}</h3>
            </div>

          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />

    </div>
  );
}