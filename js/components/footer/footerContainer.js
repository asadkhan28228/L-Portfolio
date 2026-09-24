import { createElement } from '../../utils/domHelpers.js';
import { createCopyrightComponent } from './copyrightComponent.js';
import { createBackToTopComponent } from './backToTopComponent.js';

export function renderFooterContainer() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  const container = createElement('div', { className: 'footer-container' },
    createCopyrightComponent(),
    createBackToTopComponent()
  );

  footerRoot.innerHTML = '';
  footerRoot.appendChild(container);
}
