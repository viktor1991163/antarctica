import {iosVhFix} from './utils/ios-vh-fix';
import {createMap} from './modules/map.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();


  const siteList = document.querySelector('.main-nav__list--header');
  const button = document.querySelector('.main-nav__toggle');
  const header = document.querySelector('.main-header');
  const logoIcon = document.querySelector('.logo-link__icon--header');

  button.addEventListener('click', () => {
    if (button.classList.contains('main-nav__toggle--closed')) {
      button.classList.remove('main-nav__toggle--closed');
      button.classList.add('main-nav__toggle--opened');
      siteList.style.display = 'none';
      header.style.background = 'transparent';
      logoIcon.style.fill = '#f9fbfd';
    } else {
      button.classList.remove('main-nav__toggle--opened');
      button.classList.add('main-nav__toggle--closed');
      siteList.style.display = 'block';
      header.style.background = '#f9fbfd';
      logoIcon.style.fill = '#011c40';
    }
  });



  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    createMap();
  });
});
