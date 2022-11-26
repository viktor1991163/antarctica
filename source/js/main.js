import {iosVhFix} from './utils/ios-vh-fix';
import {initMap} from './modules/map.js';
import {initBurger} from './modules/burger.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initBurger();
  initMap();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {

  });
});
