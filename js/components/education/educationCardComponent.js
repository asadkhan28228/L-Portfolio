import { createElement } from '../../utils/domHelpers.js';
import { educationData } from '../../data/education/educationData.js';

export function createEducationComponent() {
  const container = createElement('div', { className: 'education-container' });

  educationData.forEach(item => {
    // Automatically calculate percentage and round it to the nearest whole number
    const percentage = Math.round((item.marksGpa / item.totalMarksGpa) * 100);
    const scoreText = `${item.marksGpa} / ${item.totalMarksGpa} (${item.scoreLabel})`;

    const durationEl = createElement('span', { className: 'education-duration' }, item.duration);
    const scoreInlineEl = createElement('span', { className: 'education-grade-inline code-font' }, scoreText);
    const degreeEl = createElement('h3', { className: 'education-degree' }, item.degree);
    const instituteEl = createElement('p', { className: 'education-institute' }, item.institute);

    const leftGroup = createElement('div', { className: 'education-left' }, durationEl, scoreInlineEl, degreeEl, instituteEl);

    // SVG Stroke Ring (True hollow center, only border stroke progresses)
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