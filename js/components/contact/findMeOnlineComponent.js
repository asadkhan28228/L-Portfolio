import { createElement } from '../../utils/domHelpers.js';
import { findMeOnlineData } from '../../data/contact/findMeOnlineData.js';

export function createFindMeOnlineComponent() {
  const grid = createElement('div', { className: 'find-me-grid' });

  findMeOnlineData.forEach(platform => {
    const icon = createElement('i', { className: `fa-brands ${platform.icon}` });
    const label = createElement('span', {}, platform.name);

    const tile = createElement('a', {
      href: platform.url,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'social-tile'
    }, icon, label);

    grid.appendChild(tile);
  });

  return grid;
}