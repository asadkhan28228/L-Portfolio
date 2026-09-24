import { createElement } from '../../utils/domHelpers.js';
import { connectData } from '../../data/contact/connectData.js';
import { createConnectFormComponent } from './connectFormComponent.js';
import { createFindMeOnlineComponent } from './findMeOnlineComponent.js';


export function renderContactContainer() {
  const contactMount = document.getElementById('contact-mount');
  if (!contactMount) return;


  const title = createElement('h2', { className: 'section-title' }, connectData.title);
  const subtitle = createElement('p', { className: 'section-subtitle' }, connectData.subtitle);


  const grid = createElement('div', { className: 'contact-grid' },
    createConnectFormComponent(),
    createFindMeOnlineComponent()
  );


  contactMount.appendChild(title);
  contactMount.appendChild(subtitle);
  contactMount.appendChild(grid);


  initContactScrollAnimations(grid);
}


function initContactScrollAnimations(gridElement) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);


  if (gridElement) {
    observer.observe(gridElement);
  }
}