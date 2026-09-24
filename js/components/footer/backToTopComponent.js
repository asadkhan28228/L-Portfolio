import { createElement } from '../../utils/domHelpers.js';

export function createBackToTopComponent() {
  return createElement('button', {
    type: 'button',
    className: 'back-to-top-btn',
    'aria-label': 'Back to top',
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
  }, createElement('i', { className: 'fa-solid fa-arrow-up' }));
}
