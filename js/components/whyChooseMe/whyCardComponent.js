import { createElement } from '../../utils/domHelpers.js';

export function createWhyCardComponent(item, highlighted = false) {
  const icon = createElement('div', { className: 'why-card-icon' },
    createElement('i', { className: `fa-solid ${item.icon}` })
  );
  const title = createElement('h4', { className: 'why-card-title' }, item.title);
  const desc = createElement('p', { className: 'why-card-desc' }, item.description);

  const cardClass = `why-card${highlighted ? ' why-card-highlighted' : ''}`;
  return createElement('div', { className: cardClass }, icon, title, desc);
}
