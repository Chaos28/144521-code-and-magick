'use strict';

// color-settings.js

// поиск SVG элемента с мантией, глазами и фаерболлом мага
(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoatField = setupWizard.querySelector('.wizard-coat');
  var wizardEyesField = setupWizard.querySelector('.wizard-eyes');
  var fireballField = document.querySelector('.setup-fireball-wrap');

  // изменение цвета мантии мага

  var wizardCoatHandler = function (wizards) {
    wizardCoatField.addEventListener('click', function () {
      wizardCoatField.style.fill = window.getRandomArrayElement(wizards).colorCoat;
      document.querySelector('input[name=coat-color]').value = wizardCoatField.style.fill;
    });
  };


  // изменение цвета глаз мага
  var wizardEyesHandler = function (wizards) {
    wizardEyesField.addEventListener('click', function () {
      wizardEyesField.style.fill = window.getRandomArrayElement(wizards).colorEyes;
      document.querySelector('input[name=eyes-color]').value = wizardEyesField.style.fill;
    });
  };

  // изменение цвета фаерболла

  var wizardFireballHandler = function (wizards) {
    fireballField.addEventListener('click', function () {
      fireballField.style.background = window.getRandomArrayElement(wizards).colorFireball;
      document.querySelector('input[name=fireball-color]').value = fireballField.style.background;
    });
  };

  window.colorSettings = {
    wizardCoatHandler: wizardCoatHandler,
    wizardEyesHandler: wizardEyesHandler,
    wizardFireballHandler: wizardFireballHandler
  };
})();
