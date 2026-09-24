import { createElement } from '../../utils/domHelpers.js';
import { languagesCardComponent } from './languagesCardComponent.js';

export function renderLanguagesContainer() {
  const mount = document.getElementById('languages-mount');
  if (!mount) return;

  const title = createElement('h2', { className: 'section-title' }, 'Languages');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'Languages I speak and write');

  const languagesContent = languagesCardComponent();

  mount.appendChild(title);
  mount.appendChild(subtitle);
  mount.appendChild(languagesContent);

  initLanguagesScrollAnimations(languagesContent);
}

function initLanguagesScrollAnimations(containerElement) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const progressPaths = containerElement.querySelectorAll('.ring-progress');
      
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        setTimeout(() => {
          progressPaths.forEach(path => {
            const targetPercentage = path.getAttribute('data-percentage');
            if (targetPercentage) {
              path.style.strokeDasharray = `${targetPercentage}, 100`;
            }
          });
        }, 400);
      } else {
        entry.target.classList.remove('in-view');
        
        progressPaths.forEach(path => {
          path.style.strokeDasharray = '0, 100';
        });
      }
    });
  }, observerOptions);

  if (containerElement) {
    observer.observe(containerElement);
  }
}