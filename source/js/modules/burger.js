const initBurger = () => {
  const siteList = document.querySelector('.main-nav__list--header');
  const button = document.querySelector('.main-nav__toggle');
  const header = document.querySelector('.main-header');
  const logoIcon = document.querySelector('.logo-link__icon--header');
  const overlay = document.querySelector('.overlay');
  const mainNavLinks = document.querySelectorAll('.main-nav__link--header');

  header.classList.remove('main-header--no-js');

  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay--active');
    header.classList.remove('main-header--opened');
    button.classList.remove('main-nav__toggle--closed');
    button.classList.add('main-nav__toggle--opened');
    siteList.style.display = 'none';
    logoIcon.style.fill = '#f9fbfd';
  });

  button.addEventListener('click', () => {
    if (button.classList.contains('main-nav__toggle--closed')) {
      overlay.classList.remove('overlay--active');
      header.classList.remove('main-header--opened');
      button.classList.remove('main-nav__toggle--closed');
      button.classList.add('main-nav__toggle--opened');
      siteList.style.display = 'none';
      document.body.style.overflow = '';
      logoIcon.style.fill = '#f9fbfd';

    } else {
      overlay.classList.add('overlay--active');
      header.classList.remove('main-header--no-js');
      button.classList.remove('main-nav__toggle--opened');
      button.classList.add('main-nav__toggle--closed');
      siteList.style.display = 'block';
      header.classList.add('main-header--opened');
      document.body.style.overflow = 'hidden';
      logoIcon.style.fill = '#011c40';
    }
  });

  mainNavLinks.forEach((e) => {
    e.addEventListener('click', () => {
      overlay.classList.remove('overlay--active');
      header.classList.remove('main-header--opened');
      button.classList.remove('main-nav__toggle--closed');
      button.classList.add('main-nav__toggle--opened');
      siteList.style.display = 'none';
      document.body.style.overflow = '';
      logoIcon.style.fill = '#f9fbfd';
    });
  });
};

export {initBurger};
