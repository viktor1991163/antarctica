const initBurger = () => {
  const siteList = document.querySelector('.main-nav__list--header');
  const button = document.querySelector('.main-nav__toggle');
  const header = document.querySelector('.main-header');
  const logoIcon = document.querySelector('.logo-link__icon');
  const overlay = document.querySelector('.overlay');

  header.classList.remove('main-header--no-js');

  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay--active');
    header.classList.remove('main-header--opened');
    button.classList.remove('main-nav__toggle--closed');
    button.classList.add('main-nav__toggle--opened');
    siteList.style.display = 'none';
    logoIcon.style.fill = '$color-alice-blue';
  });

  button.addEventListener('click', () => {
    if (button.classList.contains('main-nav__toggle--closed')) {
      overlay.classList.remove('overlay--active');
      header.classList.remove('main-header--opened');
      button.classList.remove('main-nav__toggle--closed');
      button.classList.add('main-nav__toggle--opened');
      siteList.style.display = 'none';
      logoIcon.style.fill = '$color-alice-blue';
    } else {
      overlay.classList.add('overlay--active');
      header.classList.remove('main-header--no-js');
      button.classList.remove('main-nav__toggle--opened');
      button.classList.add('main-nav__toggle--closed');
      siteList.style.display = 'block';
      header.classList.add('main-header--opened');
      logoIcon.style.fill = '$color-tangaroa';
    }
  });
};

export {initBurger};
