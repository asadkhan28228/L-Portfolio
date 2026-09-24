import { createElement } from '../../utils/domHelpers.js';
import { personalInfoData } from '../../data/about/personalInfoData.js';
import { heroData } from '../../data/hero/heroData.js';

export function createProfileImageComponent() {
  const wrapper = createElement('div', { className: 'hero-avatar-wrapper' });
  const ring = createElement('div', { className: 'avatar-ring' });

  if (heroData.profileImage) {
    const img = createElement('img', {
      className: 'profile-img',
      src: heroData.profileImage,
      alt: personalInfoData.fullName || 'Profile Picture'
    });
    ring.appendChild(img);
  } else {
    const initials = getInitials(personalInfoData.fullName || 'ZK');
    const avatarInner = createElement('div', { className: 'avatar-inner' },
      createElement('span', { className: 'avatar-initials' }, initials)
    );
    ring.appendChild(avatarInner);
  }

  wrapper.appendChild(ring);
  return wrapper;
}

function getInitials(fullName) {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}