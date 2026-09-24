import { createElement } from '../../utils/domHelpers.js';
import { additionalExpertiseData } from '../../data/skills/additionalExpertiseData.js';

export function createAdditionalExpertiseComponent() {
  const title = createElement('h4', { className: 'skills-category-title' }, 'Additional Expertise');
  const tagCloud = createElement('div', { className: 'tag-cloud' });

  additionalExpertiseData.forEach(item => {
    const pill = createElement('span', { className: 'tag-pill' }, item);
    tagCloud.appendChild(pill);
  });

  const box = createElement('div', { className: 'additional-expertise-box' }, title, tagCloud);
  return box;
}