import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/siteData';

export default function Stats() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    rating: '0.0',
    brands: '0+',
    products: '0+'
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate 5.0
            animateCounter(5.0, 1500, true, '', (val) => {
              setCounts((prev) => ({ ...prev, rating: val }));
            });

            // Animate 5+
            animateCounter(5, 1200, false, '+', (val) => {
              setCounts((prev) => ({ ...prev, brands: val }));
            });

            // Animate 100+
            animateCounter(100, 1500, false, '+', (val) => {
              setCounts((prev) => ({ ...prev, products: val }));
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (target, duration, isFloat, suffix, callback) => {
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = target * ease;
      const formatted = isFloat
        ? current.toFixed(1) + suffix
        : Math.floor(current) + suffix;
      callback(formatted);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  return (
    <section className="stats-section" id="stats" ref={sectionRef}>
      <div className="container stats-grid">
        <div className="stat-card" id="stat-rating">
          <div className="stat-number">{hasAnimated ? counts.rating : '5.0'}</div>
          <div className="stat-stars">★★★★★</div>
          <div className="stat-label">JustDial Rating</div>
        </div>

        <div className="stat-card" id="stat-brands">
          <div className="stat-number">{hasAnimated ? counts.brands : '5+'}</div>
          <div className="stat-label">Premium Brands</div>
        </div>

        <div className="stat-card" id="stat-products">
          <div className="stat-number">{hasAnimated ? counts.products : '100+'}</div>
          <div className="stat-label">Products Available</div>
        </div>

        <div className="stat-card" id="stat-hours">
          <div className="stat-number">9AM–9PM</div>
          <div className="stat-label">Open All Days</div>
        </div>
      </div>
    </section>
  );
}
