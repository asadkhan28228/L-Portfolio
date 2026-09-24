import { createElement } from '../../utils/domHelpers.js';
import { createHeroTextComponent } from './heroTextComponent.js';
import { createProfileImageComponent } from './profileImageComponent.js';

export function renderHeroContainer() {
  const heroMount = document.getElementById('hero-mount');
  if (!heroMount) return;

  const container = createElement('div', { className: 'hero-container' },
    createHeroTextComponent(),
    createProfileImageComponent()
  );

  heroMount.innerHTML = '';
  heroMount.appendChild(container);
}
