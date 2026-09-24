import { createElement } from '../../utils/domHelpers.js';
import { personalInfoData } from '../../data/about/personalInfoData.js';

export function createNameHeadingComponent() {
  const heading = createElement('h3', { className: 'about-name-heading' }, personalInfoData.fullName);
  const subtitle = createElement('p', { className: 'highlight-text' }, personalInfoData.title);

  const bioContainer = createElement('div', { className: 'about-bio-group' });
  personalInfoData.bio.forEach(pText => {
    bioContainer.appendChild(createElement('p', { className: 'about-bio-text' }, pText));
  });

  const card = createElement('div', { className: 'about-main-card' },
    heading,
    subtitle,
    bioContainer
  );

  return card;
}