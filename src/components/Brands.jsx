import React from 'react';
import { brandsList } from '../data/siteData';

export default function Brands() {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="section-header" id="brands-header">
          <div className="section-label">Authorized Dealer</div>
          <h2 className="section-title">Brands We Carry</h2>
        </div>
        <div className="brands-grid" id="brands-grid">
          {brandsList.map((brand) => (
            <div key={brand.id} className="brand-card" id={brand.id}>
              <div className={`brand-icon ${brand.iconClass}`}>{brand.icon}</div>
              <div className="brand-name">{brand.name}</div>
              <div className="brand-desc">{brand.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
