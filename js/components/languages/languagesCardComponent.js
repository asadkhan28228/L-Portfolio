import { createElement } from '../../utils/domHelpers.js';
import { languagesData } from '../../data/languages/languagesData.js';

export function languagesCardComponent() {
  const container = createElement('div', { className: 'education-container' });

  languagesData.forEach(item => {
    const percentage = item.percentage;
    const proficiencyText = item.proficiency;

    const titleEl = createElement('h3', { className: 'education-degree' }, item.language);
    const proficiencyEl = createElement('p', { className: 'education-institute' }, proficiencyText);

    const leftGroup = createElement('div', { className: 'education-left' }, titleEl, proficiencyEl);

    const svgBadge = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgBadge.setAttribute('class', 'education-svg-ring');
    svgBadge.setAttribute('viewBox', '0 0 36 36');

    svgBadge.innerHTML = `
      <path class="ring-track"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="ring-progress"
        stroke-dasharray="0, 100"
        data-percentage="${percentage}"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.5" class="ring-text code-font">${percentage}%</text>
    `;

    const circularBadge = createElement('div', { className: 'education-circular-badge' }, svgBadge);

    const rowCard = createElement('div', { className: 'education-row-card' }, leftGroup, circularBadge);
    container.appendChild(rowCard);
  });

  return container;
}