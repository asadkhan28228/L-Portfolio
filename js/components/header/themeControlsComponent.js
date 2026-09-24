import { createElement } from '../../utils/domHelpers.js';
import { cycleTheme, toggleMode, getMode } from '../../utils/themeManager.js';

export function createThemeControlsComponent() {
  const paletteBtn = createElement('button', {
    type: 'button',
    className: 'icon-control-btn theme-toggle-btn',
    'aria-label': 'Switch color theme',
    onClick: () => cycleTheme()
  }, createElement('i', { className: 'fa-solid fa-palette' }));

  const modeIcon = createElement('i', {
    className: getMode() === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
  });

  const modeBtn = createElement('button', {
    type: 'button',
    className: 'icon-control-btn mode-toggle-btn',
    'aria-label': 'Toggle light and dark mode',
    onClick: () => {
      const mode = toggleMode();
      modeIcon.className = mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }, modeIcon);

  return createElement('div', { className: 'header-controls' }, paletteBtn, modeBtn);
}
