'use strict';

// поиск окна настройки, кнопок открытия и закрытия

(function () {
  var dialogMenu = document.querySelector('.setup');
  var dialogMenuOpen = document.querySelector('.setup-open');
  var dialogMenuClose = dialogMenu.querySelector('.setup-close');

  window.dialog = {
    dialogMenu: dialogMenu,
    dialogMenuOpen: dialogMenuOpen,
    dialogMenuClose: dialogMenuClose
  };

})();
