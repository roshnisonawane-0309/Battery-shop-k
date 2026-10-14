import React from 'react';
import { solarBrands, solarBenefits, siteConfig } from '../data/siteData';

export default function Solar() {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  };

  return (
    <section className="solar-section" id="solar">
      <div className="solar-bg-glow"></div>
      <div className="container">
        <div className="section-header" id="solar-header">
          <div className="section-label light">Solar Solutions</div>
          <h2 className="section-title light">Go Solar with the Best Brands</h2>
          <p className="section-desc light">We are authorized partners for India's top solar brands</p>
        </div>

        <div className="solar-brands-grid" id="solar-brands-grid">
          {solarBrands.map((solar) => (
            <div
              key={solar.id}
              className={`solar-brand-card ${solar.featured ? 'featured-solar' : ''}`}
              id={solar.id}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              {solar.featured && (
                <div className="solar-featured-tag">⭐ Featured</div>
              )}
              <div className={`solar-brand-header ${solar.headerClass}`}>
                <div className={`solar-brand-logo-text ${solar.textClass}`}>
                  {solar.brand}
                </div>
                <div className="solar-brand-subtitle">{solar.subtitle}</div>
              </div>
              <div className="solar-brand-img-wrap">
                <img
                  src={solar.image}
                  alt={solar.alt}
                  className="solar-brand-img"
                  loading="lazy"
                />
              </div>
              <div className="solar-brand-body">
                <p>{solar.desc}</p>
                <ul className="solar-features">
                  {solar.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={`btn-solar-enquire ${solar.btnClass || ''}`}
                  id={solar.btnId}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Solar Benefits */}
        <div className="solar-benefits-bar" id="solar-benefits">
          {solarBenefits.map((benefit, index) => (
            <div key={index} className="solar-benefit">
              <div className="solar-benefit-icon">{benefit.icon}</div>
              <div className="solar-benefit-text">{benefit.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
