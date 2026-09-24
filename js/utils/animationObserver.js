/**
 * IntersectionObserver utility for triggering scroll-reveal animations.
 */

export function initAnimationObserver(selector = '.animate-on-scroll', options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15,
    ...options
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        const staggerItems = entry.target.querySelectorAll('[data-stagger-item]');

        staggerItems.forEach((item, index) => {
          item.style.transitionDelay = `${Math.min(index * 0.1, 0.6)}s`;
          item.classList.add('visible');
        });

        const skillBars = entry.target.querySelectorAll('.skill-fill[data-level]');

        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.setProperty('--skill-level', `${bar.dataset.level}%`);
            bar.classList.add('skill-loaded');
          }, index * 80);
        });

        obs.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  const elements = document.querySelectorAll(selector);
  elements.forEach(el => observer.observe(el));

  return observer;
}