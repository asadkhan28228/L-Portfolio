import { createElement } from '../../utils/domHelpers.js';

export function createLogoComponent(headerData) {
  const initials = headerData?.initials || 'ZK';

  return createElement('a', { href: '#hero-mount', className: 'logo-link' },
    createElement('span', { className: 'logo-code' }, '</>'),
    createElement('span', { className: 'logo-initials' }, initials)
  );
}
