import { createElement } from '../../utils/domHelpers.js';
import { footerData } from '../../data/footer/footerData.js';

export function createCopyrightComponent() {
  const currentYear = new Date().getFullYear();
  const text = footerData?.copyright
    ? footerData.copyright.replace(/\b(19|20)\d{2}\b/, currentYear)
    : `© ${currentYear} All rights reserved.`;

  return createElement('p', { className: 'copyright-text' }, text);
}
