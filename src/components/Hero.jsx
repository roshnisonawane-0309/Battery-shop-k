import React, { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteData';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setOffsetY(window.scrollY * 0.3);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="/assets/hero_banner.jpg"
          alt="Swami Samarth Battery and Solar Shop"
          className="hero-img"
          id="hero-bg-img"
          style={{
            transform: `scale(1.08) translateY(${offsetY}px)`,
            willChange: 'transform'
          }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container" id="hero-content">
        <div className="hero-badge" id="hero-badge">
          ⭐ 5.0 Rating on JustDial
        </div>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title-main">Swami Samarth</span>
          <span className="hero-title-sub">Battery &amp; Solar System</span>
        </h1>
        <p className="hero-desc" id="hero-desc">
          Jalgaon's trusted dealer for <strong>Exide &amp; Microtek</strong> batteries and<br />
          <strong>Waaree, Tata &amp; Adani</strong> solar solutions since years.
        </p>

        <div className="hero-highlights" id="hero-highlights">
          <div className="hero-hl-item"><span>🔋</span> All Battery Types</div>
          <div className="hero-hl-item"><span>☀️</span> Solar Systems</div>
          <div className="hero-hl-item"><span>🔧</span> Expert Installation</div>
          <div className="hero-hl-item"><span>✅</span> Genuine Products</div>
        </div>

        <div className="hero-cta" id="hero-cta">
          <a
            href="#batteries"
            className="btn-primary"
            id="hero-explore-btn"
            onClick={(e) => scrollToSection(e, 'batteries')}
          >
            Explore Products
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="btn-outline"
            id="hero-call-btn"
          >
            📞 Call: {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <div
        className="hero-scroll"
        id="hero-scroll"
        onClick={(e) => scrollToSection(e, 'stats')}
        style={{ cursor: 'pointer' }}
      >
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
}
