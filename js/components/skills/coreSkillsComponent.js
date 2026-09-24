import { createElement } from '../../utils/domHelpers.js';
import { coreSkillsData } from '../../data/skills/coreSkillsData.js';

export function createCoreSkillsComponent() {
  const grid = createElement('div', { className: 'skills-grid' });

  coreSkillsData.forEach(skill => {

    const icon = createElement('i', {
      className: `fa-solid ${skill.icon} skill-icon`
    });

    const nameGroup = createElement(
      'div',
      { className: 'skill-name-group' },
      icon,
      skill.name
    );

    const levelText = createElement(
      'span',
      { className: 'code-font' },
      `${skill.level}%`
    );

    const info = createElement(
      'div',
      { className: 'skill-info' },
      nameGroup,
      levelText
    );

    const barFill = createElement('div', {
      className: 'bar-fill'
    });

    barFill.setAttribute('data-width', `${skill.level}%`);
    barFill.style.width = '0%';

    const barTrack = createElement(
      'div',
      { className: 'bar-track' },
      barFill
    );

    const card = createElement(
      'div',
      { className: 'skill-bar-card' },
      info,
      barTrack
    );

    grid.appendChild(card);
  });

  return grid;
}