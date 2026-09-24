import { createElement } from '../../utils/domHelpers.js';

export function createCertCardComponent(cert) {
  const badgeIcon = createElement('i', { className: `fa-solid ${cert.badgeIcon}` });
  const badgeWrapper = createElement('div', { className: 'cert-badge-wrapper' }, badgeIcon);

  const title = createElement('h4', { className: 'cert-title' }, cert.title);
  const issuer = createElement('p', { className: 'cert-issuer' }, cert.issuer);
  const date = createElement('p', { className: 'cert-date' }, cert.date);

  return createElement('div', { className: 'cert-card' },
    badgeWrapper,
    title,
    issuer,
    date
  );
}