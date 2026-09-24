import { createElement } from '../../utils/domHelpers.js';
import { connectData } from '../../data/contact/connectData.js';

export function createConnectFormComponent() {
  const list = createElement('div', { className: 'connect-info-list' });

  connectData.items.forEach(item => {
    const icon = createElement('i', { className: `fa-solid ${item.icon}` });
    const iconBox = createElement('div', { className: 'connect-icon-box' }, icon);

    const details = createElement('div', { className: 'connect-details' },
      createElement('h4', {}, item.title),
      createElement('p', {}, item.value)
    );

    const card = createElement('a', {
      href: item.action,
      className: 'connect-card',
      target: item.action.startsWith('http') ? '_blank' : '_self'
    }, iconBox, details);

    list.appendChild(card);
  });

  return list;
}