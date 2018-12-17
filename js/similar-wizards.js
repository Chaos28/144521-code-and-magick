'use strict';

// функция создания массива с объектами магов
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  // функция создания похожих волшебников из загружаемых данных

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(window.insertWizardData(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
    window.colorSettings.wizardCoatHandler(wizards);
    window.colorSettings.wizardEyesHandler(wizards);
    window.colorSettings.wizardFireballHandler(wizards);
  };

  // функция вывода сообщения об ошибке при загрузке данных

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: gray;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.top = 100 + 'px';
    node.style.fontSize = '50px';
    document.querySelector('.setup').style.opacity = 0.5;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();
