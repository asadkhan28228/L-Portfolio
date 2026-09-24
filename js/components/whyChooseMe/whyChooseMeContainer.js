import { createElement } from '../../utils/domHelpers.js';
import { whyChooseMeData } from '../../data/whyChooseMe/whyChooseMeData.js';
import { createWhyCardComponent } from './whyCardComponent.js';

export function renderWhyChooseMeContainer() {
  const mount = document.getElementById('why-mount');
  if (!mount) return;

  const title = createElement('h2', { className: 'section-title' }, 'Why Choose Me');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'Turning Creative Ideas into Powerful Visual Experiences');

  const grid = createElement('div', { className: 'why-choose-grid' });
  const highlightIndex = Math.floor(whyChooseMeData.length / 2);

  whyChooseMeData.forEach((item, index) => {
    grid.appendChild(createWhyCardComponent(item, index === highlightIndex));
  });

  mount.appendChild(title);
  mount.appendChild(subtitle);
  mount.appendChild(grid);

  initWhyChooseMeScrollAnimation(mount, grid);
}

function initWhyChooseMeScrollAnimation(sectionElement, gridElement) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gridElement.classList.add('in-view');
      } else {
        gridElement.classList.remove('in-view');
      }
    });
  }, observerOptions);

  if (sectionElement) {
    observer.observe(sectionElement);
  }
}