import { createElement } from '../../utils/domHelpers.js';
import { experienceData } from '../../data/experience/experienceData.js';

function parseCustomDate(dateStr) {
  if (dateStr === 'Present') return new Date();

  const [month, year] = dateStr.split('/');
  return new Date(`${year}-${month}-01`);
}

function calculateDynamicDuration(startDateStr, endDateStr) {
  const start = parseCustomDate(startDateStr);
  const end = parseCustomDate(endDateStr);

  const diffYears = end.getFullYear() - start.getFullYear();
  const diffMonths = end.getMonth() - start.getMonth();
  const totalMonths = Math.max(1, diffYears * 12 + diffMonths + 1);

  const maxScaleMonths = 36;
  const percentage = Math.min(
    100,
    Math.round((totalMonths / maxScaleMonths) * 100)
  );

  const label =
    endDateStr === 'Present'
      ? `${totalMonths} Mos Active`
      : `3 Mos Internship completed`;

  return { percentage, totalMonths, label };
}

export function createExperienceComponent() {
  const container = createElement('div', {
    className: 'experience-container'
  });

  experienceData.forEach(item => {
    const { percentage, totalMonths, label } =
      calculateDynamicDuration(
        item.startDate,
        item.endDate
      );

    const durationEl = createElement(
      'span',
      { className: 'experience-duration' },
      `${item.startDate} – ${item.endDate}`
    );

    const scoreInlineEl = createElement(
      'span',
      { className: 'experience-grade-inline code-font' },
      label
    );

    const degreeEl = createElement(
      'h3',
      { className: 'experience-degree' },
      item.role
    );

    const instituteEl = createElement(
      'p',
      { className: 'experience-institute' },
      item.company
    );

    const leftGroup = createElement(
      'div',
      { className: 'experience-left' },
      durationEl,
      scoreInlineEl,
      degreeEl,
      instituteEl
    );

    // SVG Stroke Ring
    // Starts at 12 o'clock and fills counter-clockwise.
    const svgBadge = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    svgBadge.setAttribute(
      'class',
      'experience-svg-ring'
    );

    svgBadge.setAttribute(
      'viewBox',
      '0 0 36 36'
    );

    svgBadge.innerHTML = `
      <path
        class="ring-track"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 0 0 31.831
           a 15.9155 15.9155 0 0 0 0 -31.831"
      />

      <path
        class="ring-progress"
        stroke-dasharray="0, 100"
        data-percentage="${percentage}"
        d="M18 2.0845
           a 15.9155 15.9155 0 0 0 0 31.831
           a 15.9155 15.9155 0 0 0 0 -31.831"
      />

      <text
        x="18"
        y="20.5"
        class="ring-text code-font"
        style="font-size: 5.5px;"
      >
        ${totalMonths} Mos
      </text>
    `;

    const circularBadge = createElement(
      'div',
      { className: 'experience-circular-badge' },
      svgBadge
    );

    const rowCard = createElement(
      'div',
      { className: 'experience-row-card' },
      leftGroup,
      circularBadge
    );

    container.appendChild(rowCard);
  });

  return container;
}