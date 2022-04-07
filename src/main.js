// Mobile menu functionality
import {
  menuIconMobile, menuLinks, openMenu, closeMenu,
} from './menu.js';

// Popup window functionality
import { createModal, projects } from './popup.js';

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// Event that detects when the page loads
document.addEventListener('DOMContentLoaded', () => {
  createModal();
