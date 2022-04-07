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
});

const buttonsProject = document.querySelectorAll('.works__card button');
const closeIcon = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');
const backgroundModal = document.querySelector('.overlay');
const projectName = document.querySelector('.project-name');
const projectFeature = document.querySelector('.project-feature');
const projectBack = document.querySelector('.project-background');
const projectYear = document.querySelector('.project-year');
const projectImage = document.querySelector('.project-image');
const projectDescription = document.querySelector('.project-description');
const projectTool1 = document.querySelector('.project-tool1');
const projectTool2 = document.querySelector('.project-tool2');
const projectTool3 = document.querySelector('.project-tool3');
const projectLinkLive = document.querySelector('.project-linkLive');
const projectLinkSource = document.querySelector('.project-linkSource');

