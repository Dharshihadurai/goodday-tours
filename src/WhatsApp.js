import React from 'react';
import './WhatsApp.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917305153332?text=Hi%20I%20want%20to%20book%20a%20trip"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
}