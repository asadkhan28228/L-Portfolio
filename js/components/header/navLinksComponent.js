import { createElement } from '../../utils/domHelpers.js';

export function createNavLinksComponent(navItems = []) {
  const navList = createElement('ul', { className: 'nav-list' });

  navItems.forEach(item => {
    const linkChildren = [];
    if (item.icon) {
      linkChildren.push(createElement('i', { className: `fa-solid ${item.icon}` }));
    }
    linkChildren.push(createElement('span', {}, item.label));

    const link = createElement('a', { 
      href: item.href, 
      className: 'nav-link',
      onclick: (e) => {
        const targetId = item.href;
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }, ...linkChildren);
    
    navList.appendChild(createElement('li', { className: 'nav-item' }, link));
  });

  return createElement('nav', { className: 'site-nav' }, navList);
}