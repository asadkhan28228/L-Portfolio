import { createElement } from '../../utils/domHelpers.js';

export function createProjectCardComponent(project) {

  // Project Image
  const projectImage = createElement('img', {
    src: project.image,
    alt: project.title,
    className: 'project-image'
  });

  // Image Container
  const mediaContainer = createElement(
    'div',
    { className: 'project-media-container' },
    projectImage
  );

  // Project Title
  const title = createElement(
    'h3',
    { className: 'project-title' },
    project.title
  );

  // Project Description
  const description = createElement(
    'p',
    { className: 'project-description' },
    project.description
  );

  // Project Content
  const content = createElement(
    'div',
    { className: 'project-content' },
    title,
    description
  );

  // Complete Project Card
  return createElement(
    'div',
    { className: 'project-card' },
    mediaContainer,
    content
  );
}