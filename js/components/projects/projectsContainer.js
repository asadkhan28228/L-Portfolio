import { createElement } from '../../utils/domHelpers.js';
import { projectsData } from '../../data/projects/projectsData.js';
import { createProjectCardComponent } from './projectCardComponent.js';

export function renderProjectsContainer() {
  const projectsMount = document.getElementById('projects-mount');
  if (!projectsMount) return;

  const title = createElement('h2', { className: 'section-title' }, 'Projects');
  const subtitle = createElement('p', { className: 'section-subtitle' }, 'A showcase of creative projects, visual concepts, and impactful designs.');

  const grid = createElement('div', { className: 'projects-grid' });
  projectsData.forEach(project => {
    grid.appendChild(createProjectCardComponent(project));
  });

  projectsMount.appendChild(title);
  projectsMount.appendChild(subtitle);
  projectsMount.appendChild(grid);
}
