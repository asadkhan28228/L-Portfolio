import { createElement } from '../../utils/domHelpers.js';

export function createSubFeatureItemComponent(text) {
  const icon = createElement('i', { className: 'fa-solid fa-check sub-feature-icon' });
  const label = createElement('span', {}, text);

  return createElement('div', { className: 'sub-feature-item' }, icon, label);
}
