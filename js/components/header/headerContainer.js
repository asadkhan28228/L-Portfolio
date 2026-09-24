import { createElement } from '../../utils/domHelpers.js';
import { headerData } from '../../data/header/headerData.js';
import { navLinksData } from '../../data/header/navLinksData.js';
import { createLogoComponent } from './logoComponent.js';
import { createNavLinksComponent } from './navLinksComponent.js';
import { createFindMeHeaderComponent } from './findMeHeaderComponent.js';
import { createThemeControlsComponent } from './themeControlsComponent.js';

function initNavScrollSpy(navEl) {
  const links = [...navEl.querySelectorAll('.nav-link')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const match = links.find(l => l.getAttribute('href') === `#${entry.target.id}`);
      if (match) match.classList.add('active');
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

export function renderHeaderContainer() {
  const headerRoot = document.getElementById('header-root');
  if (!headerRoot) return;

  const navItems = navLinksData?.length ? navLinksData : (headerData?.navLinks || []);

  const logo = createLogoComponent(headerData);
  const nav = createNavLinksComponent(navItems);
  const findMe = createFindMeHeaderComponent();
  const controls = createThemeControlsComponent();

  const navToggle = createElement('button', {
    type: 'button',
    className: 'nav-toggle-btn',
    'aria-label': 'Toggle navigation menu',
    onClick: () => nav.querySelector('.nav-list').classList.toggle('open')
  }, createElement('i', { className: 'fa-solid fa-bars' }));

  const rightGroup = createElement('div', { className: 'header-right-group' }, findMe, controls, navToggle);
  const container = createElement('div', { className: 'header-container' }, logo, nav, rightGroup);

  headerRoot.innerHTML = '';
  headerRoot.appendChild(container);

  initNavScrollSpy(nav);
}
