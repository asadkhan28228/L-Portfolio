/**
 * App Entry Point
 * Boots up the modular portfolio application on DOM load.
 */

import { renderView } from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  renderView();
});