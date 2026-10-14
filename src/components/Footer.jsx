import React from 'react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
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
    <footer className="footer" id="footer">
      <div className="footer-top container">
        <div className="footer-brand" id="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-name">Swami Samarth</span>
              <span className="logo-sub">Battery &amp; Solar System</span>
            </div>
          </div>
          <p className="footer-tagline">Powering Jalgaon with trusted brands and expert service.</p>
          <div className="footer-social" id="footer-social">
            <a
              href={siteConfig.whatsappUrl}
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="social-btn"
              id="footer-phone"
              aria-label="Call"
            >
              📞
            </a>
          </div>
        </div>

        <div className="footer-links-col" id="footer-products-col">
          <h4 className="footer-col-title">Products</h4>
          <a href="#batteries" className="footer-link" id="fl-car" onClick={(e) => scrollToSection(e, 'batteries')}>Car Batteries</a>
          <a href="#batteries" className="footer-link" id="fl-inverter" onClick={(e) => scrollToSection(e, 'batteries')}>Inverter Batteries</a>
          <a href="#batteries" className="footer-link" id="fl-bike" onClick={(e) => scrollToSection(e, 'batteries')}>Two-Wheeler Batteries</a>
          <a href="#batteries" className="footer-link" id="fl-solar-bat" onClick={(e) => scrollToSection(e, 'batteries')}>Solar Batteries</a>
          <a href="#solar" className="footer-link" id="fl-solar-panel" onClick={(e) => scrollToSection(e, 'solar')}>Solar Panels</a>
          <a href="#solar" className="footer-link" id="fl-solar-sys" onClick={(e) => scrollToSection(e, 'solar')}>Solar Systems</a>
        </div>

        <div className="footer-links-col" id="footer-brands-col">
          <h4 className="footer-col-title">Brands</h4>
          <a href="#batteries" className="footer-link" id="fl-exide" onClick={(e) => scrollToSection(e, 'batteries')}>Exide</a>
          <a href="#batteries" className="footer-link" id="fl-microtek" onClick={(e) => scrollToSection(e, 'batteries')}>Microtek</a>
          <a href="#solar" className="footer-link" id="fl-waaree" onClick={(e) => scrollToSection(e, 'solar')}>Waaree Solar</a>
          <a href="#solar" className="footer-link" id="fl-tata" onClick={(e) => scrollToSection(e, 'solar')}>Tata Power Solar</a>
          <a href="#solar" className="footer-link" id="fl-adani" onClick={(e) => scrollToSection(e, 'solar')}>Adani Solar</a>
        </div>

        <div className="footer-links-col" id="footer-contact-col">
          <h4 className="footer-col-title">Contact</h4>
          <p className="footer-addr">Ground Floor, Shop No. 2,<br />Wankhede Guruji Co-Op Hsg Society,<br />Near AnnaBhau Sathe Statue,<br />Neri Naka, Bazar, Jalgaon – 425001</p>
          <a href={`tel:${siteConfig.phone}`} className="footer-link footer-phone-num" id="fl-phone">
            📞 {siteConfig.phoneFormatted}
          </a>
          <a href={siteConfig.whatsappUrl} className="footer-link" target="_blank" rel="noopener noreferrer" id="fl-whatsapp">
            💬 WhatsApp Us
          </a>
          <p className="footer-hours">🕘 Open: 9 AM – 9 PM | All Days</p>
        </div>
      </div>

      <div className="footer-bottom" id="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2025 Swami Samarth Battery &amp; Solar System, Jalgaon. All rights reserved.</span>
          <span className="footer-credit">Made with ❤️ for Jalgaon</span>
        </div>
      </div>
    </footer>
  );
}
