import { createElement } from '../../utils/domHelpers.js';
import { createCoreSkillsComponent } from './coreSkillsComponent.js';
import { createAdditionalExpertiseComponent } from './additionalExpertiseComponent.js';

export function renderSkillsContainer() {
  const skillsMount = document.getElementById('skills-mount');
  if (!skillsMount) return;

  const title = createElement('h2', { className: 'section-title' }, 'Technical Skills');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'Creative tools, design techniques, and visual skills I use to bring ideas to life');

  const container = createElement('div', { className: 'skills-container' },
    createCoreSkillsComponent(),
    createAdditionalExpertiseComponent()
  );

  skillsMount.appendChild(title);
  skillsMount.appendChild(subtitle);
  skillsMount.appendChild(container);

  initSkillsScrollAnimations(container);
}

function initSkillsScrollAnimations(containerElement) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const fills = containerElement.querySelectorAll('.bar-fill');
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Trigger percentage fill animation after cards slide into place
        setTimeout(() => {
          fills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            if (targetWidth) {
              fill.style.width = targetWidth;
            }
          });
        }, 400);
      } else {
        entry.target.classList.remove('in-view');
        // Reset percentage fill animation when scrolling out
        fills.forEach(fill => {
          fill.style.width = '0%';
        });
      }
    });
  }, observerOptions);

  if (containerElement) {
    observer.observe(containerElement);
  }
}