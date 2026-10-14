import React, { useState } from 'react';
import { exideProducts, microtekProducts, siteConfig } from '../data/siteData';

export default function Batteries() {
  const [activeTab, setActiveTab] = useState('exide');

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

  const handleButtonClick = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 100px; height: 100px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      animation: ripple-anim 0.6s ease;
      left: ${e.nativeEvent.offsetX}px;
      top: ${e.nativeEvent.offsetY}px;
      pointer-events: none;
    `;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const currentProducts = activeTab === 'exide' ? exideProducts : microtekProducts;

  return (
    <section className="products-section" id="batteries">
      <div className="container">
        <div className="section-header" id="batteries-header">
          <div className="section-label">Our Products</div>
          <h2 className="section-title">Battery Range</h2>
          <p className="section-desc">All varieties of Exide &amp; Microtek batteries for every need</p>
        </div>

        {/* Product Tabs */}
        <div className="tab-bar" id="product-tab-bar">
          <button
            className={`tab-btn ${activeTab === 'exide' ? 'active' : ''}`}
            id="tab-exide"
            onClick={() => setActiveTab('exide')}
          >
            Exide Batteries
          </button>
          <button
            className={`tab-btn ${activeTab === 'microtek' ? 'active' : ''}`}
            id="tab-microtek"
            onClick={() => setActiveTab('microtek')}
          >
            Microtek Batteries
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid" key={activeTab}>
          {currentProducts.map((prod, index) => (
            <div
              key={prod.id}
              className="product-card"
              id={prod.id}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                animation: `fadeInUp 0.5s ease forwards ${index * 0.08}s`
              }}
            >
              <div className="product-img-wrap">
                <img
                  src={prod.image}
                  alt={prod.alt}
                  className="product-img"
                  loading="lazy"
                />
                <div className={`product-brand-tag ${prod.brandClass || ''}`}>
                  {prod.brand}
                </div>
                {prod.badge && (
                  <div className="product-popular-tag">{prod.badge}</div>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{prod.name}</h3>
                <p className="product-desc">{prod.desc}</p>
                <ul className="product-features">
                  {prod.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-enquire"
                  id={`enquire-${prod.id}`}
                  onClick={handleButtonClick}
                >
                  Get Best Price
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
