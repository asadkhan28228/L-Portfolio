import { createElement } from '../../utils/domHelpers.js';
import { quickFactsData } from '../../data/about/quickFactsData.js';

export function createQuickFactsComponent() {
  const header = createElement('div', { className: 'quick-facts-header' },
    createElement('i', { className: 'fa-solid fa-address-card' }),
    createElement('h4', {}, 'Quick Facts')
  );

  const factsList = createElement('div', { className: 'facts-list' });
  quickFactsData.forEach(fact => {
    const item = createElement('div', { className: 'fact-item' },
      createElement('span', { className: 'fact-label' }, fact.label),
      createElement('span', { className: 'fact-value' }, fact.value)
    );
    factsList.appendChild(item);
  });

  const card = createElement('div', { className: 'quick-facts-card' },
    header,
    factsList
  );

  return card;
}