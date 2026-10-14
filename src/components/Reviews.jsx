import React from 'react';
import { customerReviews } from '../data/siteData';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header" id="reviews-header">
          <div className="section-label">Customer Feedback</div>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="review-overall">
            <div className="review-stars">★★★★★</div>
            <div className="review-score">5.0 / 5.0 &nbsp;|&nbsp; 3 Reviews on JustDial</div>
          </div>
        </div>
        <div className="reviews-grid" id="reviews-grid">
          {customerReviews.map((rev) => (
            <div key={rev.id} className="review-card" id={rev.id}>
              <div className="review-header">
                <div className="reviewer-avatar">{rev.avatar}</div>
                <div>
                  <div className="reviewer-name">{rev.name}</div>
                  <div className="reviewer-date">{rev.date}</div>
                </div>
              </div>
              <div className="review-stars-small">★★★★★</div>
              <p className="review-text">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
