/**
 * Theme Manager
 * Handles color-scheme cycling ([data-theme] on <html>) and
 * light/dark mode (.light-mode on <html>), persisted to localStorage.
 */

const THEME_KEY = 'zk-portfolio-theme';
const MODE_KEY = 'zk-portfolio-mode';

export const THEME_ORDER = [
  'cyan-purple',
  'modern-blue',
  'orange-blue',
  'green-teal',
  'magenta-purple'
];

export function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const savedMode = localStorage.getItem(MODE_KEY);

  if (savedTheme && THEME_ORDER.includes(savedTheme)) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // White/light mode is the default for this portfolio.
  if (savedMode !== 'dark') {
    document.documentElement.classList.add('light-mode');
  }
}

export function cycleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'cyan-purple';
  const currentIndex = THEME_ORDER.indexOf(current);
  const next = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length];

  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  return next;
}

export function toggleMode() {
  const isLight = document.documentElement.classList.toggle('light-mode');
  localStorage.setItem(MODE_KEY, isLight ? 'light' : 'dark');
  return isLight ? 'light' : 'dark';
}

export function getMode() {
  return document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
}
