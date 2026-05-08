import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // PATCH: Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.header')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    // PATCH: header wraps EVERYTHING including mobile-menu so z-index stacking works correctly
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>

      {/* Top bar */}
      <div className="header-topbar">
        <div className="container topbar-inner">

          <div className="topbar-keywords"></div>

          <div className="topbar-contact">
            <a
              href="tel:+917305153332"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              📞 +91 73051 53332
            </a>
           
                
                <a href="mailto:info@gooddaytoursandtravels.com">
                  ✉ info@gooddaytoursandtravels.com
                </a>
            
          </div>

        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-inner">

          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="/logo.jpeg"
              alt="Goodday Tours and Travels"
              className="logo-img"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (desktop) */}
          <a href="tel:+917305153332" className="nav-cta">
            📞 Book Trip
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </nav>

      {/* PATCH: Mobile Menu is INSIDE <header> so it inherits z-index: 1000
          and always renders on top of the hero section below */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`mobile-link ${location.pathname === path ? 'active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <a href="tel:+917305153332" className="mobile-cta">
          📞 Book a Trip
        </a>
      </div>

    </header>
  );
}