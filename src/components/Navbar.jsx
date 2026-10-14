import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'batteries', 'solar', 'brands', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMobileNav = () => {
    setMobileOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    closeMobileNav();
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'batteries', label: 'Batteries' },
    { id: 'solar', label: 'Solar' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="header-inner container">
          <a
            href="#home"
            className="logo"
            id="logo"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-name">Swami Samarth</span>
              <span className="logo-sub">Battery &amp; Solar System</span>
            </div>
          </a>

          <nav className="nav" id="main-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                id={`nav-${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${siteConfig.phone}`}
            className="btn-call header-call"
            id="header-call-btn"
          >
            📞 Call Now
          </a>

          <button
            className="hamburger"
            id="hamburger-btn"
            aria-label="Open menu"
            onClick={openMobileNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} id="mobile-nav">
        <button
          className="mobile-nav-close"
          id="mobile-nav-close"
          aria-label="Close menu"
          onClick={closeMobileNav}
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-nav-link"
            id={`mob-nav-${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={`tel:${siteConfig.phone}`}
          className="btn-call mobile-call-btn"
          id="mob-call-btn"
          onClick={closeMobileNav}
        >
          📞 {siteConfig.phoneDisplay}
        </a>
      </div>
    </>
  );
}
