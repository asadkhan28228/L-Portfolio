/**
 * Master Layout Coordinator
 * Orchestrates the execution and rendering of all UI layout sections.
 */

import { renderHeaderContainer } from './components/header/headerContainer.js';
import { renderHeroContainer } from './components/hero/heroContainer.js';
import { renderWhyChooseMeContainer } from './components/whyChooseMe/whyChooseMeContainer.js';
import { renderAboutContainer } from './components/about/aboutContainer.js';
import { renderSkillsContainer } from './components/skills/skillsContainer.js';
import { renderEducationContainer } from './components/education/renderEducationContainer.js';
import { renderExperienceContainer } from './components/experience/renderExperienceContainer.js';
import { renderLanguagesContainer } from './components/languages/renderLanguagesContainer.js';
import { renderProjectsContainer } from './components/projects/projectsContainer.js';
import { renderCertificationsContainer } from './components/certifications/certsContainer.js';
import { renderContactContainer } from './components/contact/contactContainer.js';
import { renderFooterContainer } from './components/footer/footerContainer.js';
import { initAnimationObserver } from './utils/animationObserver.js';
import { initTheme } from './utils/themeManager.js';

export function renderView() {
  initTheme();

  renderHeaderContainer();
  renderHeroContainer();
  renderWhyChooseMeContainer();
  renderAboutContainer();
  renderSkillsContainer();
  renderEducationContainer();
  renderExperienceContainer();
  renderProjectsContainer();
  renderCertificationsContainer();
  renderLanguagesContainer();
  renderContactContainer();
  renderFooterContainer();

  // Initialize scroll-reveal observers across all newly mounted elements
  initAnimationObserver('.section');
}