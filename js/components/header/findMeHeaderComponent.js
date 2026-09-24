import { createElement } from '../../utils/domHelpers.js';
import { findMeHeaderData } from '../../data/header/findMeHeaderData.js';

export function createFindMeHeaderComponent() {
  const wrapper = createElement('div', { className: 'header-social-links' });

  findMeHeaderData.forEach(item => {
    const icon = createElement('i', { className: `fa-brands ${item.icon} header-social-icon` });
    wrapper.appendChild(createElement('a', {
      href: item.url,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': item.name
    }, icon));
  });

  return wrapper;
}
