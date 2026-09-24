import { createElement } from '../../utils/domHelpers.js';
import { heroData } from '../../data/hero/heroData.js';
import { findMeOnlineData } from '../../data/contact/findMeOnlineData.js';
import { connectData } from '../../data/contact/connectData.js';

function buildHeroSocialRow() {
  const row = createElement('div', { className: 'hero-social-row' });

  const github = findMeOnlineData.find(p => p.name === 'GitHub');
  const linkedin = findMeOnlineData.find(p => p.name === 'LinkedIn');
  const email = connectData.items.find(i => i.title === 'Email');
  const phone = connectData.items.find(i => i.title.includes('Phone'));

  const entries = [
    github && { url: github.url, icon: 'fa-brands fa-github', label: 'GitHub' },
    linkedin && { url: linkedin.url, icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
    email && { url: email.action, icon: 'fa-solid fa-envelope', label: 'Email' },
    phone && { url: phone.action, icon: 'fa-solid fa-phone', label: 'Phone' }
  ].filter(Boolean);

  entries.forEach(entry => {
    row.appendChild(createElement('a', {
      href: entry.url,
      target: entry.url.startsWith('http') ? '_blank' : '_self',
      rel: 'noopener noreferrer',
      className: 'hero-social-icon',
      'aria-label': entry.label
    }, createElement('i', { className: entry.icon })));
  });

  return row;
}

export function createHeroTextComponent() {
  const badge = createElement('div', { className: 'hero-badge' },
    createElement('i', { className: 'fa-solid fa-mobile-screen-button' }),
    createElement('span', {}, heroData.badge)
  );

  const title = createElement('h1', { className: 'hero-title' }, heroData.title);
  const tagline = createElement('p', { className: 'hero-tagline' }, heroData.description);

  const primaryBtn = createElement('a', { href: '#projects-mount', className: 'btn btn-primary' },
    createElement('i', { className: 'fa-solid fa-diagram-project' }),
    createElement('span', {}, 'View Projects')
  );
  const secondaryBtn = createElement('a', { href: '#contact-mount', className: 'btn btn-secondary' },
    createElement('i', { className: 'fa-solid fa-envelope' }),
    createElement('span', {}, 'Contact Me')
  );
  const ctaGroup = createElement('div', { className: 'hero-cta-group' }, primaryBtn, secondaryBtn);

  return createElement('div', { className: 'hero-text-block' },
    badge, title, tagline, ctaGroup, buildHeroSocialRow()
  );
}
