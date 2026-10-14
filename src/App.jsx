import React, { useEffect } from 'react';
import WhatsAppFloat from './components/WhatsAppFloat';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Stats from './components/Stats';
import About from './components/About';
import Batteries from './components/Batteries';
import Solar from './components/Solar';
import Brands from './components/Brands';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll(
      '.stat-card, .product-card, .solar-brand-card, .review-card, .contact-card, .brand-card, .about-feature-item, .solar-benefit'
    );

    revealElements.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Stagger transition delays within parent grids
    document
      .querySelectorAll('.stats-grid, .products-grid, .solar-brands-grid, .reviews-grid, .brands-grid')
      .forEach((grid) => {
        const children = grid.querySelectorAll('.reveal');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.08}s`;
        });
      });

    console.log(
      '%c⚡ Swami Samarth Battery & Solar System',
      'color: #f97316; font-size: 18px; font-weight: bold;'
    );
    console.log('%cReact Website initialized. Contact: 7756887311', 'color: #94a3b8;');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-root">
      <WhatsAppFloat />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <Batteries />
        <Solar />
        <Brands />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
