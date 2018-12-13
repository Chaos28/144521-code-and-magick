'use strict';

// color-settings.js

// поиск SVG элемента с мантией и глазами мага
(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoatField = setupWizard.querySelector('.wizard-coat');
  var wizardEyesField = setupWizard.querySelector('.wizard-eyes');

  // изменение цвета мантии мага

  wizardCoatField.addEventListener('click', function () {
    wizardCoatField.style.fill = window.getRandomArrayElement(window.data.wizardCoatColor);
    document.querySelector('input[name=coat-color]').value = wizardCoatField.style.fill;
  });

  // изменение цвета глаз мага

  wizardEyesField.addEventListener('click', function () {
    wizardEyesField.style.fill = window.getRandomArrayElement(window.data.wizardEyesColor);
    document.querySelector('input[name=eyes-color]').value = wizardEyesField.style.fill;
  });

  // изменение цвета фаерболла

  var fireballField = document.querySelector('.setup-fireball-wrap');

  fireballField.addEventListener('click', function () {
    fireballField.style.background = window.getRandomArrayElement(window.data.wizardFireballColor);
    document.querySelector('input[name=fireball-color]').value = fireballField.style.background;
  });
})();
