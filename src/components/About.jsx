import React from 'react';
import { siteConfig } from '../data/siteData';

export default function About() {
  const features = [
    'Authorized Exide Dealer',
    'Authorized Microtek Dealer',
    'Waaree Solar Partner',
    'Tata & Adani Solar',
    'Home Delivery Available',
    'Old Battery Exchange'
  ];

  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-image-wrap" id="about-image">
          <img
            src="/assets/shop_front.jpg"
            alt="Swami Samarth Battery and Solar Shop front Jalgaon"
            className="about-img"
          />
          <div className="about-badge-card" id="about-trusted-badge">
            <span className="badge-icon">🏆</span>
            <div>
              <div className="badge-title">Trusted Shop</div>
              <div className="badge-sub">Jalgaon Bazar</div>
            </div>
          </div>
        </div>

        <div className="about-content" id="about-content">
          <div className="section-label">About Us</div>
          <h2 className="section-title">Your Trusted Power Partner in Jalgaon</h2>
          <p className="about-text">
            <strong>Swami Samarth Battery &amp; Solar System</strong> is a leading battery and solar solutions shop located at the heart of Jalgaon Bazar. We are an authorized dealer for <strong>Exide</strong> and <strong>Microtek</strong> batteries and provide premium solar solutions from <strong>Waaree, Tata Power,</strong> and <strong>Adani Solar</strong>.
          </p>
          <p className="about-text">
            Whether you need a car battery, inverter battery for home, two-wheeler battery, or a complete rooftop solar system — we have everything under one roof with genuine products, best prices, and professional installation.
          </p>

          <div className="about-features" id="about-features">
            {features.map((feature, i) => (
              <div key={i} className="about-feature-item">
                <span>✅</span> {feature}
              </div>
            ))}
          </div>

          <div className="about-timing" id="about-timing">
            <span className="timing-icon">🕘</span>
            <div>
              <div className="timing-title">Shop Hours</div>
              <div className="timing-text">{siteConfig.timing}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
