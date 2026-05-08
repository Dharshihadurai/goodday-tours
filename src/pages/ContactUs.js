import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import WhatsAppButton from '../WhatsApp';

const faqs = [
  {
    q: 'What services do you offer??',
    a: 'We provide reliable car travel services including airport pickup & drop, family trips, temple tours, outstation travel, and customized trip planning based on your needs.'
  },
  {
    q: 'How can I book a cab or car?',
    a: 'You can book a car by calling us directly, sending a WhatsApp message, or using the contact form on our website. Advance booking is recommended for better availability.'
  },
  {
    q: 'What types of vehicles are available?',
    a: 'We offer a wide range of vehicles including Innova, MG Windsor, Mahindra, Tata, and premium cars based on your travel requirement and budget.'
  },
  {
    q: 'Are your drivers experienced and safe?',
    a: 'Yes, all our drivers are professional, well-trained, and experienced in long-distance and city travel to ensure safe and comfortable journeys.'
  },
];

export default function ContactUs() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="page-hero">
        <h1>Contact <span>Us</span></h1>

        <p>We'd love to plan your next adventure</p>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>Contact Us</span>
        </nav>
      </section>

      {/* Contact info cards */}
      <section className="contact-info-section">

        <div className="container contact-info-grid">

          {[
            {
              icon: '📍',
              title: 'Visit Us',
              lines: [
                '4/186H, Kalaivanar Nagar West Putheri, Behind putheri Panchayat Office, Nagercoil 629001'
              ]
            },

            {
              icon: '📞',
              title: 'Call Us',
              lines: [
                <a
                  href="tel:+917305153332"
                  key="call"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  +91 7305153332
                </a>
              ]
            },

            {
              icon: '✉',
              title: 'Email Us',
              lines: ['info@gooddaytoursandtravels.com']
            },

            {
              icon: '🕐',
              title: 'Working Hours',
              lines: [
                'Mon–Sat: 9:00 AM – 7:00 PM',
                'Sunday: 10:00 AM – 3:00 PM'
              ]
            },

          ].map((item, i) => (

            <div
              key={i}
              className="info-card fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <span className="info-icon">
                {item.icon}
              </span>

              <h3>{item.title}</h3>

              {item.lines.map((l, j) => (
                <p key={j}>{l}</p>
              ))}

            </div>

          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="faq-section">

        <div className="container">

          <div
            className="section-header fade-up"
            style={{ textAlign: 'center' }}
          >

            <p className="section-label">
              Common Questions
            </p>

            <h2 className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>

            <div
              className="divider"
              style={{ margin: '1rem auto 3rem' }}
            />

          </div>

          <div className="faq-list">

            {faqs.map((faq, i) => (

              <div
                key={i}
                className={`faq-item fade-up ${openFaq === i ? 'open' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >

                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === i ? null : i)
                  }
                >

                  <span>{faq.q}</span>

                  <span className="faq-arrow">
                    {openFaq === i ? '−' : '+'}
                  </span>

                </button>

                {openFaq === i && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}

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