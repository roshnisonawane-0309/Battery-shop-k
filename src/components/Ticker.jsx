import React, { useRef } from 'react';
import { tickerItems } from '../data/siteData';

export default function Ticker() {
  const trackRef = useRef(null);

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

  return (
    <div
      className="ticker-wrap"
      id="ticker-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ticker-track" id="ticker-track" ref={trackRef}>
        {tickerItems.map((item, index) => (
          <span key={`ticker-1-${index}`}>{item}</span>
        ))}
        {tickerItems.map((item, index) => (
          <span key={`ticker-2-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
