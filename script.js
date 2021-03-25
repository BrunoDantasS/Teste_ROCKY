function responsiveMenu() {
  const element = document.querySelector('.menu-mobile-icon');

  element.addEventListener('click', () => {
    const menuItems = document.querySelector('.menu-items');

    if (menuItems.classList.contains('show')) {
      menuItems.classList.add('hide');
      menuItems.classList.remove('show');
    } else {
      menuItems.classList.add('show');
      menuItems.classList.remove('hide');
    }
  });
}

function scrollPage() {
  const header = document.querySelector('header');
  const img = document.getElementById('logo-header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scroll-header', window.scrollY > 100);
    if (header.classList.contains('scroll-header') == true) {
      img.src = "assets/web/logo-black.png"
    } else {
      img.src = "assets/web/logo.png"
    }
  });
}

scrollPage();
responsiveMenu();