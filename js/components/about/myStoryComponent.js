import { createElement } from '../../utils/domHelpers.js';
import { myStoryData } from '../../data/about/myStoryData.js';

export function createMyStoryComponent() {
  const grid = createElement('div', { className: 'my-story-grid' });

  myStoryData.forEach(story => {
    const title = createElement('div', { className: 'story-card-title' },
      createElement('i', { className: `fa-solid ${story.icon}` }),
      createElement('h4', {}, story.title)
    );

    const bulletsList = createElement('ul', { className: 'story-bullets' });
    story.bullets.forEach(text => {
      bulletsList.appendChild(createElement('li', { className: 'story-bullet-item' }, text));
    });

    const card = createElement('div', { className: 'story-card' }, title, bulletsList);
    grid.appendChild(card);
  });

  return grid;
}