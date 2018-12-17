'use strict';

// расширяем валидацию полей формы. Изменяем появляющееся сообщение
(function () {
  var userNameInput = window.dialog.dialogMenu.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // функция закрытия окна настройки при отправке данных формы

  var sendFormHandler = function () {
    window.dialog.dialogMenu.classList.add('hidden');
  };

  // функция появления ошибки при неудачной отправке данных формы

  var sendFormErrorHandler = function (formErrorMessage) {
    var errorNode = document.createElement('div');
    errorNode.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorNode.style.position = 'absolute';
    errorNode.style.left = 0;
    errorNode.style.right = 0;
    errorNode.style.top = 100 + 'px';
    errorNode.style.fontSize = '50px';
    document.querySelector('.setup').style.opacity = 0.5;

    errorNode.textContent = formErrorMessage;
    document.body.insertAdjacentElement('afterbegin', errorNode);
  };

  // обработчик на отправку формы по нажатию на кнопку

  var form = window.dialog.dialogMenu.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), sendFormHandler, sendFormErrorHandler);
    evt.preventDefault();
  });
})();
