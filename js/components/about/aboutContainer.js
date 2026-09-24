import { createElement } from '../../utils/domHelpers.js';
import { createNameHeadingComponent } from './nameHeadingComponent.js';
import { createQuickFactsComponent } from './quickFactsComponent.js';
import { createMyStoryComponent } from './myStoryComponent.js';

export function renderAboutContainer() {
  const aboutMount = document.getElementById('about-mount');
  if (!aboutMount) return;

  const title = createElement('h2', { className: 'section-title' }, 'About Me');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'My background, story, and core focus');

  const topGrid = createElement('div', { className: 'about-grid-layout' },
    createNameHeadingComponent(),
    createQuickFactsComponent()
  );

  const storyComponent = createMyStoryComponent();
  const storyGrid = storyComponent.querySelector('.my-story-grid') || storyComponent;
  if (!storyGrid.classList.contains('my-story-grid')) {
    storyGrid.classList.add('my-story-grid');
  }

  aboutMount.appendChild(title);
  aboutMount.appendChild(subtitle);
  aboutMount.appendChild(topGrid);
  aboutMount.appendChild(storyComponent);

  initAboutScrollAnimations(topGrid, storyGrid);
}

function initAboutScrollAnimations(topGrid, storyGrid) {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        const cards = entry.target.querySelectorAll('.story-card');
        cards.forEach(card => card.classList.add('in-view'));
      } else {
        entry.target.classList.remove('in-view');
        const cards = entry.target.querySelectorAll('.story-card');
        cards.forEach(card => card.classList.remove('in-view'));
      }
    });
  }, observerOptions);

  if (topGrid) observer.observe(topGrid);
  if (storyGrid) observer.observe(storyGrid);
}