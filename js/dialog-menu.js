'use strict';

// dialog-menu.js
// функции для работы с окном (открытие, закрытие)

// функция возврата события evt со значением кнопки ESC

(function () {
  var isEscEvent = function (evt) {
    return evt.keyCode === window.utilites.ESC_KEYCODE;
  };

  // описываем открытие и закрытие диалогового окна персонажа по нажатию на кнопки мыши и клавиатурой

  var onDialogMenuEscPress = function (evt) {
    if (evt.keyCode === window.utilites.ESC_KEYCODE) {
      closeDialogMenu();
    }
  };

  var openDialogMenu = function () {
    window.dialog.dialogMenu.classList.remove('hidden');
    document.addEventListener('keydown', onDialogMenuEscPress);
  };

  var closeDialogMenu = function () {
    window.dialog.dialogMenu.classList.add('hidden');
    window.dialog.dialogMenu.style = '';

  };

  // открытие окна при щелчке мышью на иконке

  window.dialog.dialogMenuOpen.addEventListener('click', function () {
    openDialogMenu();
  });

  // открытие окна при нажатии ENTER

  window.dialog.dialogMenuOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utilites.ENTER_KEYCODE) {
      openDialogMenu();
    }
  });

  // закрытие окна при нажатии на крестик

  window.dialog.dialogMenuClose.addEventListener('click', function () {
    closeDialogMenu();
  });

  // закрытие окна при нажатии ENTER на крестике с фокусом

  window.dialog.dialogMenuClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utilites.ENTER_KEYCODE) {
      closeDialogMenu();
    }
  });

  // отмена действия кнопки ESC при фокусе на input

  var inputName = window.dialog.dialogMenu.querySelector('.setup-user-name');

  inputName.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      evt.stopPropagation();
    }
  });
})();
