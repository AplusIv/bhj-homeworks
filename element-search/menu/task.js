'use strict';

const menuLinks = [...document.querySelectorAll('.menu__link')];
console.log(menuLinks);
const subMenus = [...document.querySelectorAll('ul.menu_sub')];
console.log(document.querySelectorAll('ul.menu_sub'));


for (let menuLink of menuLinks) {
  menuLink.onclick = () => {
    console.log(menuLink.closest('li').querySelector('ul.menu_sub') !== null); // содержит ли ссылка подменю

    if (menuLink.closest('li').querySelector('ul.menu_sub') !== null && menuLink.closest('li').querySelector('ul.menu_sub').classList.contains('menu_active')) {
      menuLink.closest('li').querySelector('ul.menu_sub').className = 'menu menu_sub';
      return false;
    } else
      if (menuLink.closest('li').querySelector('ul.menu_sub') !== null) {
        for (let subMenu of subMenus) {
          subMenu.className = 'menu menu_sub';
        }
        menuLink.closest('li').querySelector('ul.menu_sub').className = 'menu menu_sub menu_active';
        return false;
      }
  }
}
