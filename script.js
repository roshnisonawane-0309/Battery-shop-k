// ============================================
// SWAMI SAMARTH BATTERY & SOLAR SYSTEM
// script.js - Interactive Website Logic
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== HAMBURGER MOBILE MENU =====
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-call-btn');

  function openMobileNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // ===== ACTIVE NAV LINK (scroll-based) =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // ===== SMOOTH SCROLLING FOR ALL ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== PRODUCT TABS =====
  const tabBtns = document.querySelectorAll('.tab-btn');
  const exideProducts = document.getElementById('exide-products');
  const microtekProducts = document.getElementById('microtek-products');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      if (tab === 'exide') {
        exideProducts.classList.remove('hidden');
        microtekProducts.classList.add('hidden');
      } else {
        microtekProducts.classList.remove('hidden');
        exideProducts.classList.add('hidden');
      }
      // Animate product cards in
      const visibleCards = document.querySelectorAll('.products-grid:not(.hidden) .product-card');
      visibleCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80);
      });
    });
  });

  // ===== SCROLL REVEAL ANIMATION =====
  const revealElements = document.querySelectorAll(
    '.stat-card, .product-card, .solar-brand-card, .review-card, .contact-card, .brand-card, .about-feature-item, .solar-benefit'
  );

  // Add reveal class
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el, i) => {
    revealObserver.observe(el);
  });

  // Stagger children within grids
  document.querySelectorAll('.stats-grid, .products-grid, .solar-brands-grid, .reviews-grid, .brands-grid').forEach(grid => {
    const children = grid.querySelectorAll('.reveal');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  // ===== COUNTER ANIMATION FOR STATS =====
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const duration = 1500;
    const startTime = performance.now();
    const isFloat = String(target).includes('.');
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      current = target * ease;
      el.textContent = isFloat ? current.toFixed(1) + suffix : Math.floor(current) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statCards = entry.target.querySelectorAll('.stat-card');
        statCards.forEach(card => {
          const numEl = card.querySelector('.stat-number');
          if (!numEl) return;
          const text = numEl.textContent;
          // Parse and animate
          if (text === '5.0') {
            animateCounter(numEl, 5.0);
          } else if (text.includes('+')) {
            const num = parseInt(text);
            animateCounter(numEl, num, '+');
          } else if (!text.includes('AM')) {
            // Not a time, skip
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) statsObserver.observe(statsSection);

  // ===== ENQUIRY BUTTONS (Phone call + WhatsApp) =====
  document.querySelectorAll('.btn-enquire').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Add a ripple effect
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 100px; height: 100px;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple-anim 0.6s ease;
        left: ${e.offsetX}px;
        top: ${e.offsetY}px;
        pointer-events: none;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-anim {
      to { transform: translate(-50%, -50%) scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // ===== TICKER PAUSE ON HOVER =====
  const tickerTrack = document.getElementById('ticker-track');
  if (tickerTrack) {
    const tickerWrap = document.getElementById('ticker-wrap');
    tickerWrap.addEventListener('mouseenter', () => {
      tickerTrack.style.animationPlayState = 'paused';
    });
    tickerWrap.addEventListener('mouseleave', () => {
      tickerTrack.style.animationPlayState = 'running';
    });
  }

  // ===== HERO PARALLAX =====
  const heroBg = document.querySelector('.hero-img');
  window.addEventListener('scroll', () => {
    if (heroBg && window.scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.08) translateY(${window.scrollY * 0.3}px)`;
    }
  });

  // ===== PRODUCT CARD TILT EFFECT =====
  document.querySelectorAll('.product-card, .solar-brand-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
    });
  });

  // ===== WHATSAPP FLOAT SHOW/HIDE =====
  const waFloat = document.getElementById('whatsapp-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      waFloat.style.opacity = '1';
      waFloat.style.pointerEvents = 'all';
    } else {
      waFloat.style.opacity = '0';
      waFloat.style.pointerEvents = 'none';
    }
  });
  waFloat.style.opacity = '0';
  waFloat.style.transition = 'opacity 0.3s ease';

  console.log('%c⚡ Swami Samarth Battery & Solar System', 'color: #f97316; font-size: 18px; font-weight: bold;');
  console.log('%cWebsite loaded successfully. Contact: 7756887311', 'color: #94a3b8;');
});