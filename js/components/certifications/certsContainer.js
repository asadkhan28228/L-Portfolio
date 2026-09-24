import { createElement } from '../../utils/domHelpers.js';
import { certificationsData } from '../../data/certifications/certificationsData.js';
import { createCertCardComponent } from './certCardComponent.js';

export function renderCertificationsContainer() {
  const certsMount = document.getElementById('certifications-mount');
  if (!certsMount) return;

  const title = createElement('h2', { className: 'section-title' }, 'Certifications');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'My official credentials');

  const grid = createElement('div', { className: 'certifications-grid' });
  certificationsData.forEach((cert, index) => {
    const card = createCertCardComponent(cert);
    card.style.transitionDelay = `${(index + 1) * 0.15}s`;
    grid.appendChild(card);
  });

  certsMount.appendChild(title);
  certsMount.appendChild(subtitle);
  certsMount.appendChild(grid);

  initCertificationsScrollAnimations(grid);
}

function initCertificationsScrollAnimations(gridContainer) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const cards = gridContainer.querySelectorAll('.cert-card');
      if (entry.isIntersecting) {
        gridContainer.classList.add('in-view');
        cards.forEach(card => card.classList.add('in-view'));
      } else {
        gridContainer.classList.remove('in-view');
        cards.forEach(card => card.classList.remove('in-view'));
      }
    });
  }, observerOptions);

  if (gridContainer) {
    observer.observe(gridContainer);
  }
}