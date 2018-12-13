'use strict';

// функция создания массива с объектами магов
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var getWizardList = function () {
    var wizards = [];

    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: window.getRandomArrayElement(window.data.wizardName) + ' ' + window.getRandomArrayElement(window.data.wizardSurname),
        coatColor: window.getRandomArrayElement(window.data.wizardCoatColor),
        eyesColor: window.getRandomArrayElement(window.data.wizardEyesColor)
      };
    }
    return wizards;
  };

  // функция отрисовки похожих магов

  var wizardList = getWizardList();

  var similarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardList.length; i++) {
      fragment.appendChild(window.insertWizardData(wizardList[i]));
    }
    similarListElement.appendChild(fragment);
  };

  similarWizards();
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
